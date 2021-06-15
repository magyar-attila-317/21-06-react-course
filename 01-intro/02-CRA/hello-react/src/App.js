import './App.css';
import Header from './components/Header/Header';

function App() {

    return (
        <div className='App'>
            <Header text={'1'}/>
            <Header
                text={''}
                child={<h2>My custom element</h2>}
                person={{name: 'Attila', age: 25}}
            />
        </div>
    );
}

export default App;
