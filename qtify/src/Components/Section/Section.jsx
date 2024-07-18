import React, { useEffect, useState } from "react";
import { Grid, Container,Tabs,Tab,Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Cardsfunction from "../Cards/Cards";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";

const Sections = ({ data, title,type,genres }) => {
  const [isCarosel, setIsCarosel] = useState(true);
  const [value, setValue] = useState("all");
  const[issong,setIsSong]=useState(0)

  const toggleCarousel = () => {
    setIsCarosel((prevState) => !prevState);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const filterSongs = () => {
    if (type === "Songs" && value !== "all") {
      return data.filter((ele) => ele.genre.key === value);
    }
    return data;
  };
  useEffect(()=>{
    if(type==="Songs"){
      setIsSong(1)
    }
  },[])
  console.log("Genres",genres)
  return (
    <Container className={styles.Containerclass}>
      <div className={styles.SectionTitle}>
        <div>{title}</div>
       
      {type==="Album" &&(
isCarosel?<div className={styles.toggle} onClick={toggleCarousel}>Show All</div>:
<div className={styles.toggle} onClick={toggleCarousel}>Collapse</div>
      ) 
            
            }
       
      </div>
      {type === "Songs" && (
       
       <Tabs
         value={value}
         onChange={handleChange}
         textColor="primary"
         aria-label="Genre Filter Tabs"
       >
         <Tab
           value="all"
           label="All"
           key="all"
           className={styles.genreTab}
         />
         {genres.map((tab) => (
           <Tab
             key={tab.key}
             value={tab.key}
             label={tab.label}
             className={styles.genreTab}
           />
         ))}
       </Tabs>
   
 )}
      {!isCarosel ?
      ( type === "Songs" ?(
        filterSongs().map((album, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={2}>
              <Cardsfunction data={album}  type={type}  />
            </Grid>
        ))
      ):(
        <Grid container spacing={2}>
          {data.map((album, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={2}>
              <Cardsfunction data={album}  type={type}  />
            </Grid>
          ))}
        </Grid>
      )
    ): 
      
      (
        <Carousel
        Album={type === "Songs" ? filterSongs() : data}
          renderComponent={(data) => <Cardsfunction data={data}  type={type}  />}
        />
      ) }
    </Container>
  );
};

export default Sections;