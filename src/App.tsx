import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { CounterReducer, StoreId } from './store';
import { CounterContainer } from './components/organisms/CounterContainer/CounterContainer';
import storeManager from './store/StoreManager';

function App() {

  const [isStoreLoaded, setIsStoreLoaded] = useState<boolean>(false);

  useEffect(() => {
    if(!isStoreLoaded){
      const initialState = {
        value: 0,
      };
      storeManager.createStore(StoreId.Counter, initialState, CounterReducer);
      setIsStoreLoaded(true);
    }
  }, []);

  return (
    <div className="App">
      {
        storeManager.getState(StoreId.Counter) && <>
          <CounterContainer size={9}/>
        </>
      }
    </div>
  );
}

export default App;
