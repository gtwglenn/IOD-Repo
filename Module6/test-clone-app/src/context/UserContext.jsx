import React, {useContext, useState} from "react";

// 1. Create the context
const UserContext = React.createContext();

// Custom provider component for this context. Uses its own state to keep track of the current user.
// Use it in a top level component such as App.jsx like <UserProvider>...</UserProvider>
export const UserProvider = (props) => {
    const [currentUser, setCurrentUser] = useState({}); // default user object

    // sets user object in state, shared via context
    const handleUpdateUser = (user) => {
        setCurrentUser(user);
    }

    // 3. Provide the context. The Provider property of any context (UserContext.Provider)
    // sends data via its value prop to all children at every level, who can then use it as needed
    return (
        <UserContext.Provider value={{currentUser, handleUpdateUser}}>
            {props.children}
        </UserContext.Provider>
    ); 
}

// 2. Use the context. This custom hook allows easy access of this particular context
export const useUserContext = () => {
    return useContext(UserContext);
}