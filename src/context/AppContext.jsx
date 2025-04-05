import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();
export const AppContextProvider = ({children}) => {

    const navigate = useNavigate();
    const [user, setuser] = useState(null);
    const [isSeller, setisSeller] = useState(false);
    const [showUserLogin, setshowUserLogin] = useState(false);

    
    const value = {navigate, user, setuser, isSeller, setisSeller, showUserLogin, setshowUserLogin}

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => {
    return useContext(AppContext)
}