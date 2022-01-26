import React from "react";

import {
  CardContent,
  CardMedia,
  CardActionArea,
  Grid,
  Typography,
  Card,
  makeStyles,
  Box,
} from "@material-ui/core";

import GanglandImage from "../../assets/ganglandImage.jpg";
import WalkingInTheMorningImage from "../../assets/walkingInTheMorning.jpg";
import UfoImage from "../../assets/ufoImage.jpeg";
import FootballTransferImage from "../../assets/footballTransfer.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
  },
  grid: {
    backgroundColor: "#ff8c00",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  cardMedia: {
    height: "200px",
    width: "300px",
  },
  cardContent: {
    backgroundColor: "#2f2f2f",
    color: "white",
  },
  divider: {
    background: "lightgrey",
  },
}));

const MiddleFooterSection = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid
        container
        justifyContent="center"
        spacing={2}
        className={classes.grid}
      >
        <Grid item>
          <Card>
            <CardActionArea style={{ color: "white" }}>
              <CardMedia
                image={GanglandImage}
                title="gangland"
                className={classes.cardMedia}
              />
            </CardActionArea>
            <CardContent className={classes.cardContent}>
              <Typography>A notorious gangland execution</Typography>
              <Typography variant="body2">BBC SOUNDS</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardActionArea>
              <CardMedia
                image={WalkingInTheMorningImage}
                title="walking in the morning"
                className={classes.cardMedia}
              />
            </CardActionArea>
            <CardContent className={classes.cardContent}>
              <Typography>You should walking in the morning!</Typography>
              <Typography>BBC SOUNDS</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardActionArea>
              <CardMedia
                image={UfoImage}
                title="Ufo in Scotland"
                className={classes.cardMedia}
              />
            </CardActionArea>
            <CardContent className={classes.cardContent}>
              <Typography>UFO in Scotland!</Typography>
              <Typography>BBC SOUNDS</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardActionArea>
              <CardMedia
                image={FootballTransferImage}
                title="Football transfer"
                className={classes.cardMedia}
              />
            </CardActionArea>
            <CardContent className={classes.cardContent}>
              <Typography>The murky world of football transfer</Typography>
              <Typography>BBC SOUNDS</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
export default MiddleFooterSection;
