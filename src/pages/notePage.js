import React, { useEffect } from "react";
import NotesCard from "../components/notesCard";
import NoteAppbar from "../components/noteAppbar";
import { get } from "../services/dbService";
import { Grid } from "@mui/material";
import { useParams, Redirect } from "react-router-dom";

export default function NotePage() {
  const [note, setNote] = React.useState();
  let { id } = useParams();

  useEffect(() => {
    if (!id) {
      <Redirect to="/" />;
    }
    async function initData() {
      const getNote = async () => {
        console.log({ id });
        const note = await get("notes", parseInt(id))
          .then(function (n) {
            setNote(n);
            console.log({ n });
          })
          .catch((e) => {
            console.log(e);
          });

        return note;
      };

      const res = await getNote();

      if (res) {
        console.log("saturating data", res);
        setNote(res);
      }
      if (!res) {
        console.log("no result");
      }
    }
    initData();
  }, [id]);

  console.log(note);

  return (
    <div className="homePage">
      <NoteAppbar />

      <Grid container justify="center">
        <Grid item xs={12} md={6}>
          {note && <NotesCard note={note} />}
        </Grid>
      </Grid>
    </div>
  );
}
