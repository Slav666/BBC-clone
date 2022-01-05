import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#4c4c4c",
    color: "white",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  divider: {
    background: "lightgrey",
    // paddingTop: "20px",
  },
}));

export default function MiddleDividers() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justifyContent="center">
        <Grid item direction="column" xs={1}>
          <Grid item>
            <Typography>
              <Link color="inherit">Test</Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <Link color="inherit">Test</Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <Link color="inherit">Test</Link>
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Divider orientation="vertical" className={classes.divider} />
        </Grid>

        <Grid item direction="column" style={{ paddingLeft: "10px" }} xs={1}>
          <Grid item>
            <Typography>
              <Link color="inherit">Test</Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <Link color="inherit">Test</Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <Link color="inherit">Test</Link>
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Divider orientation="vertical" className={classes.divider} />
        </Grid>
        <Grid item direction="column" style={{ paddingLeft: "10px" }} xs={1}>
          <Grid item>
            <Typography>
              <Link color="inherit">Test</Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <Link color="inherit">Test</Link>
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Divider orientation="vertical" className={classes.divider} />
        </Grid>
        <Grid item direction="column" style={{ paddingLeft: "10px" }} xs={1}>
          <Grid item>
            <Typography>
              <Link color="inherit">Test</Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <Link color="inherit">Test</Link>
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Divider orientation="vertical" className={classes.divider} />
        </Grid>
        <Grid item direction="column" style={{ paddingLeft: "10px" }} xs={1}>
          <Grid item>
            <Typography>
              <Link color="inherit">Test</Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <Link color="inherit">Test</Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Paper>
        <Divider className={classes.divider} />
      </Paper>
      <Grid
        container
        justifyContent="center"
        style={{
          backgroundColor: "#4c4c4c",
          padding: "10px",
        }}
        // spacing={3}
      >
        <Grid item>
          <Typography variant="small">
            <Link color="inherit">Terms of Use</Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="small">
            <Link color="inherit">About BBC</Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="small">
            <Link color="inherit">Privacy Policy</Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="small">
            <Link color="inherit">Cookies</Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="small">
            <Link color="inherit">Accessibility Help</Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="small">
            <Link color="inherit">Parental Guidance</Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="small">
            <Link color="inherit">Contact the BBC</Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="small">
            <Link color="inherit">Get Personalised Newsletters</Link>
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item>
          <Typography>
            Copyright © 2022 BBC. The BBC is not responsible for the content of
            external sites. Read about our approach to external linking.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
