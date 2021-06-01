import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Input from '@material-ui/core/Input';
import Dialog from '@material-ui/core/Dialog';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import { makeStyles } from "@material-ui/core/styles";
import { add } from '../services/dbService';

const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch"
      }
    },
    title: {
        flexGrow: '1'
    },
    dialogAppbar:{
        width: "100%"
    },
    addNotesForm:{
        minWidth: "600px"
    },
    inputWrapper:{
        margin: theme.spacing(2),
    },
    addNotesInput: {
        border: 'none',
        borderRadius: '0',
        '&:hover': {
        backgroundColor: '#fff',
        },
        '&:focus': {
            border: 'none'
        },
    },
    newNoteFab: {
      position: "fixed",
      bottom: "20px",
      right: "20px"
    }
  }));

export default function NewNoteFab(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

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
      date: Date.now()
    }
    add(note)
      .then(() => {console.log('It worked!')})
      .catch((err) => console.log('It failed!', err));
    props.refresh()
    setOpen(false);
    setStatus("");
  };
  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
      <Dialog
        className={classes.dialog}
        maxWidth= "sm"
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
          <form
            className={classes.addNotesForm}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
        <AppBar className={classes.dialogAppbar} position="static">
        <Toolbar>
          <IconButton onClick={handleClose} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            New Note
          </Typography>
          <Button type="submit" color="inherit">Save</Button>
        </Toolbar>
      </AppBar>
        <Grid container>
            <Grid item xs={12}>
        
            <div className={classes.inputWrapper}>
        <Input
          id="outlined-basic"
          className={classes.addNotesInput}
          label=""
          placeholder="Start your note..."
          variant="standard"
          multiline
          rows={4}
          fullWidth
          disableUnderline
          value={status}
          onChange={handleChange}
        />
        </div>
        
        </Grid>
        </Grid>
        </form>
      </Dialog>
    </div>
  );
}
