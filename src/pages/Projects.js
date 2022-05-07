import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { GitHub } from "@material-ui/icons";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import Badge from "../components/Badge.js";
import drift from "../images/Drift.gif";
import terminal from "../images/terminal.png";
import trek from "../images/Trek.png";
import console from "../images/consolegame.png";
import lava from "../images/lava.jpg";
import react from "../images/react.png";
import perlin from "../images/perlin.gif";
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
    marginBottom: "3%",
  },

  link: {
    color: "#468cce",
  },

  icon: {
    color: "white",
  },

  card: {
    background: "#303030",
    color: "white",
  },

  type: {
    fontFamily: "IBM Plex Sans, sans-serif",
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
    height: "16vh",
  },
});

function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.bgImage}>
        <NavBar />
      </div>

      <body>
        <Grid
          container
          spacing={0}
          justify="center"
          className={classes.grid}
          style={{ marginBottom: "2%" }}
        >
          <Grid item xs={4}>
            <h3>Latest Personal Projects</h3>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>

        <Grid
          container
          spacing={0}
          justify="space-evenly"
          className={classes.grid}
        >
          <Grid item xs={2}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Drift"
                  height="200"
                  image={drift}
                  title="Drift Animation"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    className={classes.type}
                  >
                    Drift: a simple geometric animation written in Processing
                  </Typography>
                  <Typography
                    variant="body2"
                    color="white"
                    component="p"
                    className={classes.type}
                  > {/* eslint-disable-next-line */}
                    <a
                      href="https://processing.org/"
                      target="_blank"
                      className={classes.link}
                    >
                      Processing
                    </a>{" "}
                    is a langauage that allows programmers to more easily create
                    animations. It comes in two flavors: Java and Python, so not
                    much new learning is required. It is very easy to quickly
                    get projects up and running.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions> {/* eslint-disable-next-line */}
                <a href="https://github.com/lmurphy13/Drift" target="_blank">
                  <GitHub className={classes.icon} />
                </a>
                <Badge text="Processing" color="#1d517e" />
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={2}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Account Balance Mailer"
                  height="200"
                  image={terminal}
                  title="Account Balance Mailer"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    className={classes.type}
                  >
                    Account Balance Mailer
                  </Typography>
                  <Typography
                    variant="body2"
                    color="white"
                    component="p"
                    className={classes.type}
                  >
                    This program, written in Java, sends weekly updates to
                    accounts that I managed in my role of Vice President,
                    Finance of the Marquette Evans Scholars.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions> {/* eslint-disable-next-line */}
                <a
                  href="https://github.com/lmurphy13/Account-Balance-Mailer"
                  target="_blank"
                >
                  <GitHub className={classes.icon} />
                </a>
                <Badge text="Java" color="red" />
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={2}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Star Trek: The Original Game"
                  height="200"
                  image={trek}
                  title="Star Trek: The Original Game"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    className={classes.type}
                  >
                    Star Trek: The Original Game
                  </Typography>
                  <Typography
                    variant="body2"
                    color="white"
                    component="p"
                    className={classes.type}
                  >
                    This game was written in Java using JavaFX across
                    Assignments 4 and 5 of the COSC 3550: Programming Computer
                    Games course at Marquette University in the Spring 2020
                    semester.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions> {/* eslint-disable-next-line */}
                <a
                  href="https://github.com/lmurphy13/COSC-3550-Assignment-5"
                  target="_blank"
                >
                  <GitHub className={classes.icon} />
                </a>
                <Badge text="Java" color="red" />
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Console Game"
                  height="200"
                  image={console}
                  title="Console Game"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    className={classes.type}
                  >
                    Console Game Engine
                  </Typography>
                  <Typography
                    variant="body2"
                    color="white"
                    component="p"
                    className={classes.type}
                  >
                    This program, written in C and using the ncurses library, is
                    a basic console game engine. As an example of its
                    capabilities, I have written a simple brick breaker game.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions> {/* eslint-disable-next-line */}
                <a
                  href="https://github.com/lmurphy13/console-game"
                  target="_blank"
                >
                  <GitHub className={classes.icon} />
                </a>
                <Badge text="C" color="#f2e01a" textColor="black" />
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={0}
          justify="space-evenly"
          className={classes.grid}
        >
          <Grid item xs={2}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="React Logo"
                  height="200"
                  image={react}
                  title="React Logo"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    className={classes.type}
                  >
                    Personal Portfolio Website
                  </Typography>
                  <Typography
                    variant="body2"
                    color="white"
                    component="p"
                    className={classes.type}
                  >
                    The website you're currently looking at.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions> {/* eslint-disable-next-line */}
                <a
                  href="https://github.com/lmurphy13/Portfolio-Site"
                  target="_blank"
                >
                  <GitHub className={classes.icon} />
                </a>

                <Badge text="React.js" color="#61dafb" textColor="black" />
                <Badge text="Material-UI" color="#009688" />
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={2}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Perlin Noise"
                  height="200"
                  image={perlin}
                  title="Perlin Noise"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    className={classes.type}
                  >
                    Perlin Noise Animation
                  </Typography>
                  <Typography
                    variant="body2"
                    color="white"
                    component="p"
                    className={classes.type}
                  >
                    A Perlin Noise animation written in Processing. It is
                    inspired from{" "} {/* eslint-disable-next-line */}
                    <a
                      className={classes.link}
                      href="https://www.youtube.com/watch?v=IKB1hWWedMk"
                      target="_blank"
                    >
                      this{" "}
                    </a>{" "}
                    video.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions> {/* eslint-disable-next-line */}
                <a
                  href="https://github.com/lmurphy13/PerlinNoise"
                  target="_blank"
                >
                  <GitHub className={classes.icon} />
                </a>

                <Badge text="Processing" color="#1d517e" />
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </body>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Projects;
