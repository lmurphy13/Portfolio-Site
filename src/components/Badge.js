import React from "react"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        borderRadius: "25px",
        height: "19px",
        minWidth: "fitContent",
        fontSize: "12px",
        textAlign: "center",


        verticalAlign: "middle",
        paddingTop: "3px",
        paddingLeft: "7px",
        paddingRight: "7px",
        color: "white",
    }
});

function Badge(props) {
    
    const classes = useStyles(props);

    return (
        <div className={classes.root} style={{background: props.color, color: props.textColor}}>
            {props.text}
        </div>
    );
}

export default Badge;