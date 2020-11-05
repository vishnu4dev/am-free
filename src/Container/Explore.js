import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import PostCard from "../component/PostCard";
import postImg  from "../Assets/blogspot/fk.jpg";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import { withRouter } from "react-router-dom";


const data = [
  {
    img: postImg,
    heading: "Fort Kochi",
  },
  {
    img: postImg,
    heading: "Kochi",
  },
  {
    img: postImg,
    heading: "Mattancherry",
  },
  {
    img: postImg,
    heading: "Island",
  },
  {
    img: postImg,
    heading: "Chellanam",
  },
  {
    img: postImg,
    heading: "Koovapadam",
  },
  {
    img: postImg,
    heading: "Parade",
  },
];

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
      {data.map((_item) => {
        return(
          <Grid item xs={11}>
            <PostCard image={_item.img} nameOfSpot={_item.heading} />
          </Grid>
        )
      })}
    </Grid>
    </>
  );
}

export default withRouter(Explore);


