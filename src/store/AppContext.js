import React, { createContext, useState, useRef, useEffect } from 'react';

const AppContext = createContext();


const AppContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [page, setPage] = useState('');
  const [subPage, setSubPage] = useState('');

  useEffect(() => {
    try{
      if(pageData){
          const data = JSON.parse(pageData);
          if(data && data.hasOwnProperty('user')){
            setUserData(data.user);
          }
          if(data && data.hasOwnProperty('page')){
            setPage(data.page);
          }
          if(data && data.hasOwnProperty('subPage')){
            setSubPage(data.subPage);
          }
        }
    }catch(error){
        console.error('error :>> ', error);
    }
  }, [])

  return (
    <AppContext.Provider value={{
      userData,
      setUserData,
      page,
      setPage,
      subPage, 
      setSubPage
    }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext };
