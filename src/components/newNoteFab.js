import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Grid,
  Fab,
  InputBase,
  Dialog,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { add } from "../services/dbService";

export default function NewNoteFab(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [status, setStatus] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const note = {
      body: status,
      date: Date.now(),
    };
    add("notes", note)
      .then(() => {
        console.log("It worked!");
      })
      .catch((err) => console.log("It failed!", err));
    props.refresh();
    setOpen(false);
    setStatus("");
  };
  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleClickOpen}
        sx={{ position: "fixed", right: "20px", bottom: "20px" }}
      >
        <AddIcon />
      </Fab>
      <Dialog
        maxWidth="sm"
        fullScreen="true"
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <AppBar elevation={0} color="default" position="static">
            <Toolbar>
              <IconButton
                onClick={handleClose}
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <ArrowBackIcon />
              </IconButton>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                New Note
              </Typography>
              <Button
                type="submit"
                color="inherit"
                disabled={status.length === 0}
              >
                Save
              </Button>
            </Toolbar>
          </AppBar>
          <Grid container>
            <Grid item xs={12}>
              <div>
                <InputBase
                  id="outlined-basic"
                  label=""
                  placeholder="Start your note..."
                  variant="standard"
                  multiline
                  rowsMin={4}
                  fullWidth
                  disableUnderline
                  value={status}
                  onChange={handleChange}
                  height="100%"
                />
              </div>
            </Grid>
          </Grid>
        </form>
      </Dialog>
    </div>
  );
}
