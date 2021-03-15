import { createContext, useContext, useState, useMemo } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const values = useMemo(() => (
    { 
      userData,
      loading,
      error,      
      setUserData,
      setLoading,
      setError
    }), 
    [
      userData,
      loading, 
      error 
    ]);   

  
  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}