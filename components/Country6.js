import React, { useState, useEffect, Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './App.css'
import flagImg6 from './flagImg/thailand.png'
import '@fontsource/roboto';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import thailand1 from './countryImages/Thailand/bangkok.jpg';
import thailand2 from './countryImages/Thailand/pattaya.jpg';
import thailand3 from './countryImages/Thailand/phuket.jpg';
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

  export function Country6() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    return(
        
            <Card className={classes.root}>
      <CardHeader
        avatar={
            <Avatar variant="square" src={flagImg6} className={classes.square} />
          
        }
        
        title="Thailand"
        
      />
      <CardMedia
        className={classes.media}
        image={thailand1}
        title="Thailand"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Thailand, known formerly as Sian and officially as the Kingdom of Thailand, is a country in Southeast Asia. It is located in the centre of the Indochinese Peninsula, with a population of 70 million people. Thailand is bordered to the north by Myanmar and Laos, to the east by Laos and Cambodia, to the south by the Gulf of Thailand, and to the west by the Andaman Sea and the southern extremity of Myanmar. It has the second largest economy in SOutheast Asia.        </Typography>
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
            Bangkok
          </Typography>
          <Typography paragraph style={{ fontWeight: 'bold' }}>Handy Phrases:</Typography>
          <Typography variant="h5" paragraph>
          "SawatDii"
          </Typography>
          <Typography variant="caption" paragraph>
            Translation: Hello!
          </Typography>
          <Typography variant="h5" paragraph>
          "Sabaaidii Mai?"
          </Typography>
          <Typography variant="caption" paragraph>
            Translation: How are you?
          </Typography>
          <Typography variant="h5" paragraph>
          "Khop kun"
          </Typography>
          <Typography variant="caption" paragraph>
            Translation: Thank you
          </Typography>
          <Typography paragraph style={{ fontWeight: 'bold' }}>Places to Visit:</Typography>

          <AliceCarousel borderRaius="10" autoPlay autoPlayInterval="3000" >
                <img src={thailand1} className="sliderimg"/>
                <img src={thailand2} className="sliderimg"/>
                <img src={thailand3} className="sliderimg"/>
            </AliceCarousel>
        </CardContent>
      </Collapse>
    </Card>
        
    )
}