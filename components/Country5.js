import React, { useState, useEffect, Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './App.css'
import flagImg5 from './flagImg/nepal.png'
import '@fontsource/roboto';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import nepal1 from './countryImages/Nepal/annapurna.jpg';
import nepal2 from './countryImages/Nepal/everest.jpg';
import nepal3 from './countryImages/Nepal/kathmandu.jpg';




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

  export function Country5() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    return(
        
            <Card className={classes.root}>
      <CardHeader
        avatar={
            <Avatar variant="square" src={flagImg5} className={classes.square} />
          
        }
        
        title="Nepal"
        
      />
      <CardMedia
        className={classes.media}
        image={nepal1}
        title="Nepal"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Nepal, officially the Federal Republic of Nepal, is a landlocked country located in South Asia. It is mainly situated in the Himalayas, but also includes part of the Indo-Gangetic Plain, bordering Tibet to the north, and India in the south, east, and west. Nepal has a diverse geography, including fertile plains, forested hills, and eight of the world's highest mountain peaks, including Mount Everest.
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
            Kathmandu
          </Typography>
          <Typography paragraph style={{ fontWeight: 'bold' }}>Handy Phrases:</Typography>
          <Typography variant="h5" paragraph>
          "Namaste"
          </Typography>
          <Typography variant="caption" paragraph>
            Translation: Good Morning!
          </Typography>
          <Typography variant="h5" paragraph>
          "Kasto hunu huncha"
          </Typography>
          <Typography variant="caption" paragraph>
            Translation: How are you?
          </Typography>
          <Typography variant="h5" paragraph>
          "Dhanyabad"
          </Typography>
          <Typography variant="caption" paragraph>
            Translation: Thank you
          </Typography>
          <Typography paragraph style={{ fontWeight: 'bold' }}>Places to Visit:</Typography>

          <AliceCarousel borderRaius="10" autoPlay autoPlayInterval="3000" >
                <img src={nepal1} className="sliderimg"/>
                <img src={nepal2} className="sliderimg"/>
                <img src={nepal3} className="sliderimg"/>
            </AliceCarousel>
        </CardContent>
      </Collapse>
    </Card>
        
    )
}