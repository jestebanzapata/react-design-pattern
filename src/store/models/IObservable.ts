import { stateUpdated } from "./IObserver";

export interface IObservable {

  addObserver(observer: stateUpdated): void;

  removeObserver(observer: stateUpdated): void;

  notifyObservers(data: stateUpdated): void;

}