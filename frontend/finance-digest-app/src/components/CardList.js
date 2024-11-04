import React from 'react';
import { urlFor } from '../client';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';
const useStyles = makeStyles(() => ({
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    margin: '16px 0',
    boxShadow: '4px 4px 8px 4px rgba(0, 0, 0, 0.1)',
  },
  imageContainer: {
    flex: '1 0 150px',
    marginRight: '16px',
    cursor: 'pointer',
  },
  image: {
    width: '75%',
    height: 'auto',
    objectFit: 'cover',
  },
  content: {
    flex: '2',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: '1.5em',
    margin: '0 0 8px 0',
  },
  date: {
    color: '#777',
    margin: '0 0 8px 0',
  },
  description: {
    fontSize: '1em',
    margin: '0',
  },
  }));
const CardList = ({ image, title, date,description,types,routePath }) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const handleClick = () => {
      navigate(`description/${types}/${routePath.current}`);
    };
  return (
    <div className={classes.root}>
    <div className={classes.card}>
      <div  onClick={handleClick} className={classes.imageContainer}>
        <img src={urlFor(image)} alt={title} className={classes.image} />
      </div>
      <div className={classes.content}>
      <p className={classes.date}>{date}</p>
        <h2 className={classes.title}>{title}</h2>
        <h2 className={classes.description}>{description}</h2>
      </div>
    </div>
    </div>
  );
};
export default CardList;
