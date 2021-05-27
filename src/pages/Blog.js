import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import BlogPost from "../components/BlogPost.js";
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
      secondary: "#468cce",
    },
  
    grid: {
      fontFamily: "IBM Plex Sans, sans-serif",
      fontSize: "120%",
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

  function Blog() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.bgImage}>
                <NavBar />
            </div>

            <body>
                <Grid container spacing={0} justify="center" className={classes.grid}>
                    <Grid item xs={4}>
                        <h3>Latest Posts</h3>
                    </Grid>

                    <Grid item xs={6}> 
                        <BlogPost title="Test Post Title 1" date="May 27, 2021">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            In est ante in nibh mauris. Non sodales neque sodales ut etiam sit amet nisl purus. 
                            Et odio pellentesque diam volutpat commodo sed. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. 
                            Lectus proin nibh nisl condimentum id venenatis. Ut enim blandit volutpat maecenas. Risus sed vulputate odio ut. 
                            Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. 
                            Donec ultrices tincidunt arcu non sodales neque sodales ut etiam. Magnis dis parturient montes nascetur ridiculus mus.
                            </p>

                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            In est ante in nibh mauris. Non sodales neque sodales ut etiam sit amet nisl purus. 
                            Et odio pellentesque diam volutpat commodo sed. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. 
                            Lectus proin nibh nisl condimentum id venenatis. Ut enim blandit volutpat maecenas. Risus sed vulputate odio ut. 
                            Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. 
                            Donec ultrices tincidunt arcu non sodales neque sodales ut etiam. Magnis dis parturient montes nascetur ridiculus mus.
                            </p>

                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            In est ante in nibh mauris. Non sodales neque sodales ut etiam sit amet nisl purus. 
                            Et odio pellentesque diam volutpat commodo sed. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. 
                            Lectus proin nibh nisl condimentum id venenatis. Ut enim blandit volutpat maecenas. Risus sed vulputate odio ut. 
                            Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. 
                            Donec ultrices tincidunt arcu non sodales neque sodales ut etiam. Magnis dis parturient montes nascetur ridiculus mus.
                            </p>

                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            In est ante in nibh mauris. Non sodales neque sodales ut etiam sit amet nisl purus. 
                            Et odio pellentesque diam volutpat commodo sed. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. 
                            Lectus proin nibh nisl condimentum id venenatis. Ut enim blandit volutpat maecenas. Risus sed vulputate odio ut. 
                            Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. 
                            Donec ultrices tincidunt arcu non sodales neque sodales ut etiam. Magnis dis parturient montes nascetur ridiculus mus.
                            </p>

                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            In est ante in nibh mauris. Non sodales neque sodales ut etiam sit amet nisl purus. 
                            Et odio pellentesque diam volutpat commodo sed. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. 
                            Lectus proin nibh nisl condimentum id venenatis. Ut enim blandit volutpat maecenas. Risus sed vulputate odio ut. 
                            Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. 
                            Donec ultrices tincidunt arcu non sodales neque sodales ut etiam. Magnis dis parturient montes nascetur ridiculus mus.
                            </p>
                        </BlogPost>

                        <BlogPost title="Post 2" date="May 28, 2021">
                            <p>
                                Bla bla bla bla bla bla bla
                            </p>

                            <img src={liam}></img>
                        </BlogPost>
                    </Grid>
                </Grid>
            </body>

            <footer>
                <Footer />
            </footer>
        </div>
    );
  }
  
  export default Blog;