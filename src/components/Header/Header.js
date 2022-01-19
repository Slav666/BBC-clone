import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import HeaderNewsNavigation from "./HeaderNewsNavigation";
import SignInForm from "../SignInForm/SignInForm";
import SearchBar from "../SearchBar/Search";
import {
  Typography,
  Grid,
  makeStyles,
  Link,
  Container,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { NotificationsRounded, ArrowDropDown } from "@material-ui/icons";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
// import { extraMenuActions } from "../../store/index";
// import { signInFormActions } from "../../store/index";
import BBCLogo from "../../assets/BBCLogo.png";

const Header = () => {
  const [openExtraMenu, setOpenExtraMenu] = useState();

  const toggleMenuHandler = () => {
    setOpenExtraMenu(!openExtraMenu);
  };
  // const dispatch = useDispatch();

  // const showExtraMenu = useSelector((state) => state.extraMenu.isOpen);
  // const toggleMenuHandler = () => {
  //   dispatch(extraMenuActions.open());
  // };
  // const showSignInForm = useSelector((state) => state.signInForm.isOpen);
  // const toggleFormHandler = () => {
  //   dispatch(signInFormActions.open());
  // };

  const useStyles = makeStyles((theme) => ({
    bbcLogo: {
      width: "15px",
      hight: "15px",
      backgroundColor: "black",
      color: "white",
      // marginRight: "2px",
    },
    link: {
      "&:hover": {
        borderBottom: "5px solid red",
      },
    },
    logo: {
      width: "70px",
      height: "20px",
    },
    container: {
      display: "flex",
      paddingLeft: "8px",
      paddingRight: "8px",
    },
  }));

  const classes = useStyles();
  return (
    <>
      <section>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={4}
          style={{ marginTop: "3px", marginBottom: "2px" }}
        >
          <Grid item>
            <img src={BBCLogo} alt="bbc-logo" className={classes.logo} />
          </Grid>

          {/* <Grid item>
            <Container className={classes.container}>
              <AssignmentIndIcon />

              <Typography onClick={toggleFormHandler}>Sign in</Typography>
              {showSignInForm && <SignInForm />}
            </Container>
          </Grid> */}

          <Grid item>
            <Container className={classes.container}>
              <NotificationsRounded />
              <Typography variant="body1" className={classes.typography}>
                <Link
                  className={classes.link}
                  // to="/home"
                  rel="noopener"
                  href="https://www.bbc.co.uk/news/20039682"
                  // component={RouterLink}
                  underline="none"
                  color="inherit"
                >
                  Home
                </Link>
              </Typography>
            </Container>
          </Grid>

          <Grid item>
            <Typography variant="body1" style={{ display: "inline" }}>
              <Link
                href="https://www.bbc.co.uk/news"
                // to="/news"
                // component={RouterLink}
                underline="none"
                color="inherit"
              >
                News
              </Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              <Link
                href="https://www.bbc.co.uk/sport"
                // to="/sport"
                // component={RouterLink}
                underline="none"
                color="inherit"
              >
                Sport
              </Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              <Link
                href="https://www.bbc.co.uk/weather"
                // to="/weather"
                // component={RouterLink}
                underline="none"
                color="inherit"
              >
                Weather
              </Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <Link
                href="https://www.bbc.co.uk/weather"
                // to="/"
                // component={RouterLink}
                underline="none"
                color="inherit"
              >
                IPlayer
              </Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <Link
                href="https://www.bbc.co.uk/weather"
                // to="/"
                // component={RouterLink}
                underline="none"
                color="inherit"
              >
                Sounds
              </Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              <Link
                href="https://www.bbc.co.uk/weather"
                // to="/"
                // component={RouterLink}
                underline="none"
                color="inherit"
              >
                CBBC
              </Link>
            </Typography>
          </Grid>

          <Grid item>
            <Container className={classes.container}>
              <Typography>More</Typography>

              <ArrowDropDown onClick={toggleMenuHandler} />
            </Container>
          </Grid>

          <Grid item>
            <SearchBar />
          </Grid>
        </Grid>
        {openExtraMenu && (
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Typography>Some Food</Typography>
            </Grid>
            <Grid item>
              <Typography>Fast Cars</Typography>
            </Grid>
          </Grid>
        )}
      </section>
      {/* <section className="bottom-nav">
        <HeaderNewsNavigation />
      </section> */}
    </>
  );
};

export default Header;
