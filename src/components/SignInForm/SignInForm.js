import React, { useState } from "react";
import {
  Grid,
  Link,
  Typography,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

const SignInForm = () => {
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} onClick={handleClickOpen}>
        <DialogTitle>Sign Inn</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email or User Name"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Button variant="contained" size="large" onClick={handleClose}>
                Sign Inn
              </Button>
            </Grid>

            <Grid item>
              <Link>Needs help signing in? </Link>
            </Grid>

            <Grid item>
              <Typography>Don't have a BBC account?</Typography>
            </Grid>
            <Grid>
              <Typography>
                <Link>Register now</Link>
              </Typography>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SignInForm;
