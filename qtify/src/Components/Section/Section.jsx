import React, { useEffect, useState } from "react";
import {
  Grid,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Cardsfunction from "../Cards/Cards";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";

const Sections = ({ data, title }) => {
  const [isCarosel, setIsCarosel] = useState(true);

  const toggleCarousel = () => {
    setIsCarosel((prevState) => !prevState);
  };

  return (
    <Container className={styles.Containerclass}>
      <div className={styles.SectionTitle}>
        <div>{title}</div>
        {
          
            isCarosel?<div className={styles.toggle} onClick={toggleCarousel}>Show All</div>:
            <div className={styles.toggle} onClick={toggleCarousel}>Collapse</div>
         
        }
      </div>
      {isCarosel ? (
        <Carousel
          Album={data}
          renderComponent={(data) => <Cardsfunction data={data} />}
        />
      ) : (
        <Grid container spacing={2}>
          {data.map((album, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={2}>
              <Cardsfunction data={album} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Sections;
