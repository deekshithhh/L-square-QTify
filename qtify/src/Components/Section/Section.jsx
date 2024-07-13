import React, { useEffect, useState } from 'react';
import { Grid, Container,Accordion, AccordionSummary ,AccordionDetails, Typography} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Cardsfunction from "../Cards/Cards";
import styles from "./Section.module.css"

const Sections = () => {
  const [albums, setAlbums] = useState([]);

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

    fetchAlbums();
  }, []);

  return (
    
    <Container className={styles.Containerclass}>
      {/* <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Expanded by default</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
      <div>
      <Typography variant="h5" className={styles.SectionTitle}>Top Albums</Typography>
      <Typography variant="body2" className={styles.ShowAll}>Show all</Typography></div>
      <Grid container spacing={2}>
        {albums.map((album, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={2}>
            <Cardsfunction data={album}  />
          </Grid>
        ))}
      </Grid>
      <div>
      <Typography variant="h5" className={styles.SectionTitle}>New Albums</Typography>
      <Typography variant="body2" className={styles.ShowAll}>Show all</Typography></div>
      <Grid container spacing={2}>
        {albums.map((album, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={2}>
            <Cardsfunction data={album}  />
          </Grid>
        ))}
      </Grid>
      
    </Container>
  );
};

export default Sections;
