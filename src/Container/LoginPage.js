import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import bgImage from "../Assets/Images/pexels-photo-4207785.jpeg";
import { Link, withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${bgImage})`,
    backgroundColor: "#cccccc",
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
    margin: "15px",
    backgroundColor: "darkkhaki",
  },
  container: {
    height: "100%",
  },
}));

const handleExploreOnClick = (props) => {
  console.log("explore");
  props.history.push("/homePage");
};
const handleNewsOnClick = (props) => {
  console.log("News");
  props.history.push("/homePage");
};

export default function LoginPage(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center" direction="column">
        <Grid item xs={10}>
          <Paper
            className={classes.paper}
            onClick={handleExploreOnClick}
            style={{ marginTop: "260px" }}
          >
            Explore
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Paper className={classes.paper} onClick={handleNewsOnClick}>
            News
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
