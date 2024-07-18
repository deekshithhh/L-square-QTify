
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
  const [songs,setSongs]=useState([]);
  const [genretypes,setGenretypes]=useState([]);

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
    const fetchsongs = async () => {
      try {
        const response = await fetch('https://qtify-backend-labs.crio.do/songs');
        const data = await response.json();
        setSongs(data);
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };
    const fetchgenre = async () => {
      try {
        const response = await fetch('https://qtify-backend-labs.crio.do/genres');
        const data = await response.json();
        setGenretypes(data.data);
        console.log(genretypes,"genre")
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };
    fetchAlbums();
    fetchtopalbums();
    fetchsongs();
    fetchgenre()
  }, []);
  return (
    <div className="App">
<StyledEngineProvider injectFirst>
<MyNavbar/>
<HeroImage/>
<Section data={topalbums} title="Top Album" type="Album"/>
 <Section data={albums} title="New Album" type="Album"/>
 <Section data={songs} title="Songs" type="Songs" genres={genretypes}/>
 
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
