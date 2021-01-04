import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import resume from "../docs/Resume.pdf";
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
    marginTop: "3%",
  },

  link: {
    color: "#468cce",
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
});

function Resume() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.bgImage}>
        <NavBar />
      </div>

      <body>
        <Grid container spacing={0} justify="center" className={classes.grid}>
          <embed
            src={resume}
            type="application/pdf"
            height={1000}
            width={800}
          />
        </Grid>
      </body>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Resume;
