// import React from "react";
 import { Tooltip,Chip,Typography ,CardMedia,Card,CardContent,Box,Container} from "@mui/material";
import React from 'react';
import styles from './Cards.module.css'


const Cardsfunction = ({data}) => {
console.log(data, "API Data")
return (
  <Box className={styles.BoxClass}>
     
  <Card className={styles.Cardsstyle}>
    <CardMedia
       component="img"
                  height="140"
               image={data.image}
               className={styles.CardImage}
                 
    />
    <CardContent>
    <Chip label={`${data.follows} Follows`}  className={styles.ChipClass} />
      
    </CardContent>
    
  </Card>
  <Typography sx={{ color: '#ffffff' }} textAlign="left">
  {data.title}
 </Typography>
 </Box>
);
}

export default Cardsfunction;
