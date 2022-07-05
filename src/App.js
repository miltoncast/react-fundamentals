import './App.css';
import { useState } from 'react';
import Card from './components/Card.js';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [name, setName] = useState('Bulbasaur');
  const [showCard, setShowCard] = useState(false);

  const handleInputChange = (e) => {
    setText(e.target.value)
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  return (
    <div className="App">
      <div className="formField">
        <button onClick={(e)=>{
          setCount(count + 1)
        }}>
           Add
        </button>
        <p>{count}</p>
      </div>

      <div className="formField">
        <h3>Input field</h3>
        <input value={text} onChange={handleInputChange}/>
      </div>

      <div className="formField">
        <h3>Name</h3>
        <input value={name} onChange={handleNameChange}/>
      </div>
      <div className="formField">
        <button onClick={(e)=>{
            setShowCard(!showCard)
          }} 
          style={{
            color: showCard ? 'green' : 'grey'
          }}
        >
            Toggle Card
        </button>
      </div>
      <div className="grid">
        {
          showCard ? (
          <Card 
            image='bulbasaur.jpg'
            name ={name}
            desc ={text}
          />
          ) : (false)
        }
      </div>
    </div>
  );
}

export default App;
