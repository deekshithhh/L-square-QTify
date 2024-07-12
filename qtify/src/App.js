
import './App.css';
import MyNavbar from './Components/Navbar/Navbar';
import Homepage from './Components/Homepage/Homepage'
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  return (
    <div className="App">
<Homepage/>


     
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
     
      </header>
      
    </div>
  );
}

export default App;
