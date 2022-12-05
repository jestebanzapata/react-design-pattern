import { CounterActionTypes } from '../../../store';
import { ActionStore } from '../../../store/actions/ActionStore';
import { StoreId } from '../../../store/constants/store-id.enum';
import storeManager from '../../../store/StoreManager';

export const AddButton = () => {

  const add = () => {
    const action: ActionStore = {
      type: CounterActionTypes.IncrementCounter,
      payload: {
        incrementBy: 1
      }
    }
    storeManager.dispatch(StoreId.Counter ,action);
  }

  return (
    <button onClick={add}>Add</button>
  )
}

export default AddButton;
