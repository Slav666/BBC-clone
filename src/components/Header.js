import React, { useState } from "react";
import "../App.css";
import { Typography, Grid, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import Search from "./Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationIcon from "@material-ui/icons/NotificationsRounded";
import BottomNav from "./BottomNav";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FormDialog from "./SignInForm";

const Header = () => {
  const [showMore, setShowMore] = useState(false);
  const [showSignInForm, setShowSignInForm] = useState(false);

  const useStyles = makeStyles((theme) => ({
    bbcLogo: {
      width: "15px",
      hight: "15px",
      backgroundColor: "black",
      color: "white",
      marginRight: "2px",
    },
  }));

  const styles = useStyles();
  return (
    <>
      <div>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item>
            <Typography color="primary">
              <span className={styles.bbcLogo}>B</span>
              <span className={styles.bbcLogo}>B</span>
              <span className={styles.bbcLogo}>C</span>
            </Typography>
          </Grid>
          <Grid item>
            <AccountCircleIcon />
          </Grid>
          <Grid item>
            <Typography
              onClick={() => {
                setShowSignInForm(!showSignInForm);
              }}
            >
              Sign in
            </Typography>
            {showSignInForm && <FormDialog />}
          </Grid>
          <Grid item>
            <NotificationIcon />
          </Grid>
          <Grid item>
            <Typography variant="body1">
              <Link to="/home">Home</Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              <Link to="/news">News</Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              <Link to="/sport">Sport</Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              <Link to="/weather">Weather</Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography>IPlayer</Typography>
          </Grid>
          <Grid item>
            <Typography>Sounds</Typography>
          </Grid>
          <Grid item>
            <Typography>CBBC</Typography>
          </Grid>
          <Grid item>
            <Typography>More</Typography>
          </Grid>
          <Grid item>
            <ArrowDropDownIcon
              onClick={() => {
                setShowMore(!showMore);
              }}
            />
          </Grid>
          <Grid item>
            <Search />
          </Grid>
        </Grid>
        {showMore && (
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
