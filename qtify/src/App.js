
import './App.css';
import MyNavbar from './Components/Navbar/Navbar';
import Homepage from './Components/Homepage/Homepage'
import HeroImage from './Components/HeroImage/Heroimage';
import { StyledEngineProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react'
import Cardsfunction from './Components/Cards/Cards';
import Section from './Components/Section/Section';

function App() {
   
  return (
    <div className="App">
<StyledEngineProvider injectFirst>
<MyNavbar/>
<HeroImage/>
 <Section/>

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
