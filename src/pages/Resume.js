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

  bar: {
    // display: "inlineBlock",
    // borderLeft: "1px solid white",
    // margin: "0 10px",
    // height: "120px"
    position: "absolute",
    left: "-17px",
    borderLeft: "1px solid white",
    height: "85%",
    width: "0.5px",
    top: "50px",
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
          <embed src={resume} type="application/pdf" height={800} width={800} />
        </Grid>
      </body>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Resume;
