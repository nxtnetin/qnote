import React from "react";
import HomeAppbar from "../components/homeAppbar";
import { Grid, TextField, Paper, Button } from "@mui/material/";

export default function LoginPage() {
  return (
    <div className="loginPage">
      <HomeAppbar />

      <Grid container justify="center">
        <Grid item xs={12} md={6}>
          <h1>Login</h1>
          <Paper>
            <TextField id="username" label="Username" variant="outlined" />
            <TextField id="password" label="Password" variant="outlined" />
            <Button variant="contained" color="primary">
              Login
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
