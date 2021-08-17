import React, { useState, useEffect, Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './App.css'
import flagImg3 from './flagImg/ecuador.png'
import '@fontsource/roboto';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ecuador1 from './countryImages/Ecuador/banosvolcano.jpg';
import ecuador2 from './countryImages/Ecuador/ecuador.jpg';
import ecuador3 from './countryImages/Ecuador/galapogos.jpg';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "100%",
      maxHeight: "100%",
      overflow: 'auto',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

  export function Country3() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    return(
        
            <Card className={classes.root}>
      <CardHeader
        avatar={
            <Avatar variant="square" src={flagImg3} className={classes.square} />
          
        }
        
        title="Ecuador"
        
      />
      <CardMedia
        className={classes.media}
        image={ecuador1}
        title="Ecuador"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Ecuador, officially the Republic of Ecuador is a country in nortwestern South America, bordered by Columbia on the north, Peru on the east and south, and the Pacific Ocean on the west. Spanish is the official language and is spoken by the majority, though 13 Native languages are also recognized.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
       
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph style={{ fontWeight: 'bold' }}>Capital:</Typography>
          <Typography paragraph>
            Quito
          </Typography>
          <Typography paragraph style={{ fontWeight: 'bold' }}>Handy Phrases:</Typography>
          <Typography variant="h5" paragraph>
          "Bacan"
          </Typography>
          <Typography variant="caption" paragraph>
            Translation: Cool!
          </Typography>
          <Typography variant="h5" paragraph>
          "Cojudo"
          </Typography>
          <Typography variant="caption" paragraph>
            Translation: Stupid or Silly
          </Typography>
          <Typography variant="h5" paragraph>
          "Farra"
          </Typography>
          <Typography variant="caption" paragraph>
            Translation: Party
          </Typography>
          <Typography paragraph style={{ fontWeight: 'bold' }}>Places to Visit:</Typography>

          <AliceCarousel borderRaius="10" autoPlay autoPlayInterval="3000" >
                <img src={ecuador1} className="sliderimg"/>
                <img src={ecuador2} className="sliderimg"/>
                <img src={ecuador3} className="sliderimg"/>
            </AliceCarousel>
        </CardContent>
      </Collapse>
    </Card>
        
    )
}