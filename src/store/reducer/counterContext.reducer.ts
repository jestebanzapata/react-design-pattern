import { ActionStore } from "../actions/ActionStore";
import { CounterActionTypes } from "../actions/CounterActionTypes.enum";

export const CounterReducer = (state: any, action: ActionStore): any => {
  switch(action.type){
    case CounterActionTypes.IncrementCounter:
      return {
        ...state,
        value: state.value + action.payload.incrementBy
      }
    case CounterActionTypes.DecrementCounter:
      return {
        ...state,
        value: state.value - action.payload.decrementBy
      }
    case CounterActionTypes.ResetCounter:
      return {
        ...state,
        value: 0
      }
    default:
      return state;
  }
}