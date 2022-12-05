import { ActionStore } from "../../store";
import { IObservable } from "./IObservable";
import { stateUpdated } from "./IObserver";

class Store implements IObservable{

  id: string;

  state: any;

  reducer: (state: any, action: ActionStore) => void;

  observers: stateUpdated[] = [];

  constructor(id: string, initialState: any = {}, reducer: (state: any, action: ActionStore) => void){
    this.id = id;
    this.state= initialState;
    this.reducer = reducer;
  }

  dispatch(action: ActionStore) {
    this.state = this.reducer(this.state, action);
    //Notify all of the observers
    this.notifyObservers(this.state);
  }

  addObserver(observer: stateUpdated) {
    this.observers.push(observer);
  }
  removeObserver(observer: stateUpdated) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }
  notifyObservers(data: any) {
    this.observers.forEach(observer => {
      observer(data);
    })
  }

}

export default Store;