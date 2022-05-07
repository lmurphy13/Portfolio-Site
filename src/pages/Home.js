import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import lava from "../images/lava.jpg";
import liam from "../images/liam_grad.png";
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

  bgImage: {
    backgroundImage: `url(${lava})`,
    backgroundSize: "cover",
    backgroundRepeat: "none",
    backgroundPosition: "center",
    margin: 0,
    position: "relative",
    height: "40vh",
  },

  greeting: {
    textAlign: "center",
    color: "white",
    fontSize: "300%",
    marginTop: "10%",
    fontFamily: "IBM Plex Sans, sans-serif",
  },

  paper: {
    padding: "1%",
    textAlign: "left",
    background: "#3d3d3d",
    flexGrow: 1,
  },

  grid: {
    marginTop: "3%",
    fontSize: "120%",
  },

  link: {
    color: "#468cce",
  },

  liam: {
    width: "22vw",
    borderRadius: "50%",
  },
});

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.bgImage}>
        <NavBar color="transparent" />
        <p className={classes.greeting}>Hi! I'm Liam.</p>
      </div>

      <body class="full-height">
        <Grid container spacing={0} justify="center" className={classes.grid}>
          <Grid item xs={4}>
            <img className={classes.liam} src={liam} alt="Liam Murphy" />
           
          </Grid>

          <Grid item xs={4}>
            <p>
              I am a graduate of{" "} {/* eslint-disable-next-line */}
              <a
                className={classes.link}
                href="https://www.marquette.edu"
                target="_blank"
              >
                Marquette University
              </a>
              . I completed my Bachelor of Science degree in Computer Science
              with a minor in Spanish in May 2021.
            </p>

            <p> {/* eslint-disable-next-line */}
              I am now a graduate student pursuing a <a
                className={classes.link}
                href="https://www.marquette.edu/computer-science/graduate-program-computing.php"
                target="_blank"
              >M.S. in Computing</a> with a concentration in Information Assurance and Cyber Defense.
            </p>

            {/* <p>
              Additionally, I am pursuing my {" "}
              <a
                className={classes.link}
                href="https://www.marquette.edu/computer-science/graduate-program-computing.php"
                target="_blank"
              >
                Master of Science degree in Computing
              </a>{" "}
              with a concentration in Information Assurance and Cyber Defense. I
              began graduate-level coursework counting towards this degree in
              January 2020.
            </p> */}

            <p>
              Since June 2021, I have been working as a Software Engineer at{" "} {/* eslint-disable-next-line */}
              <a
                className={classes.link}
                href="https://astronautics.com/"
                target="_blank"
              >
                Astronautics
              </a>.
            </p>

            {/* <p>
              Check out my retro-styled Star Trek <a className={classes.link} href="https://www.liammurphy.me/trek" target="_blank">fan site</a>!
            </p> */}
          </Grid>
        </Grid>
      </body>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
