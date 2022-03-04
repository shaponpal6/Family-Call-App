import React, { createContext, useState, useRef, useEffect } from 'react';
import {ecommercePlatforms} from '../config'

const DashboardContext = createContext();


const DashboardContextProvider = ({ children }) => {
  const [members, setMembers] = useState([]);
  const [allowStores, setAllowStores] = useState([]);
  const connectedStoresList = ecommercePlatforms();

  const changeStore = (store) =>{
    console.log('#store :>> ', store);
    seStore(store)
    if(store === 'lazada'){
        window.location =  '/generate'
    }
  }

  useEffect(() => {
    try{
      if(pageData){
          const data = JSON.parse(pageData);
          if(data && data.hasOwnProperty('connectedStore')){
            seStore(data.connectedStore);
          }
          if(data && data.hasOwnProperty('allowStores')){
            setAllowStores(data.allowStores);
          }
        }
    }catch(error){
        console.error('error :>> ', error);
    }
  }, [])

  return (
    <DashboardContext.Provider value={{
      store,
      changeStore,
      allowStores,
      connectedStoresList,
    }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export { DashboardContextProvider, DashboardContext };
