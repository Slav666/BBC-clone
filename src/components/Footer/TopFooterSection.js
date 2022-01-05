import React from "react";
import {
  Typography,
  Grid,
  ListItem,
  Link,
  ListItemIcon,
} from "@material-ui/core";

import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import MicIcon from "@mui/icons-material/Mic";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const TopFooterSection = () => {
  return (
    <div style={{ color: "white" }}>
      <Grid
        container
        justifyContent="center"
        style={{ maxWidth: "100%", backgroundColor: "#2f2f2f" }}
      >
        <Typography variant="h4">BBC News Service</Typography>
      </Grid>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        style={{ backgroundColor: "#2f2f2f" }}
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
