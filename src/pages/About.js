import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import fenwick from "../images/fenwick.jpg";
import marquette from "../images/marquette.png";
import es from "../images/es.jpg";
import parade from "../images/liam_parade.jpg";
import teals from "../images/teals.png";
import lava from "../images/lava.jpg";
import "../App.css";

const useStyles = makeStyles({
  root: {
    height: "100%",
    minHeight: "100%",
    margin: 0,
    background: "#1e1e1e",
    color: "white",
    secondary: "#468cce",
  },

  grid: {
    fontFamily: "IBM Plex Sans, sans-serif",
    fontSize: "120%",
  },

  link: {
    color: "#468cce",
  },

  fenwick: {
    width: "10vw",
    marginTop: "12%",
    marginLeft: "25%",
    borderRadius: "50%",
  },

  marquette: {
    width: "10vw",
    marginTop: "12%",
    marginLeft: "10%",
  },

  es: {
    width: "20vw",
    marginTop: "3%",
    marginLeft: "25%",
  },

  parade: {
    width: "20vw",
    marginTop: "11%",
    marginLeft: "25%",
  },

  teals: {
    width: "20vw",
    marginTop: "13%",
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
});

function About() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.bgImage}>
        <NavBar />
      </div>

      <body>
        <Grid container spacing={0} justify="center" className={classes.grid}>
          <Grid item xs={4}>
            <h3>Getting to Know Me</h3>
            <p>
              I'm from Chicago, Illinois. I attended{" "}
              <a
                className={classes.link}
                href="https://www.fenwickfriars.com/"
                target="_blank"
              >
                Fenwick High School
              </a>
              , a Dominican Catholic College Prep in Oak Park, a suburb of
              Chicago. I was a caddy for seven years at Park Ridge Country Club
              in Park Ridge, Illinois. During my senior year of high school, I
              applied for the prestigious Chick Evans Scholarship for caddies
              through the{" "}
              <a
                className={classes.link}
                href="https://wgaesf.org/"
                target="_blank"
              >
                Western Golf Association and Evans Scholars Foundation
              </a>{" "}
              and was fortunate enough to receive a four-year full tuition and
              housing scholarship to Marquette University in Milwaukee,
              Wisconsin. During my time as an Marquette Evans Scholar, I 
              had the opportunity to serve as the chapter's Vice President of
              Finance.
            </p>
          </Grid>
          <Grid item xs={4}>
            <img className={classes.fenwick} src={fenwick} alt="fenwick" />
            <img className={classes.marquette} src={marquette} alt="marquette" />
          </Grid>
        </Grid>

        <Grid container spacing={0} justify="center" className={classes.grid}>
          <Grid item xs={4}>
            <p>
              At Marquette, I lived with about sixty other Evans Scholars who
              come from similar backgrounds. I served as the treasurer of
              Marquette's chapter of{" "}
              <a
                className={classes.link}
                href="http://www.mscs.mu.edu/~acm/"
                target="_blank"
              >
                the Association for Computing Machinery
              </a>{" "}
              for the 2019-2020 school year. I was re-elected to the same
              position for the 2020-2021 school year. I was also a member of the{" "}
              <a
                className={classes.link}
                href="https://marquette.presence.io/organization/cyber-security-club"
                target="_blank"
              >
                Cyber Security Club
              </a>
              .
            </p>
          </Grid>
          <Grid item xs={4}>
            <img
              className={classes.es}
              src={es}
              alt="evans scholars foundation"
            />
          </Grid>
        </Grid>

        <Grid container spacing={0} justify="center" className={classes.grid}>
          <Grid item xs={4}>
            <h3>Personal Interests</h3>
            <p>
              Since 2012 I have been a member of the{" "}
              <a
                className={classes.link}
                href="https://shannonrovers.com/"
                target="_blank"
              >
                Shannon Rovers Irish Pipe Band
              </a>{" "}
              in Chicago, Illinois. I began taking bagpipe lessons when I was 10
              years old and have never looked back. I have played in parades
              across the country. In 2015, the band was asked to travel to
              Washington, D.C. to play at the funeral and burial of the famous
              Irish actress, Maureen O'Hara. Also, in 2016, the band flew to
              Boston, Massachussetts to play in Boston's Saint Patrick's Day
              Parade.
            </p>

            <p>
              In college, I developed a passion for programming and
              problem-solving. I love working on personal projects, one of which
              is this site.
            </p>
          </Grid>
          <Grid item xs={4}>
            <img className={classes.parade} src={parade} alt="parade" />
          </Grid>
        </Grid>

        <Grid container spacing={0} justify="center" className={classes.grid}>
          <Grid item xs={4}>
            <h3>Teaching</h3>
            <p>
              During the fall semester of 2019, I co-taught Introduction to
              Computer Science at a public high school in Milwaukee, Wisconsin.
              This was in partial fulfillment of a course I took called COSC
              3870: Pedagogy of Computer Science. I volunteered with an
              organization called{" "}
              <a
                className={classes.link}
                href="https://www.tealsk12.org/"
                target="_blank"
              >
                TEALS
              </a>
              , which is affiliated with Microsoft Philanthropies. The purpose
              of this company is to get Computer Science curriculua in every
              grade level from Kindergarten to 12th grade. The volunteers are
              made up of working professionals as well as college students, like
              myself. Volunteers help classroom teachers who may not have
              previous experience with presenting Computer Science concepts to
              students.
            </p>
          </Grid>
          <Grid item xs={4}>
            <img className={classes.teals} src={teals} alt="tealsk12" />
          </Grid>
        </Grid>

        {/* <Grid container spacing={0} justify="center" className={classes.grid}>
          <Grid item xs={4}>
            <h3>Getting to Know Me</h3>
            <p>
              I'm from Chicago, Illinois. I attended{" "}
              <a
                className={classes.link}
                href="https://www.fenwickfriars.com/"
                target="_blank"
              >
                Fenwick High School
              </a>
              , a Dominican Catholic College Prep in Oak Park, a suburb of
              Chicago. I was a caddy for seven years at Park Ridge Country Club
              in Park Ridge, Illinois. During my senior year of high school, I
              applied for the prestigious Chick Evans Scholarship for caddies
              through the{" "}
              <a
                className={classes.link}
                href="https://wgaesf.org/"
                target="_blank"
              >
                Western Golf Association and Evans Scholars Foundation
              </a>{" "}
              and was fortunate enough to receive a four-year full tuition and
              housing scholarship to Marquette University in Milwaukee,
              Wisconsin. During my time as an Marquette Evans Scholar, I have
              had the opportunity to serve as the chapter's Vice President of
              Finance.
            </p>
            <p>
              At Marquette, I live with about sixty other Evans Scholars who
              come from similar backgrounds. I served as the treasurer of
              Marquette's chapter of{" "}
              <a
                className={classes.link}
                href="http://www.mscs.mu.edu/~acm/"
                target="_blank"
              >
                the Association for Computing Machinery
              </a>{" "}
              for the 2019-2020 school year. I was re-elected to the same
              position for the 2020-2021 school year. I am also a member of the{" "}
              <a
                className={classes.link}
                href="https://marquette.presence.io/organization/cyber-security-club"
                target="_blank"
              >
                Cyber Security Club
              </a>
              .
            </p>
            <h3>Personal Interests</h3>
            <p>
              Since 2012 I have been a member of the{" "}
              <a
                className={classes.link}
                href="https://shannonrovers.com/"
                target="_blank"
              >
                Shannon Rovers Irish Pipe Band
              </a>{" "}
              in Chicago, Illinois. I began taking bagpipe lessons when I was 10
              years old and have never looked back. I have played in parades
              across the country. In 2015, the band was asked to travel to
              Washington, D.C. to play at the funeral and burial of the famous
              Irish actress, Maureen O'Hara. Also, in 2016, the band flew to
              Boston, Massachussetts to play in Boston's Saint Patrick's Day
              Parade.
            </p>
            <p>
              In college, I've developed a passion for programming and
              problem-solving. I love working on personal projects, one of which
              is this site.
            </p>

            <h3>Teaching</h3>
            <p>
              During the fall semester of 2019, I co-taught Introduction to
              Computer Science at a public high school in Milwaukee, Wisconsin.
              This was in partial fulfillment of a course I took called COSC
              3870: Pedagogy of Computer Science. I volunteered with an
              organization called{" "}
              <a
                className={classes.link}
                href="https://www.tealsk12.org/"
                target="_blank"
              >
                TEALS
              </a>
              , which is affiliated with Microsoft Philanthropies. The purpose
              of this company is to get Computer Science curriculua in every
              grade level from Kindergarten to 12th grade. The volunteers are
              made up of working professionals as well as college students, like
              myself. Volunteers help classroom teachers who may not have
              previous experience with presenting Computer Science concepts to
              students.
            </p>
          </Grid>

          <Grid item xs={4} textAlign="center">
            <img className={classes.fenwick} src={fenwick} alt="fenwick" />
            <img
              className={classes.es}
              src={es}
              alt="evans scholars foundation"
            />
            <img className={classes.parade} src={parade} alt="parade" />
            <img className={classes.teals} src={teals} alt="tealsk12" />
          </Grid>
        </Grid> */}
      </body>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default About;
