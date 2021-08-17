import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { GitHub, LinkedIn, Twitter } from "@material-ui/icons";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import lava from "../images/lava.jpg";
import publicKey from "../docs/public_key.pem";
import "../App.css";

const useStyles = makeStyles({
  root: {
    height: "100%",
    minHeight: "100%",
    margin: 0,
    background: "#1e1e1e",
    color: "white",
    fontFamily: "IBM Plex Sans, sans-serif",
  },

  grid: {
    fontFamily: "IBM Plex Sans, sans-serif",
    fontSize: "120%",
    marginBottom: "2%",
    width: "100%",
  },

  link: {
    color: "#468cce",
  },

  icon: {
    color: "white",
    fontSize: "600%",
  },

  paper: {
    background: "#303030",
  },

  email: {
    color: "#0de002",
    fontFamily: "Ubuntu Mono, monospace",
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
    height: "0.5vh",
  },
});

function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.bgImage}>
        <NavBar />
      </div>

      <body class="full-height">
        <Grid
          container
          spacing={0}
          justify="center"
          className={classes.grid}
          style={{ marginBottom: "1%" }}
        >
          <Grid item xs={4}>
            <h3>Contact Information</h3>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>

        <Grid
          container
          spacing={0}
          justify="center"
          alignItems="center"
          className={classes.grid}
        >
          <p>
            If you'd like to contact me, please check out my various
            professional pages and social media.
          </p>

          
        </Grid>

        <Grid
          container
          spacing={6}
          justify="center"
          alignItems="center"
          className={classes.grid}
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <Grid item xs={0}>
            <Paper elevation={3} className={classes.paper}>
              <a href="http://www.github.com/lmurphy13" target="_blank">
                <GitHub className={classes.icon} />
              </a>
            </Paper>
          </Grid>

          <Grid item xs={0}>
            <Paper elevation={3} className={classes.paper}>
              <a
                href="https://www.linkedin.com/in/liam-murphy-05244114b/"
                target="_blank"
              >
                <LinkedIn className={classes.icon} />
              </a>
            </Paper>
          </Grid>

          <Grid item xs={0}>
            <Paper elevation={3} className={classes.paper}>
              <a href="https://twitter.com/lmurphy513" target="_blank">
                <Twitter className={classes.icon} />
              </a>
            </Paper>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={0}
          justify="center"
          alignItems="center"
          className={classes.grid}
        >
          <p>My email address is</p>
        </Grid>

        <Grid container spacing={0} justify="center" className={classes.grid}>
          <Paper elevation={3} className={classes.paper}>
            <span className={classes.email}>
              liam dot murphy at marquette dot edu
            </span>
          </Paper>
        </Grid>

        <Grid
          container
          spacing={0}
          justify="center"
          alignItems="center"
          className={classes.grid}
        >
          <p>If you wish to send me encrypted files, here is my RSA-2048 public key: <a className={classes.link} href={publicKey}>public key</a>.</p>
        </Grid>

        <Grid
          container
          spacing={0}
          justify="center"
          alignItems="center"
          className={classes.grid}
          style={{ marginBottom: "7%" }}
        >
          <p>
            Here's a link to my{" "}
            <a
              className={classes.link}
              href="https://www.cs.mu.edu/~lmurphy9/"
              target="_blank"
            >
              academic website
            </a>
            . It's mostly for fun, but contains a listing of the courses I've
            taken.
          </p>
        </Grid>

        <div className={classes.filler}></div>
      </body>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Contact;
