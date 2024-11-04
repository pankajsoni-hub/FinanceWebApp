import React, { useState, useEffect } from "react";
import { makeStyles } from '@mui/styles';
import { useParams } from 'react-router-dom';
import sanityClient from "../client";
import Heading from "../components/Heading";
import { convertDateToDDMMYYYY } from "../utils";
import ExpandComponent from "../components/ExpendComponent";

const useStyles = makeStyles(() => ({
  root: {
    width: '80%',
    margin: '0 auto',
    boxSizing: 'border-box',
  },
  heading: {
    fontWeight: 700,
    letterSpacing: '-.02em',
    lineHeight: 1.4,
    margin: '10px 0',
    overflow: 'hidden',
    width: '100%',
    fontSize: '2rem',
    fontFamily: 'Oswald, sans-serif',
  },
  date: {
    color: '#777',
    margin: '0 0 8px 0',
  },
  span: {
    fontSize: '600',
    color: "#000",
    fontFamily: "-moz-initial"
  },
  body: {
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: '100%',
    verticalAlign: 'baseline',
  },
}));

const CommonPage = () => {
  const classes = useStyles();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const { type, slug } = useParams();

  useEffect(() => {
    if (type && slug) {
      sanityClient
        .fetch(
          `*[(_type == $type) && (slug.current == $slug)] {
            title,
            description,
            types,
            launchAt,
            image {
              asset -> {
                _id,
                url
              }
            },
            slug
          }`,
          { type, slug }
        )
        .then((fetchedData) => {
          if (fetchedData && fetchedData.length > 0) {
            setCategory(fetchedData[0]);
          } else {
            setCategory(null);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [type, slug]);

  if (!type || !slug) {
    return <div className={classes.root}>Invalid page parameters.</div>;
  }

  if (loading) {
    return <div className={classes.root}>Loading...</div>;
  }

  if (!category) {
    return <div className={classes.root}>No data found for the given parameters.</div>;
  }

  return (
    <div className={classes.root}>
    <ExpandComponent/>
      <Heading title={type} />
      <h1 className={classes.heading}>{category.title}</h1>
      <p className={classes.date}>
        <span className={classes.span}>Published on:</span> {convertDateToDDMMYYYY(category.launchAt)}
      </p>
      <p className={classes.body}>{category.description}</p>
    </div>
  );
};

export default CommonPage;
