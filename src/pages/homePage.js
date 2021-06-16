import React, { useEffect }  from "react";
import { Link } from "react-router-dom";
import HomeAppbar from "../components/homeAppbar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import { getAll } from '../services/dbService';
import NotesCard from "../components/notesCard";
import NewNoteFab from  "../components/newNoteFab"

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  },
  pageContent: {
    paddingTop: theme.spacing.unit
  },
  newNoteFab: {
    position: "fixed",
    bottom: "20px",
    right: "20px"
  }
}));

export default function HomePage() {
  const classes = useStyles();
  const [notes, setNotes] = React.useState();

  useEffect(() => { 
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
    initData(); 
  }, []);

  const getAllNotes = async () => {
    const notes = await getAll()
    .then(function(n){
      setNotes(n);
    })
    .catch((e)=>{console.log(e)});
    
    return notes
  }
 
  return (
    <div className="homePage">
      <HomeAppbar />
      
      <Grid container justify="center" className={classes.pageContent}>
        <Grid item xs={12} md={6}>
        {notes && (<div>{notes.length === 0 ? (<p>Start by Adding a note.</p>) : (<div>{notes.slice(0).reverse().map((n,i) => <Link to={`/${n.id}`} ><NotesCard key={i} note={n} refresh={getAllNotes}/></Link>)}</div>)}</div>)}
        </Grid>
      </Grid>
      <div className={classes.newNoteFab}><NewNoteFab refresh={getAllNotes}/></div>
     </div>
  );
}
