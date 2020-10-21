import React from 'react'
import { Grid } from '@material-ui/core'
import PostCard from '../component/PostCard'


export default function Explore() {
    return (
        <Grid container direction="column" justify="center" alignItems="center" className="gridRoot">
            <Grid item xs={11}>
                <PostCard image="../Assets/blogspot/fk.jpg" nameOfSpot="Fort Kochi"/>
            </Grid>
            <Grid item xs={11}>
                <PostCard image="../Assets/blogspot/munnar.jpg" nameOfSpot="Munnar"/>
            </Grid>
            <Grid item xs={11}>
                <PostCard image="../Assets/blogspot/church.jpg" nameOfSpot="Italy"/>
            </Grid>
        </Grid>
    )
}
