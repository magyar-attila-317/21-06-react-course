import {useEffect} from 'react';
import {useAuthentication} from '../../contexts/UserContext';

const ConditionalComponent = (props) => {

    const {currentUserInfo, setCurrentUserInfo} = useAuthentication();

    useEffect(() => {
        console.log('current userInfo from context:', currentUserInfo);

        console.log('Most már látszódom!');
        return () => {
            console.log('Most el fogok tűnni...');
        };
    }, [currentUserInfo]);

    useEffect(() => {
        console.log('Megváltozott a név!');

        setCurrentUserInfo({
                               ...currentUserInfo,
                               name: props.text
                           });

    }, [props.text]); // eslint-disable-line react-hooks/exhaustive-deps

    return <h1>I'm not always visible, but now I am!</h1>;
};

export default ConditionalComponent;
