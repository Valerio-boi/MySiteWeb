import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import CodeRoundedIcon from "@material-ui/icons/CodeRounded";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import BugReportRoundedIcon from "@material-ui/icons/BugReportRounded";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import SchoolRoundedIcon from "@material-ui/icons/SchoolRounded";


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