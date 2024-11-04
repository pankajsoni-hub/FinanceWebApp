import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { makeStyles } from '@mui/styles';
import sanityClient from "../client";
import Heading from "../components/Heading";
import { daysAgo } from "../utils";
import ExpandComponent from "../components/ExpendComponent";

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    margin: '20px 0',
  },
  root:{
    width: '80%',
    margin: '0 auto',
    boxSizing: 'border-box',
},
  title: {
    margin: 0,
    padding: '10px',
    backgroundColor: '#3b5998',
    color: 'white',
    zIndex: 1,
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: 'auto',
  },
}));

const Home = () => {
  const classes = useStyles();
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    sanityClient
    .fetch(
      `*[defined(types)]{
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
  return (
    <div className={classes.root}>
    <ExpandComponent/>
      <Heading title={"Latest News"}/>
      <div className={classes.cardContainer}>
      {categories
  .filter(category => category.types === "latestNews") 
  .map((category, index) => (
    <Card
      image={category.image}
      routePath={category.slug}
      types={category.types}
      date={daysAgo(category.launchAt,category.types)}
      description={category.title} 
      key={index}
    />
  ))}
      </div>
      <Heading title={"Business"}/>
      <div className={classes.cardContainer}>
      {categories
  .filter(category => category.types === "business") 
  .map((category, index) => (
    <Card
      image={category.image}
      routePath={category.slug}
      types={category.types}
      date={daysAgo(category.launchAt,category.types)}
      description={category.title} 
      key={index}
    />
  ))}
      </div>
      <Heading title={"Finance"}/>
      <div className={classes.cardContainer}>
      {categories
  .filter(category => category.types === "finance") 
  .map((category, index) => (
    <Card
      image={category.image}
      routePath={category.slug}
      types={category.types}
      date={daysAgo(category.launchAt,category.types)}
      description={category.title} 
      key={index}
    />
  ))}
      </div>
      <Heading title={"News"}/>
      <div className={classes.cardContainer}>
      {categories
  .filter(category => category.types === "news") 
  .map((category, index) => (
    <Card
      image={category.image}
      routePath={category.slug}
      types={category.types}
      date={daysAgo(category.launchAt,category.types)}
      description={category.title} 
      key={index}
    />
  ))}
      </div>
    </div>
  );
};

export default Home;
