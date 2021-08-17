import React, { useState, useEffect, Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './App.css'
import flagImg4 from './flagImg/japan.png'
import '@fontsource/roboto';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import japan1 from './countryImages/Japan/mtjfuji.jpg';
import japan2 from './countryImages/Japan/osaka.jpg';
import japan3 from './countryImages/Japan/shibuya.jpg';
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

  export function Country4() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    return(
        
            <Card className={classes.root}>
      <CardHeader
        avatar={
            <Avatar variant="square" src={flagImg4} className={classes.square} />
          
        }
        
        title="Japan"
        
      />
      <CardMedia
        className={classes.media}
        image={japan1}
        title="Nepal"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Japan(or Nippon) is an island country in East Asia, located in the northwest Pacific Ocean. It is bordered on the west by the Sea of Japan, and extends from the Sea of Okhotsk in the north toward the East Chine Sea and Taiwan in the south. The five main islands of Japan are: Hokkaido, Honshu, Shikoku, Kyushu, and Okinawa. Other major cities besides Tokyo include Yokohama, Osaka, Nagoya, Sapporo, Fukuoka, Kobe, and Kyoto.        
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
            Tokyo
          </Typography>
          <Typography paragraph style={{ fontWeight: 'bold' }}>Handy Phrases:</Typography>
          <Typography variant="h5" paragraph>
          "Ohayo Gozaimasu"
          </Typography>
          <Typography variant="caption" paragraph>
            Translation: Good Morning!
          </Typography>
          <Typography variant="h5" paragraph>
          "Arigato Gozaimasu"
          </Typography>
          <Typography variant="caption" paragraph>
            Translation: Thank you
          </Typography>
          <Typography variant="h5" paragraph>
          "Onamae wa nandesuka?"
          </Typography>
          <Typography variant="caption" paragraph>
            Translation: What is your name?
          </Typography>
          <Typography paragraph style={{ fontWeight: 'bold' }}>Places to Visit:</Typography>

          <AliceCarousel borderRaius="10" autoPlay autoPlayInterval="3000" >
                <img src={japan1} className="sliderimg"/>
                <img src={japan2} className="sliderimg"/>
                <img src={japan3} className="sliderimg"/>
            </AliceCarousel>
        </CardContent>
      </Collapse>
    </Card>
        
    )
}