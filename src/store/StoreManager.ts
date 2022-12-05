import { ActionStore } from "../store/actions/ActionStore";
import { stateUpdated } from "./models/IObserver";
import Store from "./models/Store";

let instance: StoreManager;

interface StoreList {
  [key: string]: Store
}

class StoreManager {

  storeList: StoreList = {};

  constructor(){
    if(instance){
      throw new Error("StoreManager already instantiated");
    }
    console.log("StoreManager instantiated");
    instance = this;
  }

  getInstance() {
    return this;
  }

  createStore(id: string, initialState: any, reducer: (state: any, action: ActionStore) => void) {
    const newStore = new Store(id, initialState, reducer);
    this.storeList = { ...this.storeList, [id]: newStore};
  }

  dispatch(id: string, action: ActionStore) {
    this.storeList[id].dispatch(action);
  }

  getState(id: string) {
    return this.storeList[id]?.state;
  }

  subscribe(storeId: string, notifyObserver: stateUpdated) {
    this.storeList[storeId].addObserver(notifyObserver);
  }

  unsubscribe(storeId: string, notifyObserver: stateUpdated) {
    this.storeList[storeId].removeObserver(notifyObserver);
  }



}

// Singleton
const storeManager = new StoreManager();
export default storeManager;