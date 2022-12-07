import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { CounterReducer, StoreId } from './store';
import { CounterContainer } from './components/organisms/CounterContainer/CounterContainer';
import storeManager from './store/StoreManager';
import { GenericTreeNode } from './components/molecules/TreeView/GenericTreeNode';
import TreeView from './components/molecules/TreeView/TreeView';
import { ITreeNode } from './components/molecules/TreeView/ITreeNode';

function App() {

  const [isStoreLoaded, setIsStoreLoaded] = useState<boolean>(false);

  const [treeData, setTreeData] = useState<ITreeNode>();

  const initData = () => {
    const node =new GenericTreeNode("Parent");

    const child1 = new GenericTreeNode("Child1");

    const child1Child1 = new GenericTreeNode("Child1-1");
    const child1Child2 = new GenericTreeNode("Child1-2");
    child1.addNode(child1Child1);
    child1.addNode(child1Child2);

    const child2 = new GenericTreeNode("Child2");
    node.addNode(child1);
    node.addNode(child2);
    setTreeData(node);
  };

  useEffect(() => {
    initData();
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
      {
        treeData && <TreeView name={treeData.name} children={treeData.children}/>
      }
    </div>
  );
}

export default App;
