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
    // alignItems: "left",

    color: "white;",
    backgroundColor: "#2f2f2f",
  },
}));

const TopFooterSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        style={{
          width: "80vw",
          alignItems: "center",
          paddingLeft: "calc(17% - 20px)",
        }}
      >
        <Grid item>
          <Typography variant="h4">BBC News Service</Typography>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        style={{ paddingBottom: "15px" }}
      >
        <Grid item xs={6} lg={2}>
          <ListItem button>
            <ListItemIcon color="white">
              <PhoneIphoneIcon style={{ color: "white" }} />
            </ListItemIcon>
            <Link color="inherit">On your mobile</Link>
          </ListItem>
        </Grid>

        <Grid item xs={6} lg={2}>
          <ListItem button>
            <ListItemIcon style={{ color: "white" }}>
              <MicIcon />
            </ListItemIcon>
            <Link color="inherit">On smart speakers</Link>
          </ListItem>
        </Grid>

        <Grid item xs={6} lg={2}>
          <ListItem button>
            <ListItemIcon style={{ color: "white" }}>
              <MoveToInboxIcon />
            </ListItemIcon>
            <Link color="inherit">Get news alert</Link>
          </ListItem>
        </Grid>

        <Grid item xs={6} lg={2}>
          <ListItem button>
            <ListItemIcon>
              <ContactMailIcon style={{ color: "white" }} />
            </ListItemIcon>
            <Link color="inherit">Contact BBC news</Link>
          </ListItem>
        </Grid>
      </Grid>
    </div>
  );
};
export default TopFooterSection;
