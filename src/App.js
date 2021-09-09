import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import Counter from './Components/Counter.js';

 
function App() {
    return (
        <div className="App">
            <header>
                <NavBar />
            </header>
            <ItemListContainer greeting="Bienvenidos a nuestro catalogo" />
            <Counter />
        </div>
    );
}
 
export default App;