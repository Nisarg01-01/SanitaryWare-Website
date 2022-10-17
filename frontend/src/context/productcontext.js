import { createContext, useContext, useEffect } from "react";

const AppContext = createContext();

const API = "https://course-api.com/react-useReducer-cart-project";

const Appprovider = ({ children }) => {
  
   const getproducts = async () => {
    const response = await fetch(API);
    const data = await response.json();
    return data;
    }; 
  
  useEffect(() => {
    getproducts(API);
  }, []);

  return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};

const useProdcontext = () => {
  return useContext(AppContext);
};

export { AppContext, Appprovider, useProdcontext };
