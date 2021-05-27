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
      width: "80%",
      paddingLeft: "6%",
      paddingBottom: "1%",
    },
    title: {
      flexGrow: 1,
      color: "white",
      fontSize: "130%",
      fontFamily: "IBM Plex Sans, sans-serif",
      paddingLeft: "1%",
      paddingTop: "1%",
      marginBottom: "1%",
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
        fontSize: "90%",
    }

});

function BlogPost(props) {
    const classes = useStyles(props);

    return (
        <div className={classes.root}>
            <a name={props.title} />
            <Paper elevation={3} className={classes.paper}>
                <h2 className={classes.title}>{props.title}</h2>
                <strong><span style={{ fontSize: "90%", paddingLeft: "1%" }}>By Liam M. Murphy</span></strong>
                <br />
                <span className={classes.date}>Posted {props.date}</span>

                
                <div className={classes.content}>
                    {props.children}
                </div>
            </Paper>
        </div>
    );
}

export default BlogPost;