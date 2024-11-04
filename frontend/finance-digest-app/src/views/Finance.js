import React, { useState, useEffect } from "react";
import { makeStyles } from '@mui/styles';
import sanityClient from "../client";
import CardList from "../components/CardList";
import { daysAgo } from "../utils";
const useStyles = makeStyles(() => ({
  cardList: {
   display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  root:{
    width: '80%',
    margin: '0 auto',
    boxSizing: 'border-box',
},
}));

const Finance = () => {
  const classes = useStyles();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
    .fetch(
      `*[_type=="finance" && defined(types)]{
    title,
    slug,
    types,
    description,
    launchAt,
    image{
      asset->{
        _id,
        url
      },
    },
    hexCode,
  }`
    )
      .then((fetchedData) => setCategories(fetchedData))
      .catch(console.error);
  }, []);
  console.log(categories)
  return (
    <div className={classes.root}>
      <div className={classes.cardList}>
      {categories.map((category, index) => (
    <CardList
      image={category.image}
      title={category.title}
      date={daysAgo(category.launchAt,category.types) }
      description={category.title} 
      key={index}
    />
     ))}
      </div>
      
    </div>
  );
};

export default Finance;
