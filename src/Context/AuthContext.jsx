import React, { useContext, useState } from "react";

export const AuthContext = React.createContext()


const AuthProvider = ( { children } )=>{
    const [login, setLogin] = useState(
localStorage.getItem("login") ? true: false
    );

const LocalStorageToken = localStorage.getItem("token");
const [token, setToken ] = useState(
    LocalStorageToken ? LocalStorageToken: ""
);

const handleLogin = (token)=>{
    setLogin(true);
    localStorage.setItem("login", "true");
  setToken(token)
    localStorage.setItem("token", token);
}
handleLogin(token)

const handleLogout = () =>{
    setLogin(false);
    localStorage.removeItem("login");
    setToken(" ");
    localStorage.removeItem("token");
};

return(
    <AuthContext.Provider value={{login, token, handleLogin, handleLogout}}>
        {children}
    </AuthContext.Provider>
)}

export default AuthProvider;

export const useAuthContext = () =>useContext(AuthContext)
    










