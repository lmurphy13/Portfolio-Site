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

  lambda: {
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

function Research() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.bgImage}>
        <NavBar />
      </div>

      <body class="full-height">
        <Grid container spacing={0} justify="left" className={classes.grid}>
          <Grid item xs={4}>
            <h3>Research Experience</h3>
            {/* <p>
              Currently, I am exploring possible projects for my Master's
              thesis. I am interested in embedded operating systems, security,
              privacy, and ethical uses of data.
            </p> */}

            <h4>Marquette University</h4>
            <h4>Graduate</h4>
            <p>
              I have recently begun my research for my Master's thesis. I am working under the supervision of {" "}
              <a
                className={classes.link}
                href="http://www.mscs.mu.edu/~brylow/"
                target="_blank"
              >
                Dr. Dennis Brylow
              </a>.{" "}
              The area of my research is compiler construction. Further information can be found on my academic website where I am maintaining a {" "}
              <a
                className={classes.link}
                href="https://www.cs.mu.edu/~lmurphy9/research"
                target="_blank"
              >
               research log
              </a>.
            </p>

            <h4>Undergraduate</h4>
            <p>
              During the summer of 2019, I worked under the guidance of{" "}
              <a
                className={classes.link}
                href="http://www.mscs.mu.edu/~brylow/"
                target="_blank"
              >
                Dr. Dennis Brylow
              </a>{" "}
              as an undergraduate research assistant for the Systems Laboratory.
              I helped to port a framebuffer device driver to the Raspberry Pi 3
              B+ running Embedded Xinu. After that project was completed, I
              began development on a window abstraction device driver and a
              shell multiplexer similar to the popular program{" "}
              <a
                className={classes.link}
                href="https://github.com/tmux/tmux"
                target="_blank"
              >
                tmux
              </a>
              . This helped to expand the team's knowledge on the framebuffer
              device as well as working with Xinu's shell.
            </p>
          </Grid>
        </Grid>

        <Grid container spacing={0} justify="right" className={classes.grid}>
        <Grid item xs={4}>
            <img
              className={classes.lambda}
              src={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Lambda_lc.svg/1920px-Lambda_lc.svg.png"}
            ></img>
          </Grid>

          <Grid item xs={4}>
            <img
              className={classes.xinu}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZojQA5mhxdTpKWBsZlSjii18DktwOuW7GzQ7Gycn4iDahqqBU"
              }
              alt="xinu"
            />
          </Grid>
        </Grid>

        {/* <Grid container spacing={0} justify="center" className={classes.grid}>
          <Grid item xs={4}>
            <h3>Independent Writings</h3>
            <p>
              See below for some essays and articles I've written on various topics interesting to me. 
              These essays are not affiliated with my formal research at Marquette University.
            </p>

          </Grid>

          <Grid item xs={4}>

          </Grid>
        </Grid> */}
      </body>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Research;
