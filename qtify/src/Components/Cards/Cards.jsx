// import React from "react";
import {
  Tooltip,
  Chip,
  Typography,
  CardMedia,
  Card,
  CardContent,
  Box,
  Container,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import styles from "./Cards.module.css";

const Cardsfunction = ({ data, type }) => {
   console.log(data, "API Data");
  // console.log(type, "type");
  // let chipdata=1;
  // if(type==="Songs"){
  //    chipdata=0;
  // }
  const [chipData, setChipData] = useState(1);
  useEffect(() => {
    if (type === "Songs") {
      setChipData(0);
    }
  }, []);
  // if(type==="Songs"){
  //   setChipData(0);
  // }
  switch(type){
    case "Album":{

      return (
        <Box className={styles.BoxClass}>
    
    <Tooltip title={`${data.songs.length} songs`} placement="top" arrow>
     
          <Card className={styles.Cardsstyle}>
            <CardMedia
              component="img"
              height="140"
              image={data.image}
              className={styles.CardImage}
            />
            <CardContent>
              {chipData ? (
                <Chip
                  label={`${data.follows} Follows`}
                  className={styles.ChipClass}
                />
              ) : (
                <Chip label={`${data.likes} Likes`} className={styles.ChipClass} />
              )}
            </CardContent>
          </Card>
          <Typography sx={{ color: "#ffffff" }} textAlign="left">
            {data.title}
          </Typography>
          </Tooltip>
        </Box>
      );
      
    }
    case "Songs":{
      

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
          {chipData ? (
            <Chip
              label={`${data.follows} Follows`}
              className={styles.ChipClass}
            />
          ) : (
            <Chip label={`${data.likes} Likes`} className={styles.ChipClass} />
          )}
        </CardContent>
      </Card>
      <Typography sx={{ color: "#ffffff" }} textAlign="left">
        {data.title}
      </Typography>
  
    </Box>
  );
    }
  }



};

export default Cardsfunction;
