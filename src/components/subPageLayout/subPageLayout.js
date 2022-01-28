import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TestImage from "../../assets/ganglandImage.jpg";
import MainContentLayout from "../MainContent/MainContentLayout";

import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Link,
  Box,
  Grid,
  Container,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  layout: {},
  container: {
    marginTop: "5px",
    marginBottom: "5px",
    padding: "10%",
    // backgroundColor: "red",
  },
  leftSideMainBox: {
    backgroundColor: "pink",
    width: "100%",
    // height: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: "5px",
    marginBottom: "15px",
    paddingBottom: "10px",
  },
  smallBox: {
    background: "#F0F0F0",
    width: "50%",
    height: "50px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20px",
    marginTop: "10px",
  },
  cardContent: { height: "1000px" },
}));

const SubPageLayout = ({ articles }) => {
  const { title } = useParams();
  console.log("Titlte", title);
  console.log("fromSubpageLayout", articles);
  const article = articles.find((art) => art.title === title);
  console.log("Article", article);

  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        direction="row"
        margin="auto"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          sm={8}
          md={8}
          sx={{
            padding: 5,
            backgroundColor: "primary.dark",
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <Container className={classes.container}>
            <Card>
              <CardContent>
                <Typography variant="h6"></Typography>
              </CardContent>
              <CardMedia
                component="img"
                height="440"
                image={article.urlToImage}
                alt="green iguana"
              />
              {/* {article.urlToImage} */}
              {article.content}
              <CardContent className={classes.cardContent}>
                <Typography
                  // gutterBottom
                  variant="h2"
                  component="div"
                ></Typography>
                <Typography variant="body2" color="text.secondary">
                  {article.content}
                </Typography>
              </CardContent>
            </Card>
          </Container>
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          sx={{
            height: 1200,
            padding: 5,
            backgroundColor: "primary.light",
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <Box className={classes.leftSideMainBox}>
            <Typography variant="h6">Top Stories</Typography>
            <Box className={classes.smallBox}>
              <Typography variant="h6">
                <Link>Senior Tories urge PM to quit after party apology</Link>
              </Typography>
            </Box>
            <Box className={classes.smallBox}>
              <Typography variant="h6">
                <Link>
                  Jonathan Van-Tam to leave role as deputy chief medical officer
                </Link>
              </Typography>
            </Box>
            <Box className={classes.smallBox}>
              <Typography variant="h6">
                <Link>Ministers back PM's call to wait for party inquiry</Link>
              </Typography>
            </Box>
            <Typography variant="h6">Features</Typography>
            <Card style={{ margin: "auto" }}>
              <CardMedia
                component="img"
                height="140"
                image={TestImage}
                alt="green iguana"
              />
              <CardContent>
                <Typography>
                  <Link>Senior Tories urge PM to quit after party apology</Link>
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                height="140"
                image={TestImage}
                alt="green iguana"
              />
              <CardContent>
                <Typography>
                  <Link>
                    Ministers back PM's call to wait for party inquiry
                  </Link>
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                height="140"
                image={TestImage}
                alt="green iguana"
              />
              <CardContent>
                <Typography>
                  <Link>
                    Playtime: Is it time we took 'play' more seriously?
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default SubPageLayout;
