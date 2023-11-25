import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [name, setName] = useState(null);
    const [token, setToken] = useState(null);
    const [mail, setMail] = useState(null);



    return (
        <UserContext.Provider 
        value={{
            token,
            setToken,
            name,
            setName,
            mail,
            setMail
        }}>
            {children}
        </UserContext.Provider>
    )
}