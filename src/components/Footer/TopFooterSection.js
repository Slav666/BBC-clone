import React from "react";
import {
  Typography,
  Grid,
  ListItem,
  Link,
  ListItemIcon,
  makeStyles,
} from "@material-ui/core";

import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MicIcon from "@mui/icons-material/Mic";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    color: "white",
    backgroundColor: "#2f2f2f",
  },
  gridContainer: {
    width: "80vw",
    alignItems: "center",
    paddingLeft: "calc(17% - 20px)",
    paddingBottom: "15px",
    color: "white",
  },
  icon: {
    color: "#ffffff",
  },
}));

const TopFooterSection = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Grid container className={classes.gridContainer}>
        <Grid item>
          <Typography variant="h4">BBC News Service</Typography>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        className={classes.gridContainer}
      >
        <Grid item xs={12} sm={6} md={3}>
          <ListItem button>
            <ListItemIcon>
              <PhoneIphoneIcon className={classes.icon} />
            </ListItemIcon>
            <Typography>
              <Link
                color="inherit"
                rel="noopener"
                href="https://www.bbc.co.uk/news/10628994"
              >
                On your mobile
              </Link>
            </Typography>
          </ListItem>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <ListItem button>
            <ListItemIcon>
              <MicIcon className={classes.icon} />
            </ListItemIcon>
            <Link
              color="inherit"
              rel="noopener"
              href="https://www.bbc.co.uk/news/10628323"
            >
              On smart speakers
            </Link>
          </ListItem>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <ListItem button>
            <ListItemIcon>
              <MoveToInboxIcon className={classes.icon} />
            </ListItemIcon>
            <Link
              color="inherit"
              rel="noopener"
              href="https://www.bbc.co.uk/news/10628323"
            >
              Get news alert
            </Link>
          </ListItem>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <ListItem button>
            <ListItemIcon>
              <ContactMailIcon className={classes.icon} />
            </ListItemIcon>
            <Link
              color="inherit"
              rel="noopener"
              href="https://www.bbc.co.uk/news/20039682"
            >
              Contact BBC news
            </Link>
          </ListItem>
        </Grid>
      </Grid>
    </section>
  );
};
export default TopFooterSection;
