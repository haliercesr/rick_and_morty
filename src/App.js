
import Card from './components/Card.jsx';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/Nav/SearchBar.jsx';
import characters, { Rick } from './data.js';


function App() {
   return (
      <div className='App'>
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         <Cards characters={characters} />
         
      </div>
   );
}

export default App;
