import React from "react";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Image1 from "../../assets/image1.jpg";
import Image2 from "../../assets/Image2.jpg";
import Image3 from "../../assets/image3.jpg";
import Image4 from "../../assets/image4.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    color: "white",
  },
  divider: {
    background: "lightgrey",
    // paddingTop: "20px",
  },
}));

const MiddleFooterSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        justifyContent="center"
        spacing={2}
        style={{
          backgroundColor: "#ff8c00",
          paddingTop: "20px",
          paddingBottom: "20px",
          maxWidth: "100%",
        }}
      >
        <Grid item>
          <Card>
            <CardActionArea style={{ color: "white" }}>
              <CardMedia
                image={Image1}
                style={{
                  height: "200px",
                  width: "300px",
                }}
                title="image title"
              />
            </CardActionArea>
            <CardContent style={{ backgroundColor: "#2f2f2f" }}>
              <Typography style={{ color: "white" }}>
                A notorious gangland execution
              </Typography>
              <Typography style={{ color: "white" }} variant="body2">
                BBC SOUNDS
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardActionArea>
              <CardMedia
                image={Image2}
                style={{ height: "200px", width: "300px" }}
                title="image title"
              />
            </CardActionArea>
            <CardContent style={{ backgroundColor: "#2f2f2f" }}>
              <Typography
                style={{ display: "flex", flexWrap: "wrap", color: "white" }}
              >
                You should walking in the morning!
              </Typography>
              <Typography style={{ color: "white" }}>BBC SOUNDS</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardActionArea>
              <CardMedia
                image={Image3}
                style={{ height: "200px", width: "300px" }}
                title="image title"
              />
            </CardActionArea>
            <CardContent style={{ backgroundColor: "#2f2f2f" }}>
              <Typography style={{ color: "white" }}>bolek</Typography>
              <Typography style={{ color: "white" }}>BBC SOUNDS</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardActionArea>
              <CardMedia
                image={Image4}
                style={{ height: "200px", width: "300px" }}
                title="image title"
              />
            </CardActionArea>
            <CardContent style={{ backgroundColor: "#2f2f2f" }}>
              <Typography style={{ color: "white" }}>
                The murky world of football transfer
              </Typography>
              <Typography style={{ color: "white" }}>BBC SOUNDS</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
export default MiddleFooterSection;
