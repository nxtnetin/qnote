import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HomeAppbar from "../components/homeAppbar";
import Grid from "@mui/material/Grid";
import { getAll } from "../services/dbService";
import NotesCard from "../components/notesCard";
import NewNoteFab from "../components/newNoteFab";

export default function HomePage() {
  const [notes, setNotes] = React.useState();

  useEffect(() => {
    async function initData() {
      const res = await getAllNotes();
      if (res) {
        console.log("saturating data", res);
        setNotes(res);
      }
      if (!res) {
        console.log("no result");
      }
    }
    initData();
  }, []);

  const getAllNotes = async () => {
    const notes = await getAll("notes")
      .then(function (n) {
        setNotes(n);
      })
      .catch((e) => {
        console.log(e);
      });

    return notes;
  };

  return (
    <div className="homePage">
      <HomeAppbar />

      <Grid container justifyContent="center">
        <Grid item xs={12} md={6}>
          {notes && (
            <div>
              {notes.length === 0 ? (
                <p>Start by Adding a note.</p>
              ) : (
                <div>
                  {notes
                    .slice(0)
                    .reverse()
                    .map((n, i) => (
                      <Link to={`/note/${n.id}`}>
                        <NotesCard key={i} note={n} refresh={getAllNotes} />
                      </Link>
                    ))}
                </div>
              )}
            </div>
          )}
        </Grid>
      </Grid>
      <div>
        <NewNoteFab refresh={getAllNotes} />
      </div>
    </div>
  );
}
