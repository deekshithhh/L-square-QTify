
import './App.css';
import MyNavbar from './Components/Navbar/Navbar';
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  return (
    <div className="App">


<StyledEngineProvider injectFirst>
<MyNavbar/>
    </StyledEngineProvider>
     
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
