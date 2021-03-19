import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import lava from "../images/lava.jpg";
import "../App.css";

const useStyles = makeStyles({
  root: {
    height: "100%",
    minHeight: "100%",
    margin: 0,
    background: "#1e1e1e",
    color: "white",
  },

  grid: {
    fontFamily: "IBM Plex Sans, sans-serif",
    fontSize: "120%",
  },

  link: {
    color: "#468cce",
  },

  xinu: {
    height: "20vh",
    marginTop: "30%",
    marginLeft: "25%",
  },

  bgImage: {
    backgroundImage: `url(${lava})`,
    backgroundSize: "cover",
    backgroundRepeat: "none",
    backgroundPosition: "center",
    margin: 0,
    position: "relative",
    height: "7vh",
  },

  filler: {
    height: "39vh",
  },
});

function Publications() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.bgImage}>
        <NavBar />
      </div>

      <body class="full-height">
        <Grid container spacing={0} justify="center" className={classes.grid}>
          <Grid item xs={4}>
            <h3>Publications</h3>

            <p>
              See below some papers I've written for various undergraduate
              courses, specifically Computer Science and Spanish. Graduate
              papers will follow when available.
            </p>

            <h4>Undergraduate Papers</h4>
          </Grid>

          <Grid item xs={4}></Grid>
        </Grid>
      </body>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Publications;
