import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Image1 from "../assets/image1.jpg";
import Divider from "@material-ui/core/Divider";

const styles = (theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1200,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    width: 300,
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    height: 250,
  },
  cardContent: {
    flexGrow: 1,
  },
});

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//sm={6} md={3} lg={2} => line 92
function Album(props) {
  const { classes } = props;

  const [cards, setCards] = useState([]);
  const [cards1, setCards1] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const cardsFromServer = await fetchCards();
      setCards(cardsFromServer);
    };
    getCards();
  }, []);

  useEffect(() => {
    const getCards = async () => {
      const cardsFromServer = await fetchCards1();
      setCards1(cardsFromServer);
    };
    getCards();
  }, []);

  const fetchCards = async () => {
    const res = await fetch("http://localhost:5000/cards");
    const data = await res.json();
    return data;
  };

  const fetchCards1 = async () => {
    const res = await fetch("http://localhost:5000/cards1");
    const data = await res.json();
    return data;
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid container spacing={4}>
            <Grid item sm={6}>
              <Card>
                <CardMedia
                  className={classes.cardMedia}
                  image={Image1}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Farmers could be paid for post-Brexit 'rewilding' land
                    changes
                  </Typography>
                  <Typography>
                    Farmers and landowners in England could be paid to turn
                    large areas of land into nature reserves, or to restore
                    floodplains, under new government agriculture subsidies.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            {cards.map((card) => (
              <Grid item key={card} sm={6} lg={3} spacing={1}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      style={{ height: "150px", width: "150" }}
                      // component="img"
                      className={classes.cardMedia}
                      image={card.image}
                      title="sport"
                    />
                  </CardActionArea>
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="small"
                      component="h4"
                      children={card.title}
                    />
                    <Typography children={card.description} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
      <div>
        <Divider />
      </div>
      <div className={classNames(classes.layout, classes.cardGrid)}>
        <Grid container>
          {cards1.map((card) => (
            <Grid item key={card}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    style={{ height: "150px", width: "150" }}
                    // component="img"
                    className={classes.cardMedia}
                    image={card.image}
                    title="sport"
                  />
                </CardActionArea>
                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="small"
                    component="h4"
                    children={card.title}
                  />
                  <Typography children={card.description} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </React.Fragment>
  );
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);
