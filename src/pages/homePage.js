import React, { useEffect } from "react";
import HomeAppbar from "../components/homeAppbar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { add, getAll } from '../services/dbService';
import NotesCard from "../components/notesCard"

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

export default function HomePage() {
  const classes = useStyles();
  const [status, setStatus] = React.useState("");
  const [notes, setNotes] = React.useState();
  async function initData(){
    const res = await getAllNotes();
    if(res){
      console.log("saturating data", res)
      setNotes(res);
    }
    if(!res){
      console.log("no result")
    }
  }
  useEffect(() => { initData(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const note = {
      body: status,
      date: Date.now()
    }
    add(note)
      .then(() => {console.log('It worked!')})
      .then(() => getAllNotes())
      .catch((err) => console.log('It failed!', err));
    setStatus("");
  };
  const handleChange = (e) => {
    setStatus(e.target.value);
  };
  const getAllNotes = async () => {
    const notes = await getAll()
    .then(function(n){
      setNotes(n);
    })
    .catch((e)=>{console.log(e)});
    
    return await notes
  }
  return (
    <div className="homePage">
      <HomeAppbar />
      <h1>Hello World</h1>
      <h2>Start by adding some notes.</h2>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-basic"
          label=""
          placeholder="Enter a log"
          variant="outlined"
          fullWidth
          value={status}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained">
          Log
        </Button>
      </form>
      <Grid container justify="center">
        <Grid item xs={12} md={6}>
        {notes && (<div>{notes.length === 0 ? (<p>No Note</p>) : (<div>{notes.map((n,i) => <NotesCard key={i} note={n} />)}</div>)}</div>)}
        </Grid>
      </Grid>
     </div>
  );
}
