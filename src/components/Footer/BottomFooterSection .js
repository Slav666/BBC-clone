import React from "react";
import {
  Link,
  Typography,
  Grid,
  Divider,
  makeStyles,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#4c4c4c",
    color: "white",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  divider: {
    background: "lightgrey",
  },
  container: {
    display: "flex",
    paddingBottom: "20px",
  },
  grid: {
    paddingBottom: "20px",
  },
}));

const BottomFooterSection = () => {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <Container className={classes.container}>
        <Grid container direction="column">
          <Grid item>
            <Typography>
              <Link color="inherit">Home</Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <Link color="inherit">CBBC</Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <Link color="inherit">Local</Link>
            </Typography>
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        <Grid container direction="column" className={classes.gridItem}>
          <Grid item>
            <Typography>
              <Link color="inherit">News</Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <Link color="inherit">CBeebies</Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <Link color="inherit">Three</Link>
            </Typography>
          </Grid>
        </Grid>

        <Grid container direction="column" className={classes.gridItem}>
          <Grid item>
            <Typography>
              <Link color="inherit">Sport</Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <Link color="inherit">Food</Link>
            </Typography>
          </Grid>
        </Grid>

        <Grid container direction="column" className={classes.gridItem}>
          <Grid item>
            <Typography>
              <Link color="inherit">Weather</Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <Link color="inherit">Bitesize</Link>
            </Typography>
          </Grid>
        </Grid>

        <Grid container direction="column" className={classes.gridItem}>
          <Grid item>
            <Typography>
              <Link color="inherit">iPlayer</Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <Link color="inherit">Arts</Link>
            </Typography>
          </Grid>
        </Grid>

        <Grid container direction="column" className={classes.gridItem}>
          <Grid item>
            <Typography>
              <Link color="inherit">Sounds</Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <Link color="inherit">Taster</Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Grid
        container
        justifyContent="center"
        spacing={4}
        className={classes.grid}
      >
        <Grid item>
          <Typography variant="body1">
            <Link color="inherit">Terms of Use</Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <Link color="inherit">About BBC</Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <Link color="inherit">Privacy Policy</Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <Link color="inherit">Cookies</Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <Link color="inherit">Accessibility Help</Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <Link color="inherit">Parental Guidance</Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <Link color="inherit">Contact the BBC</Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <Link color="inherit">Get Personalised Newsletters</Link>
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item>
          <Typography variant="body1">
            Copyright © 2022 BBC. The BBC is not responsible for the content of
            external sites. Read about our approach to external linking.
          </Typography>
        </Grid>
      </Grid>
    </nav>
  );
};

export default BottomFooterSection;
