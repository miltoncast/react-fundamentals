import './App.css';

function App() {

  return (
    <div className="App grid">
      <div className="card">
        <img src="/images/bulbasaur.jpg" alt="bulbasaur.jpg"/>
        <h2>Bulbasaur</h2>
        <p>A grass type pokemon</p>
      </div>
      <div className="card">
        <img src="/images/charmander.jpg" alt="charmander.jpg"/>
        <h2>Charmander</h2>
        <p>A fire type pokemon</p>
      </div>
      <div className="card">
        <img src="/images/squirtle.jpg" alt="squirtle.jpg"/>
        <h2>Squirtle</h2>
        <p>A water type pokemon</p>
      </div>
    </div>
  );
}

export default App;
