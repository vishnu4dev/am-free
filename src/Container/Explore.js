import React from "react";
import { Grid } from "@material-ui/core";
import PostCard from "../component/PostCard";
import postImg  from "../Assets/blogspot/fk.jpg";

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

export default function Explore() {
  return (
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
  );
}

          {/* <PostCard image="../Assets/blogspot/fk.jpg" nameOfSpot="Fort Kochi" /> */}
