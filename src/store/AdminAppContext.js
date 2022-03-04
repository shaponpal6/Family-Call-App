import React, { createContext, useState, useRef, useEffect } from 'react';

const AdminAppContext = createContext();


const AdminAppContextProvider = ({ children }) => {
  const [analyticData, setAnalyticData] = useState({});
  const [emailList, setEmailList] = useState([]);
  const [appUser, setAppUser] = useState([]);
  const [adminAppUser, setAdminAppUser] = useState([]);


  /**
   * Set page data into admin context on load page
   */
  useEffect(() => {
    try{
      if(pageData){
          const data = JSON.parse(pageData);
          // console.log('#page data', data)
          if(data && data.hasOwnProperty('analyticData')){
            setAnalyticData(data.analyticData);
          }
        }
    }catch(error){
        console.error('error :>> ', error);
    }
  }, [])


  /**
   * Sync Analytics data
   */
  useEffect(() => {
      if(emailList && emailList.length){
        setAnalyticData({...analyticData, emailCount: emailList.length});
      }
  }, [emailList])

  /**
   * Sync Analytics data
   */
  useEffect(() => {
      if(appUser && appUser.length){
        setAnalyticData({...analyticData, userCount: appUser.length});
      }
  }, [appUser])

  /**
   * Sync Analytics data
   */
  useEffect(() => {
      if(adminAppUser && adminAppUser.length){
        setAnalyticData({...analyticData, adminUserCount: adminAppUser.length});
      }
  }, [adminAppUser])

  
  return (
    <AdminAppContext.Provider value={{
      analyticData,
      setAnalyticData,
      emailList,
      setEmailList,
      appUser, 
      setAppUser,
      adminAppUser, 
      setAdminAppUser
    }}
    >
      {children}
    </AdminAppContext.Provider>
  );
};

export { AdminAppContextProvider, AdminAppContext };
