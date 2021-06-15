import {createContext, useContext, useState} from 'react';

const defaultUserData = {
    name: 'Attila',
    age: 25,
    isAdmin: false
};

export const UserContext = createContext(defaultUserData);

export const UserContextProvider = (props) => {

    const [currentUserInfo, setCurrentUserInfo] = useState({...defaultUserData});

    return (
        <UserContext.Provider
            value={{
                currentUserInfo,
                setCurrentUserInfo
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};

export const useAuthentication = () => {
    return useContext(UserContext);
};
