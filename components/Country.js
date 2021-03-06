import React, { useState, useEffect, Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './App.css'
import flagImg1 from './flagImg/argentina.png'
import '@fontsource/roboto';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import argentina1 from './countryImages/Argentina/buenosaires.jpg';
import argentina2 from './countryImages/Argentina/bariloche.jpg';
import argentina3 from './countryImages/Argentina/patagonia.jpg';
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

export function Country1() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    return(
        
            <Card className={classes.root}>
      <CardHeader
        avatar={
            <Avatar variant="square" src={flagImg1} className={classes.square} />
          
        }
        
        title="Argentina"
        
      />
      <CardMedia
        className={classes.media}
        image={argentina1}
        title="Buenos Aires"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Argentina, officially the largest Argentine Republic, is a country in the southern half of South America. It is the largest Spanish speaking nation in the world.
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
            Buenos Aires
          </Typography>
          <Typography paragraph style={{ fontWeight: 'bold' }}>Handy Phrases:</Typography>
          <Typography variant="h5" paragraph>
          "Hola, ??c??mo est??s?"
          </Typography>
          <Typography variant="caption" paragraph>
            Translation: Hey, How are you?
          </Typography>
          <Typography variant="h5" paragraph>
          "??Qu?? es de tu vida?"
          </Typography>
          <Typography variant="caption" paragraph>
            Translation: How is life going?
          </Typography>
          <Typography variant="h5" paragraph>
          "Un picadito"
          </Typography>
          <Typography variant="caption" paragraph>
            Translation: A Football match
          </Typography>
          <Typography paragraph style={{ fontWeight: 'bold' }}>Places to Visit:</Typography>

          <AliceCarousel borderRaius="10" autoPlay autoPlayInterval="3000" >
                <img src={argentina1} className="sliderimg"/>
                <img src={argentina2} className="sliderimg"/>
                <img src={argentina3} className="sliderimg"/>
            </AliceCarousel>
        </CardContent>
      </Collapse>
    </Card>
        
    )
}

