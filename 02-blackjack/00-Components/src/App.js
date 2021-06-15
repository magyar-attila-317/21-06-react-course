import './App.css';
import {useRef, useState} from 'react';
import ConditionalComponent from './components/ConditionalComponent/ConditionalComponent';
import {UserContextProvider} from './contexts/UserContext';

const App = () => {

    const [name, setName] = useState('John Doe');
    const [userInfo, setUserInfo] = useState({
                                                 name: 'Attila',
                                                 age: 25,
                                                 isAdmin: false
                                             });

    const importantTextRef = useRef(null);

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

    const importantHandler = () => {
        console.log('importantHandler triggered');
        console.log('ref value:', importantTextRef);
        importantTextRef.current.scrollIntoView({
                                                    behavior: 'smooth'
                                                });
    };

    return (
        <UserContextProvider>
            <div>
                <button onClick={importantHandler}>Go to important part!!!</button>
                <h6>{name}</h6>
                <p>{userInfo.isAdmin && '👑'}{userInfo.name}</p>
                <p>{userInfo.age}</p>
                <p>Spicy jalapeno bacon ipsum dolor amet fatback aliquip filet mignon, incididunt officia exercitation
                   labore turducken tail kielbasa pastrami. Est jowl sunt cillum, dolore labore exercitation non sed
                   magna. Strip steak alcatra tongue boudin ham hock tail meatball jerky venison beef. Swine et ham hock
                   boudin nostrud chicken bacon jowl ex tenderloin magna biltong chislic bresaola. Sausage laborum culpa
                   corned beef venison jerky salami aliqua kielbasa.
                   Chislic ham pork chop, proident short loin laboris sirloin chicken meatloaf quis t-bone mollit pig.
                   Frankfurter landjaeger burgdoggen ut buffalo. Buffalo cupidatat salami kevin pariatur irure tempor
                   picanha nostrud. Pork loin incididunt beef ribs landjaeger irure elit pancetta ipsum hamburger
                   tenderloin.
                   Prosciutto sunt esse reprehenderit enim spare ribs. Sunt ground round exercitation tongue labore.
                   Brisket deserunt drumstick ad beef ribs, rump irure minim tongue exercitation bresaola ham alcatra
                   kielbasa short loin. T-bone buffalo qui cupim commodo. Shoulder eu excepteur shankle dolore, tri-tip
                   salami jowl in short ribs dolor non commodo ham. Cow chicken do, swine minim bacon fugiat porchetta
                   dolor.
                   Meatball doner consectetur, pork belly brisket burgdoggen cupim. Incididunt occaecat eiusmod, picanha
                   pastrami boudin do alcatra porchetta. Ea sint in quis, anim jowl magna consectetur in spare ribs ex
                   lorem ipsum. Reprehenderit meatloaf consectetur venison cupidatat ipsum.
                   Commodo ham nostrud boudin ham hock, pariatur ground round ex pig sed pork chop voluptate. Strip
                   steak eiusmod velit boudin bacon, brisket est cupidatat. Short ribs reprehenderit laborum pancetta
                   kevin qui quis sint exercitation strip steak short loin cow. Salami pariatur aliquip short ribs
                   proident. Esse nostrud capicola, pariatur ut meatball bresaola burgdoggen deserunt eu ut landjaeger
                   magna adipisicing fugiat. Sed sausage ham hock sirloin ipsum, salami proident esse ut ullamco culpa
                   fugiat occaecat swine nulla.
                   Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!
                </p>
                <p ref={importantTextRef}>I must be seen!!</p>
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
                <h1>x</h1>
                <h1>x</h1>
                <h1>x</h1>
                <h1>x</h1>
                <h1>x</h1>
                <h1>x</h1>
                <h1>x</h1>
                <h1>x</h1>
                <h1>x</h1>
                <h1>x</h1>
                <h1>x</h1>
                <h1>x</h1>
                <h1>x</h1>
                <h1>x</h1>
            </div>
        </UserContextProvider>
    );
};

export default App;
