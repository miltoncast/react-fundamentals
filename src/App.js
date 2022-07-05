import './App.css';
import { useState, useEffect } from 'react';
import Card from './components/Card.js';

function App() {

  const [character, setCharacter] = useState({});
  useEffect(()=> {
    async function getCharacter() {
      const resp = await fetch(
        "https://rickandmortyapi.com/api/character/1"
      );
      setCharacter(await resp.json());
    }
    getCharacter();
  }, []);

  return (
    <div className="App">
      
      <div className="grid">
          <Card 
            image={character.image}
            name ={character.name}
            desc ={character.species}
          />
      </div>
    </div>
  );
}

export default App;
