
import './App.css';
import Button from './Components/Button'
import food from './food.png';

function App() {
  return (
    <div className="App">

      <header className="App-header">
      <div className="Nav">
        <Button text="Contact Us"></Button>
        <Button text="Menu"></Button>
        <h1>The Food
           Suppliers</h1>
        <Button text="About Us"></Button>
        <Button text="Services"></Button>
        <Button text = "Order Oline"></Button>

      </div>

        <h3> Are You Busy</h3>
        <h2>DONT WORRY</h2>
        

        <img src={food} className="foodpic" alt="basket" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
