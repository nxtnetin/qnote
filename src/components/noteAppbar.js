import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function HomeAppbar() {
  return (
    <div>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar>
          <Link to="/">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <ArrowBackIcon />
            </IconButton>
          </Link>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            qNote
          </Typography>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
