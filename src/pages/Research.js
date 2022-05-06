import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import lava from "../images/lava.jpg";
import lambda from "../images/lambda.png";
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
    marginTop: "10%",
    marginLeft: "25%"
  },

  lambda: {
    height: "20vh",
    marginTop: "45%",
    marginLeft: "50%"
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
    height: "10vh",
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
        <Grid container spacing={0} justify="center" className={classes.grid}>
          <Grid item xs={4}>
            <h3>Research Experience</h3>

            <h4>Marquette University</h4>
            <h4>Graduate</h4>
            
            <p>
              My master's thesis, titled <i>Improving Compiler Construction Education by Retargeting and Extending a Compiler for Embedded Xinu</i>, deals with improving the
              pedagogical compiler used to instruct undergraduate and graduate students enrolled in Marquette University's COSC 4400/5400 Compiler Construction course.
              
            </p>
            <p>
               I argue that, by retargeting the compiler to the most recent Embedded Xinu platform, students can draw upon previously acquired skills in 
              operating systems to increase their success in learning concepts related to compiler construction.
            </p>
            <p>
              While working under the supervision of {" "}
              <a
                className={classes.link}
                href="http://www.mscs.mu.edu/~brylow/"
                target="_blank"
              >
                Dr. Dennis Brylow
              </a>,{" "} I maintained a {" "}
              <a
                className={classes.link}
                href="https://www.cs.mu.edu/~lmurphy9/research"
                target="_blank"
              >
               research log
              </a> on my academic website to track this project's progress.
            </p>

            <p>
              This thesis was successfully defended on April 1st, 2022. The full-text document can be found on {" "}
              <a
                className={classes.link}
                href="https://www.proquest.com/docview/2658279769/9925D60F56E04A36PQ/15?accountid=100&parentSessionId=a%2FLZvm5eV3O0fikN3IKrciJ4ceOR73KnPdsqWu3tpOA%3D"
                target="_blank"
              >
                ProQuest
              </a>
               , with access provided through Marquette University.
            </p>
          </Grid>
          <Grid item xs={4}>
            <img
              className={classes.lambda}
              src={lambda}
            ></img>
          </Grid>
        </Grid>

        <Grid container spacing={0} justify="center" className={classes.grid}>
          <Grid item xs={4}>
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
      </body>

      <footer>
        <div className={classes.filler}></div>
        <Footer />
      </footer>
    </div>
  );
}

export default Research;
