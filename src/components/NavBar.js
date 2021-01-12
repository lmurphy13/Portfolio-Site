import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "../App.css";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    fontFamily: "IBM Plex Sans, sans-serif",
  },
  title: {
    flexGrow: 1,
    color: "white",
    fontSize: "130%",
    fontFamily: "IBM Plex Sans, sans-serif",
  },
  link: {
    textDecoration: "none",
    textAlign: "right",
    marginRight: "2%",
    color: "white",
    fontSize: "130%",
  },

  active: {
    textDecoration: "underline",
  },
});

function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Liam M. Murphy
          </Typography>
          <NavLink
            className={classes.link}
            activeClassName={classes.active}
            to="/"
            exact
          >
            Home
          </NavLink>
          <NavLink
            className={classes.link}
            activeClassName={classes.active}
            to="/about"
            exact
          >
            About
          </NavLink>
          <NavLink
            className={classes.link}
            activeClassName={classes.active}
            to="/research"
            exact
          >
            Research
          </NavLink>
          <NavLink
            className={classes.link}
            activeClassName={classes.active}
            to="/projects"
            exact
          >
            Projects
          </NavLink>

          <NavLink
            className={classes.link}
            activeClassName={classes.active}
            to="/resume"
            exact
          >
            Resume
          </NavLink>
          <NavLink
            className={classes.link}
            activeClassName={classes.active}
            to="/contact"
            exact
          >
            Contact
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
