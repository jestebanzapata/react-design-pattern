import { useCallback, useEffect, useState } from 'react';
import { StoreId } from '../../../store/constants/store-id.enum';
import storeManager from '../../../store/StoreManager';
import { StyledViewer } from './CounterViewer.styles';

interface CounterViewerProps {
  id: string
}

export const CounterViewer = ({ id }: CounterViewerProps) => {

  const [counter, setCounter] = useState(storeManager.getState(StoreId.Counter)?.value);
  const [isSusbcribed, setIsSubscribed] = useState(true);

  const notifyObserver = useCallback(
    (state: any) => {
      setCounter(state.value);
    },
    [id],
  );

  useEffect(() => {
    storeManager.subscribe(StoreId.Counter, notifyObserver);

    return () => {
      storeManager.unsubscribe(StoreId.Counter, notifyObserver);
    }
  }, [])


  const exec = () => {
    if(!isSusbcribed){
      storeManager.subscribe(StoreId.Counter, notifyObserver);
    }else{
      storeManager.unsubscribe(StoreId.Counter, notifyObserver);
    }
    setIsSubscribed(!isSusbcribed);
  }

  return (
    <StyledViewer>
      <span>{counter}</span>
      <button onClick={exec}>{isSusbcribed? 'Unsubscribe': 'Subscribe'}</button>
    </StyledViewer>
  )
}

export default CounterViewer;
