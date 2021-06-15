import './App.css';
import {createContext, useState} from 'react';
import ConditionalComponent from './components/ConditionalComponent/ConditionalComponent';

const defaultUserData = {
    name: 'Attila',
    age: 25,
    isAdmin: false
};

export const UserContext = createContext(defaultUserData);

const UserContextProvider = (props) => {

    return (
        <UserContext.Provider value={{...defaultUserData}}>
            {props.children}
        </UserContext.Provider>
    );
};

const App = () => {

    const [name, setName] = useState('John Doe');
    const [userInfo, setUserInfo] = useState({
                                                 name: 'Attila',
                                                 age: 25,
                                                 isAdmin: false
                                             });

    const buttonHandler = () => {
        // setName('Attila');
        setName((prevName) => 'Mr. ' + prevName);
    };

    const userInfoUpdateHandler = () => {
        setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            isAdmin: !prevUserInfo.isAdmin,
            name: 'Admin Attila'
        }));

        // setUserInfo({
        //                 ...userInfo,
        //                 isAdmin: true,
        //                 name: 'Admin Attila'
        //             });
    };

    return (
        <UserContextProvider>
            <div>
                <h6>{name}</h6>
                <p>{userInfo.isAdmin && '👑'}{userInfo.name}</p>
                <p>{userInfo.age}</p>
                {userInfo.isAdmin &&
                 <ConditionalComponent
                     text={name}
                 />
                }
                <button
                    onClick={userInfoUpdateHandler}
                >
                    Update user info!
                </button>
                <button
                    onClick={buttonHandler}
                >
                    Push me!
                </button>
            </div>
        </UserContextProvider>
    );
};

export default App;
