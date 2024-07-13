import React ,{useState,useEffect} from "react"
import axios from "axios";
import { Grid,Container,Typography } from "@mui/material";
import Cardsfunction from "../Cards/Cards";


 const Section=()=>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      axios.get('https://qtify-backend-labs.crio.do/albums/top')
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })
        .catch((error) => console.error('Error fetching data:', error));
    }, []);
  
    console.log(data)
  
        // return (
        //   <Container sx={{ backgroundColor: '#000', padding: '20px' }}>
        //     <Grid container spacing={2}>
        //       {data.map((album, index) => (
        //         <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
        //           <Cardsfunction />
        //         </Grid>
        //       ))}
        //     </Grid>
        //   </Container>
        // );

        return(
            <div>
               <Typography>Top Albums
                </Typography>
                

            </div>
        )
      }
export default Section;