import { CounterActionTypes } from '../../../store';
import { ActionStore } from '../../../store/actions/ActionStore';
import { StoreId } from '../../../store/constants/store-id.enum';
import storeManager from '../../../store/StoreManager';

export const ResetButton = () => {

  const reset = () => {
    const action: ActionStore = {
      type: CounterActionTypes.ResetCounter,
      payload: {
      }
    }
    storeManager.dispatch(StoreId.Counter ,action);
  }

  return (
    <button onClick={reset}>Reset</button>
  )
}

export default ResetButton;
