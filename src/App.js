import './App.css';
import { useState } from 'react';
import Card from './components/Card.js';

function App() {
  const [count, setCount] = useState(0);


  return (
    <div className="App">
      <div className="formField">
        <button>Add</button>
        <p>0</p>
      </div>
      <div className="formField">
        <h3>Input field</h3>
        <input value={1} />
      </div>
      <div className="grid">
        <Card 
          image='bulbasaur.jpg'
          name ='Bulbasaur'
          desc ='A grass type pokemon'
        />
      </div>
    </div>
  );
}

export default App;
