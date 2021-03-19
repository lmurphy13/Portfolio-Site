import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
import "../App.css";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    color: "white",
    fontFamily: "IBM Plex Sans, sans-serif",
    // position: "absolute",
    bottom: 0,
    width: "100%",
    height: "2.5rem",
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>© 2019-2021 - Liam M. Murphy</p>
    </div>
  );
}

export default Footer;
