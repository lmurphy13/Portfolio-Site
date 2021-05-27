import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import "../App.css";
import { PlayCircleFilledWhite } from "@material-ui/icons";

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      fontFamily: "IBM Plex Sans, sans-serif",
      background: "#1e1e1e",
      color: "white",
    },
    title: {
      flexGrow: 1,
      color: "white",
      fontSize: "130%",
      fontFamily: "IBM Plex Sans, sans-serif",
      padding: "1%",
      paddingBottom: "-1%",
    },
    
    paper: {
        background: "#303030",
        color: "white",
    },

    date: {
        fontSize: "70%",
        paddingLeft: "1%",
    },

    content: {
        padding: "1%",
    }

});

function BlogPost(props) {
    const classes = useStyles(props);

    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.paper}>
                <h2 className={classes.title}>{props.title}</h2>
                <h3 style={{ fontSize: "90%", paddingLeft: "1%" }}>Liam M. Murphy</h3>
                <span className={classes.date}>Posted {props.date}</span>

                
                <div className={classes.content}>
                    {props.children}
                </div>
            </Paper>
        </div>
    );
}

export default BlogPost;