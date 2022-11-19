import React from "react";
import moment from "moment";
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { del } from "../services/dbService";

export default function NotesCard(props) {
  const { note } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    console.log("Delete the note", note);
    del("notes", note.id)
      .then((e) => {
        console.log("Deleted note.", e);
      })
      .catch((err) => {
        console.log(err);
      });
    props.refresh();
  };

  return (
    <Card elevation={0}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">R</Avatar>}
        action={
          <IconButton
            aria-label="settings"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title="Guest"
        subheader={moment(note.date).from()}
      />
      <Menu
        id="notes-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Archive</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
      <CardContent>
        <div dangerouslySetInnerHTML={{ __html: note.body }} />
      </CardContent>
    </Card>
  );
}
