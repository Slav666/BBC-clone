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
        spacing={4}
        justifyContent="center"
        className={classes.gridContainer}
      >
        <Grid item xs={6} lg={2}>
          <ListItem button>
            <ListItemIcon>
              <PhoneIphoneIcon />
            </ListItemIcon>
            <Link color="inherit">On your mobile</Link>
          </ListItem>
        </Grid>

        <Grid item xs={6} lg={2}>
          <ListItem button>
            <ListItemIcon>
              <MicIcon />
            </ListItemIcon>
            <Link color="inherit">On smart speakers</Link>
          </ListItem>
        </Grid>

        <Grid item xs={6} lg={2}>
          <ListItem button>
            <ListItemIcon>
              <MoveToInboxIcon />
            </ListItemIcon>
            <Link color="inherit">Get news alert</Link>
          </ListItem>
        </Grid>

        <Grid item xs={6} lg={2}>
          <ListItem button>
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <Link color="inherit">Contact BBC news</Link>
          </ListItem>
        </Grid>
      </Grid>
    </section>
  );
};
export default TopFooterSection;
