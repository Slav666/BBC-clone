import { Typography, Grid, makeStyles, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const BottomNav = () => {
  const useStyles = makeStyles((theme) => ({
    // title: {
    //   marginLeft: "350px",
    // },
  }));

  const styles = useStyles();

  return (
    <div>
      <Grid container justifyContent="left" className={styles.title}>
        <Typography variant="h3">News</Typography>
      </Grid>
      <Grid container spacing={2}>
        <Grid item>
          <Typography variant="body1">
            <Link
              to="/weather"
              component={RouterLink}
              underline="none"
              color="inherit"
            >
              Home
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <Link
              to="/weather"
              component={RouterLink}
              underline="none"
              color="inherit"
            >
              Coronavirus
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <Link
              to="/weather"
              component={RouterLink}
              underline="none"
              color="inherit"
            >
              Climate
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <Link
              to="/weather"
              component={RouterLink}
              underline="none"
              color="inherit"
            >
              UK
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <Link
              to="/weather"
              component={RouterLink}
              underline="none"
              color="inherit"
            >
              World
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <Link
              to="/weather"
              component={RouterLink}
              underline="none"
              color="inherit"
            >
              Business
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <Link
              to="/weather"
              component={RouterLink}
              underline="none"
              color="inherit"
            >
              Politics
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <Link
              to="/weather"
              component={RouterLink}
              underline="none"
              color="inherit"
            >
              Tech
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <Link
              to="/weather"
              component={RouterLink}
              underline="none"
              color="inherit"
            >
              Science
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <Link
              to="/weather"
              component={RouterLink}
              underline="none"
              color="inherit"
            >
              Health
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <Link
              to="/weather"
              component={RouterLink}
              underline="none"
              color="inherit"
            >
              Family & Education
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <Link
              to="/weather"
              component={RouterLink}
              underline="none"
              color="inherit"
            >
              Entertainment & Arts
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <Link
              to="/weather"
              component={RouterLink}
              underline="none"
              color="inherit"
            >
              Stories
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <Link
              to="/weather"
              component={RouterLink}
              underline="none"
              color="inherit"
            >
              In Pictures
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">More</Typography>
        </Grid>
        <Grid item>
          <ArrowDropDownIcon />
        </Grid>
      </Grid>
    </div>
  );
};
export default BottomNav;
