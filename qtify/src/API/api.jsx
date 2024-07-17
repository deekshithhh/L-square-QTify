import React,{useState,useEffect} from 'react';

const Apicall=()=>{
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
}