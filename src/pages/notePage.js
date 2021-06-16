import React, { useEffect }  from "react";
import NotesCard from "../components/notesCard";
import NoteAppbar from "../components/noteAppbar";
import { makeStyles } from "@material-ui/core/styles";
import { get } from '../services/dbService';
import Grid from '@material-ui/core/Grid';
import {
    useParams
  } from "react-router-dom";

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

export default function NotePage() {
  const classes = useStyles();
  const [note, setNote] = React.useState();
  let { id } = useParams();
 
  useEffect(() => { 
    if (!id) return;
    async function initData(){
        const getNote = async () => {
            console.log({id})
            const note = await get(parseInt(id))
            .then(function(n){
              setNote(n);
              console.log({n});
            })
            .catch((e)=>{console.log(e)});
            
            return note
          }
            
      const res = await getNote();

      
      if(res){
        console.log("saturating data", res)
        setNote(res);
      }
      if(!res){
        console.log("no result")
      }
    }
    initData(); 
  }, [id]);

  

  console.log(note)

  return (
    <div className="homePage">
      <NoteAppbar />
      
      <Grid container justify="center" className={classes.pageContent}>
        <Grid item xs={12} md={6}>
            {note && <NotesCard note={note}/>}
        </Grid>
      </Grid>
     </div>
  );
}
