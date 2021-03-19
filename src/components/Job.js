import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    fontFamily: "IBM Plex Sans, sans-serif",
    color: "white",
  },

  h4: {
    margin: "1px",
  },

  p: {
    margin: "1px",
  },
});

function Job(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h4 className={classes.h4}>{props.title}</h4>
      <p className={classes.p}>
        {props.company}, {props.location}
      </p>
      <p className={classes.p}>{props.duration}</p>
    </div>
  );
}

export default Job;
