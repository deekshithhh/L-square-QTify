
import './App.css';
import MyNavbar from './Components/Navbar/Navbar';
import Homepage from './Components/Homepage/Homepage'
import HeroImage from './Components/HeroImage/Heroimage';
import { StyledEngineProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react'
import Cardsfunction from './Components/Cards/Cards';
import Section from './Components/Section/Section';

function App() {
  const [albums, setAlbums] = useState([]);
  const [topalbums,setTopalbums]=useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch('https://qtify-backend-labs.crio.do/albums/top');
        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };
    const fetchtopalbums=async()=>{
      try {
        const response = await fetch('https://qtify-backend-labs.crio.do/albums/new');
        const data = await response.json();
        setTopalbums(data);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    }
    fetchAlbums();
    fetchtopalbums();
  }, []);
  return (
    <div className="App">
<StyledEngineProvider injectFirst>
<MyNavbar/>
<HeroImage/>
 <Section data={albums} title={"New Album"}/>
 <Section data={topalbums} title={"Top Album"}/>
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
