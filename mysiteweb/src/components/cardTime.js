import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import TimelineContent from "@material-ui/lab/TimelineContent";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";



const useStyles = makeStyles((theme) => ({
    paper: {
        padding: "6px 16px",
    },
    secondaryTail: {
        backgroundColor: theme.palette.primary.dark,
    },
}));

export default function CardTime(props) {
    const classes = useStyles();
    return (
        <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                    {props.title}
                </Typography>
                <Typography>
                    {props.content}
                </Typography>
            </Paper>
        </TimelineContent>
    );
}