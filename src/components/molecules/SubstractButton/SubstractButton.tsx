import { CounterActionTypes } from '../../../store';
import { ActionStore } from '../../../store/actions/ActionStore';
import { StoreId } from '../../../store/constants/store-id.enum';
import storeManager from '../../../store/StoreManager';

export const SubstractButton = () => {

  const substract = () => {
    const action: ActionStore = {
      type: CounterActionTypes.DecrementCounter,
      payload: {
        decrementBy: 1
      }
    }
    storeManager.dispatch(StoreId.Counter ,action);
  }

  return (
    <button onClick={substract}>Substract</button>
  )
}

export default SubstractButton;
