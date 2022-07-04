import './App.css';
import {pokemon} from './pokemon.js';


function Card({
  image,
  name,
  desc
}) {

  return (
    <div className="card">
      <img src={`images/${image}`} alt={image}/>
      <h2>{name}</h2>
      <p>{desc}</p>
    </div>
  )
}

function App() {

  return (
    <div className="App grid">
      {pokemon.map((item)=> {
        return <Card
          image={item.image}
          name={item.name}
          desc={item.desc}
        />
      })}
    </div>
  );
}

export default App;
