import React from "react";
import HomeAppbar from "../components/homeAppbar";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ status });
    setStatus("");
  };
  const handleChange = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div className="homePage">
      <HomeAppbar />
      <h1>Hello World</h1>
      <h2>Start editing to see some magic happen!</h2>
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
      <div>{status}</div>
    </div>
  );
}
