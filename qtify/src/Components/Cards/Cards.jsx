// import React from "react";
 import { Tooltip,Chip,Typography ,CardMedia,Card,CardContent,Box,Container} from "@mui/material";
import React from 'react';
import styles from './Cards.module.css'


const Cardsfunction = ({data}) => {
    // return (
    //     <div>
    //      <Card className={styles.Cardsstyle}>
    //      <CardMedia
    //     image="https://i.pinimg.com/736x/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg?b=t"

    //   />
    //   <Chip className="chipclass" label="Chip Filled" />
    //   <CardContent>
        
    //   </CardContent>
    //      </Card>
    //     </div>
    // );
//     return (
//       <div>
//       <Card sx={{ maxWidth: 200, margin: '10px', }}>
//         <CardMedia
//           component="img"
//           height="140"
//           image="https://www.seoclerk.com/pics/000/765/234/e78d6b0a7aaa332ff21e27b70ff8b85e.png"
          
//         />
//         <CardContent>
//           <Chip label="Follows"/>
          
//         </CardContent>
        
//       </Card>
//       <Typography gutterBottom variant="h6" component="div">
//       100 Album Songs
//     </Typography>
//     </div>
//     );
// }
 //const {follows,image,slug,songs,title}=data;
console.log(data, "Daat")
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
