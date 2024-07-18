import React, { useEffect, useState } from "react";
import { Grid, Container,Tabs,Tab,Box } from "@mui/material";
import Cardsfunction from "../Cards/Cards";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";
import CircularProgress from '@mui/joy/CircularProgress';


const Sections = ({ data, title, type, genres }) => {
  const [isCarosel, setIsCarosel] = useState(true);
  // const [isSongsData, setIsSongsData] = useState(true);
  //console.log(genre.label)
  const [filters, setFilters] = useState([{ key: "all", label: "all" }]);
  const [selectedfilterindex, setSelectedfilterindex] = useState(0);
  const [value, setValue] = useState("all");

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
  // useEffect(() => {
  //   if (filtersource) {
  //     filtersource().then((response) => {
  //       const { data } = response;
  //       setFilters([...filters, ...data]);
  //     });
  //   }
  // }, []);
  const showFilters = filters.length > 1;
  const cardstoRender = data.filter((card) =>
    showFilters && selectedfilterindex !== 0
      ? card.genre.key === filters[selectedfilterindex].key
      : card
  );

  return (
    <Container className={styles.Containerclass}>
      <div className={styles.SectionTitle}>
        <h3>{title}</h3>

        <h3 className={styles.toggle} onClick={toggleCarousel}>
          {isCarosel? "Show All": "Collapse"}
        </h3>
        
      </div>
     {/* <Filters filter={filters}/> */}
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

     {data.length<0?(
     <Box
     sx={{
       display: "flex",
       justifyContent: "center",
       alignItems: "center",
       margin: "10px",
     }}
   >
     <CircularProgress color="success" />
     <p style={{ marginLeft: "10px" }}>Loading...</p>
   </Box>
 ) 
     :(
      {isCarosel ?(
        // Use the filtered data directly
        type === "Songs" ? (
          filterSongs().map((album, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={2}>
            <Cardsfunction data={album} type={type} />
          </Grid>
          ))
        ) : (
          data.map((album, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={2}>
            <Cardsfunction data={album} type={type} />
          </Grid>
          ))
        )
      ) :
      (
        <Carousel
        data={type === "songs" ? filterSongs() : data}
            Album={data}
            renderComponent={(data) => <Cardsfunction data={data} type={type} />})
     
    }
      {isCarosel ?(
        // Use the filtered data directly
        type === "Songs" ? (
          filterSongs().map((album, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={2}>
            <Cardsfunction data={album} type={type} />
          </Grid>
          ))
        ) : (
          data.map((album, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={2}>
            <Cardsfunction data={album} type={type} />
          </Grid>
          ))
        )
      )
     } :
      (
        <Carousel
        data={type === "songs" ? filterSongs() : data}
            Album={data}
            renderComponent={(data) => <Cardsfunction data={data} type={type} />}
        //   />
        // Pass filtered data to Carousel
       // <Carousel
          // data={type === "songs" ? filterSongs() : data}
          // component={(card) => (
          //   <Card key={card.id} data={card} type={type} />
          // )}
        />
      )
      // (
      //   <Carousel
      //     Album={data}
      //     renderComponent={(data) => <Cardsfunction data={data} type={type} />}
      //   />
      // ) 
      // (
      //   // Use the filtered data directly
      //   type === "Songs" ? (
      //     filterSongs().map((album, index) => (
      //     <Grid item key={index} xs={12} sm={6} md={4} lg={2}>
      //       <Cardsfunction data={album} type={type} />
      //     </Grid>
      //     ))
      //   ) : (
      //     data.map((album, index) => (
      //     <Grid item key={index} xs={12} sm={6} md={4} lg={2}>
      //       <Cardsfunction data={album} type={type} />
      //     </Grid>
      //     ))
      //   )
      // ) 
      // :
      // //  (
      // //   <Grid container spacing={2}>
      // //     {cardstoRender.map((album, index) => (
      // //       <Grid item key={index} xs={12} sm={6} md={4} lg={2}>
      // //         <Cardsfunction data={album} type={type} />
      // //       </Grid>
      // //     ))}
      // //   </Grid>
      // // )
      // (
      //   <Carousel
      //   data={type === "songs" ? filterSongs() : data}
      //       Album={data}
      //       renderComponent={(data) => <Cardsfunction data={data} type={type} />}
      //   //   />
      //   // Pass filtered data to Carousel
      //  // <Carousel
      //     // data={type === "songs" ? filterSongs() : data}
      //     // component={(card) => (
      //     //   <Card key={card.id} data={card} type={type} />
      //     // )}
      //   />
      // )
      }
    </Container>
  );
};

export default Sections;
