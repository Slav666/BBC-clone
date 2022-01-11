import React, { useState } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { extraMenuActions } from "../store/index";
import { signInFormActions } from "../store/index";
import bbcLogo from "../assets/5842ab62a6515b1e0ad75b09.png";
import { Typography, Grid, makeStyles, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import Search from "./Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationIcon from "@material-ui/icons/NotificationsRounded";
import BottomNav from "./BottomNav";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FormDialog from "./SignInForm";

const Header = () => {
  const dispatch = useDispatch();
  const showExtraMenu = useSelector((state) => state.extraMenu.isOpened);
  const toggleMenuHandler = () => {
    dispatch(extraMenuActions.open());
  };
  const showSignInForm = useSelector((state) => state.signInForm.isOpened);
  const toggleFormHandler = () => {
    dispatch(signInFormActions.open());
  };
  // const [showMore, setShowMore] = useState(false);
  // const [showSignInForm, setShowSignInForm] = useState(false);

  const useStyles = makeStyles((theme) => ({
    bbcLogo: {
      width: "15px",
      hight: "15px",
      backgroundColor: "black",
      color: "white",
      marginRight: "2px",
    },
    link: {
      "&:hover": {
        borderBottom: "5px solid red",
      },
    },
  }));

  const styles = useStyles();
  return (
    <>
      <div>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item>
            <img
              src={bbcLogo}
              alt="bbc-logo"
              style={{ width: "70px", height: "20px" }}
            />
          </Grid>
          <Grid item>
            <AccountCircleIcon />
          </Grid>
          <Grid item>
            <Typography onClick={toggleFormHandler}>Sign in</Typography>
            {showSignInForm && <FormDialog />}
          </Grid>
          <Grid item>
            <NotificationIcon />
          </Grid>
          <Grid item>
            <Typography variant="body1" className={styles.typography}>
              <Link
                className={styles.link}
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
                to="/news"
                component={RouterLink}
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
                to="/sport"
                component={RouterLink}
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
                to="/weather"
                component={RouterLink}
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
                to="/"
                component={RouterLink}
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
                to="/"
                component={RouterLink}
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
                to="/"
                component={RouterLink}
                underline="none"
                color="inherit"
              >
                CBBC
              </Link>
            </Typography>
          </Grid>

          <Grid item>
            <Typography>More</Typography>
          </Grid>
          <Grid item>
            <ArrowDropDownIcon onClick={toggleMenuHandler} />
          </Grid>

          <Grid item>
            <Search />
          </Grid>
        </Grid>
        {showExtraMenu && (
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
      </div>
      <div className="bottom-nav">
        <BottomNav />
      </div>
    </>
  );
};

export default Header;
