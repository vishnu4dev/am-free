import React from "react";
import { Grid } from "@material-ui/core";
import PostCard from "../component/PostCard";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import IconButton from "@material-ui/core/IconButton";
import { withRouter } from "react-router-dom";

function Explore(props) {
  const handleButtonOnClick = () => {
    props.history.push("/addNewPost");
  };
  return (
    <>
      <div style={{}}>
        <IconButton
          style={{ position: "fixed", bottom: 0, right: 0 }}
          onClick={handleButtonOnClick}
        >
          <AddCircleRoundedIcon fontSize="large" />
        </IconButton>
      </div>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className="gridRoot"
      >
        <Grid item xs={11}>
          <PostCard image="../Assets/blogspot/fk.jpg" nameOfSpot="Fort Kochi" />
        </Grid>
        <Grid item xs={11}>
          <PostCard image="../Assets/blogspot/munnar.jpg" nameOfSpot="Munnar" />
        </Grid>
        <Grid item xs={11}>
          <PostCard image="../Assets/blogspot/church.jpg" nameOfSpot="Italy" />
        </Grid>
      </Grid>
    </>
  );
}
export default withRouter(Explore);
