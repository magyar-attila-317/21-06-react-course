import './App.css';
import {useState} from 'react';
import ConditionalComponent from './components/ConditionalComponent/ConditionalComponent';
import {UserContextProvider} from './contexts/UserContext';

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
