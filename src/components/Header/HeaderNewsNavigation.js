import {
  Typography,
  Grid,
  makeStyles,
  Link,
  Box,
  Container,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const HeaderNewsNavigation = () => {
  const useStyles = makeStyles((theme) => ({
    NewsNavigation: {
      backgroundColor: "#bb1919",
      minHeight: "10vh",
      // display: "flex",
      // flexDirection: "column",
      // justifyContent: "center",
      // fontSize: "calc(10px + 2vmin)",
      color: "white",
    },
    container: {
      display: "flex",
    },
    typography: {
      paddingRight: "10px",
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.NewsNavigation}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h3">News</Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item>
          <Typography variant="body1">
            <Link
              to="/home"
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
              to="/coronavirus"
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
              to="/climate"
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
              to="/uk"
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
              to="/uk"
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
              to="/business"
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
              to="/business"
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
              to="/politics"
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
              to="/tech"
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
              to="/science"
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
              to="/health"
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
              to="/stories"
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
          <Container className={classes.container}>
            <Typography variant="body1" className={classes.typography}>
              More
            </Typography>

            <ArrowDropDownIcon name="icon" />
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};
export default HeaderNewsNavigation;
