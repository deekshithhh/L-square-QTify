// import React ,{ useEffect, useState }from "react";
// import HeroImage from "../HeroImage/Heroimage";
// import MyNavbar from "../Navbar/Navbar";
// import { StyledEngineProvider } from '@mui/material/styles';
// import axios from "axios";
// import Cards from "../Cards/Cards";


// export default function Homepage(){
//     const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get('https://qtify-backend-labs.crio.do/albums/top')
//       .then((response) => {
//         setData(response.data);
//         setLoading(false);
//       })
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   console.log(data)
//     return (
//         <StyledEngineProvider injectFirst>
// <MyNavbar/>
// <HeroImage/>
// <Cards/>

//     </StyledEngineProvider>

//     )
// }
