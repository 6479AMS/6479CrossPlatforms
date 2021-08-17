import React, { useState, useEffect, Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './App.css'

import flagImg2 from './flagImg/brazil.png'
import '@fontsource/roboto';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import brazil1 from './countryImages/Brazil/copacabana.jpg';
import brazil2 from './countryImages/Brazil/manaus.jpg';
import brazil3 from './countryImages/Brazil/rio.jpg';
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

  export function Country2() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    return(
        
            <Card className={classes.root}>
      <CardHeader
        avatar={
            <Avatar variant="square" src={flagImg2} className={classes.square} />
          
        }
        
        title="Brazil"
        
      />
      <CardMedia
        className={classes.media}
        image={brazil1}
        title="Rio"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Brazil, official the Federative Republic of Brazil is the largest country in both South America and Latin America. Brazil is the world's fifth largest and sixth-most populous country. It is one of the most culturally diverse nation, due to over a century of mass immigration from the world.
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
            Brasilia
          </Typography>
          <Typography paragraph style={{ fontWeight: 'bold' }}>Handy Phrases:</Typography>
          <Typography variant="h5" paragraph>
          "Bom dia (Boa Tarde)"
          </Typography>
          <Typography variant="caption" paragraph>
            Translation: Good Morning (Good Afternoon)
          </Typography>
          <Typography variant="h5" paragraph>
          "Como vai voce?"
          </Typography>
          <Typography variant="caption" paragraph>
            Translation: How are you?
          </Typography>
          <Typography variant="h5" paragraph>
          "Obrigado"
          </Typography>
          <Typography variant="caption" paragraph>
            Translation: Thank You
          </Typography>
          <Typography paragraph style={{ fontWeight: 'bold' }}>Places to Visit:</Typography>

          <AliceCarousel borderRaius="10" autoPlay autoPlayInterval="3000" >
                <img src={brazil1} className="sliderimg"/>
                <img src={brazil2} className="sliderimg"/>
                <img src={brazil3} className="sliderimg"/>
            </AliceCarousel>
        </CardContent>
      </Collapse>
    </Card>
        
    )
}