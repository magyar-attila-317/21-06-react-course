import {useContext, useEffect} from 'react';
import {UserContext} from '../../App';

const ConditionalComponent = (props) => {

    const userContext = useContext(UserContext);

    useEffect(() => {
        console.log('current context:', userContext);

        console.log('Most már látszódom!');
        return () => {
            console.log('Most el fogok tűnni...');
        };
    }, []);

    useEffect(() => {
        console.log('Megváltozott a név!');
    }, [props.text]);

    return <h1>I'm not always visible, but now I am!</h1>;
};

export default ConditionalComponent;
