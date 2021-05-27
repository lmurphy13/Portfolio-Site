import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import BackToTop from "react-back-to-top-button";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import BlogPost from "../components/BlogPost.js";
import lava from "../images/lava.jpg";
import grad from "../images/grad_cropped.jpg";
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
      textDecoration: "none",
    },

    icon: {
        color: "white",
        fontSize: "150%",
    },

    paper: {
        background: "#303030",
        color: "white",
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

    greeting: {
        textAlign: "center",
        fontFamily: "IBM Plex Sans, sans-serif",
        fontSize: "120%",
    },

    disclaimer: {
        fontFamily: "IBM Plex Sans, sans-serif",
        color: "white",
        textAlign: "center",
    },

    mainTitle: {
        fontFamily: "IBM Plex Sans, sans-serif",
        color: "white",
        textAlign: "center",
        padding: "1%",
        paddingBottom: 0,
    },

    grad: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "50%",
    }

  });

  function Blog() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.bgImage}>
                <NavBar />
            </div>

            <body>
                <div className={classes.mainTitle}>
                    {/* <h1>Personal Blog</h1> */}
                </div>
                <h3 className={classes.greeting}>Welcome to my personal blog. Here I will share my thoughts on various topics including technology, games, music, etc.</h3>

                <BackToTop
                    showOnScrollUp
                    showAt={100}
                    speed={1500}
                    easing="easeInOutQuint"
                >
                    <KeyboardArrowUpIcon className={classes.icon} />
                </BackToTop>

                <Grid container spacing={2} justify="center" className={classes.grid}>
                <Grid item xs={8}> 
                        <BlogPost title="Thoughts on Graduation" date="May 27, 2021">
                            <img className={classes.grad} src={grad}></img>

                            <p>
                                The road to graduation was long, but I arrived at the destination much more quickly than I anticipated it would take. Above is a picture of
                                myself and my parents outside American Family Field (formerly Miller Park) in Milwaukee, Wisconsin after my graduation from Marquette University.
                                I earned my B.S. in Computer Science and I am working towards my M.S. in Computing, also at Marquette.
                            </p>
                        </BlogPost>

                        <BlogPost title="Welcome!" date="May 27, 2021">
                            <p>
                                Welcome to my blog! This page was created from scratch by me. I did not use any WordPress or HTML templates. This page was created
                                the same way as the other pages on this React site. If you wish, the code can be found on 
                                my <a className={classes.link} href="https://liammurphy.me/projects" target="_blank">Projects</a> page. That aside, I'm glad you're here and I hope that my posts will be interesting to you.
                                In the future, I may implement a way to leave comments on my posts, though this may be some time away.
                            </p>

                            <p>In the mean time, if you have any questions please visit my <a className={classes.link} href="https://liammurphy.me/contact" target="_blank">Contact</a> page and connect with me there.</p>
                        </BlogPost>

                    </Grid>
                    
                    <Grid item xs={4}>
                        <div style={{ width: "70%", marginLeft: "15%"}}>
                            <Paper elevation={3} className={classes.paper}>
                            <h3 style={{ paddingTop: "1%", paddingLeft: "1%", marginBottom: "1%"}}>Latest Posts</h3>
                            <ul style={{ listStyleType: "none", padding: "1%", paddingTop: 0}}>
                                <li><a href="#Thoughts on Graduation" className={classes.link}>Thoughts on Graduation</a></li>
                                <li><a href="#Welcome!" className={classes.link}>Welcome!</a></li>
                            </ul>
                            </Paper>
                        </div>
                    </Grid>
                </Grid>
            </body>

            <footer>
                <p className={classes.disclaimer}>All opinions are my own and not those of my employer or Marquette University.</p>
                <Footer />
            </footer>
        </div>
    );
  }
  
  export default Blog;