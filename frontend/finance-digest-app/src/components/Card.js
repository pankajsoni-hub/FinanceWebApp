// CardComponent.js
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardContent } from '@mui/material';
import { urlFor } from '../client';
const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 250,
    width:'100%',
    margin: 7, 
    borderRadius: '8px', 
    boxShadow:'0px 4px 10px rgba(0, 0, 0, 0.1)', 
  },
  media: {
    height: 194, 
  },
  date: {
    color: '#777',
    margin: '0 0 8px 0',
  },
  description: {
    verticalAlign: 'baseline',
    fontSize:'100%',
    color: '#000',
  },
}));

const CardComponent = ({ image, date, description,title }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
     <img
				src={urlFor(image).url()}
				alt={title}
				className={classes.media}
			/>
      <CardContent>
      <p className={classes.date}>{date}</p>
        <h1 className={classes.description}>
          {description}
        </h1>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
