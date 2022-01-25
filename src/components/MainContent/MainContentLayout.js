import React from "react";

import classNames from "classnames";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  makeStyles,
  CssBaseline,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import footballTransferImage from "../../assets/footballTransfer.jpg";
import SibPageLayout from "../subPageLayout/subPageLayout";

const useStyles = makeStyles((theme) => ({
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
    paddingTop: "56.25%",
    height: "150px",
    width: "250px",
  },
  cardMediaFirstCard: {
    paddingTop: "56.25%",
    height: 250,
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const MainContentLayout = ({ cards }) => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <main>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid container spacing={4}>
            <Grid item sm={6}>
              <Card>
                <CardMedia
                  className={classes.cardMediaFirstCard}
                  image={footballTransferImage}
                  title="Image of football transfer"
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
              <Grid item key={card.title} sm={6} lg={3}>
                <Card className={classes.card}>
                  <CardActionArea component={RouterLink} to="/stories">
                    <CardMedia
                      className={classes.cardMedia}
                      image={card.urlToImage}
                      title={card.title}
                    />
                  </CardActionArea>
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="body1"
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
    </>
  );
};

export default MainContentLayout;
