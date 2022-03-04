import React ,{useState,useEffect, useContext } from "react";
import axios from 'axios';
const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      axios.get("https://fakestoreapi.com/products").then((res) => {
        setProducts(res.data);
      });
    }, []);
    return <AppContext.Provider value={{products}}>
        {children}
    </AppContext.Provider>
}

// custom hook
const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext,AppProvider,useGlobalContext};