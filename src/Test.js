import React, { Component } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  TextField,
  Button,
  Grid,
} from "@material-ui/core";
import axios from 'axios';

export default class Test extends Component {
  state = {
    listData: [],
    title:'',
    body:'',
    searchKey:null,
    noData:false,
  };

  onChangeHandler=(e,field)=>{
    this.setState({[field]:e.target.value})
  }
  async componentDidMount (){
    let {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
    this.setState({listData:data})
  }

  
 handleAddPost= async ()=>{
     const {title,body,listData} = this.state;
    let data ={title,body,userId:Number(Math.random().toFixed()) };
    const resp = await axios.post('https://jsonplaceholder.typicode.com/posts',data);
    console.log("-- Rog -- Value to be posted",resp)
    if(resp){
        let {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
        this.setState({listData:data})
    }
    else{
        alert("API fail")
    }
}

handleSearch= async()=>{
    const {searchKey} = this.state;

    let {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts?id=${searchKey}`);
    if(data.lenght){
        this.setState({listData:data})
    }
    else{
        this.setState({listData:data,noData:true})

    }
}

  render() {
      const {listData,noData} = this.state;
    return (
      <div className="testRoot">

            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              onChange={(e)=>{this.onChangeHandler(e,'searchKey')}}
            />
            <Button onClick={this.handleSearch}> Search </Button> 

        <Grid container  direction="column" space={3} className="form">
          <Grid item >
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              onChange={(e)=>{this.onChangeHandler(e,'title')}}
            />
          </Grid>
          <br/>
          <Grid item>
            <TextField
              id="outlined-basic"
              label="Body"
              variant="outlined"
              onChange={(e)=>{this.onChangeHandler(e,'body')}}
            />
          </Grid>
        </Grid>
        <br/>
        <Button size="small" className="addButton" onClick={this.handleAddPost}>
          Add Post
        </Button>
        <br/>
        <br/>

        <Grid container direction="row">
         {Array.isArray(listData) ? 
          listData.map((_item)=>{
              return(
                <Grid item xs={4}>
                <Card className="rootCard">
                  <CardContent className="testCard">
                    <Typography color="textSecondary" gutterBottom>
                     {_item.title}
                    </Typography>
                    <Typography variant="h5" component="h2">
                      {_item.body}
                    </Typography>
                    <Typography color="textSecondary">adjective</Typography>
                    <Typography variant="body2" component="p">
                      well meaning and kindly.
                      <br />
                    </Typography>
                  </CardContent>
                  <CardActions></CardActions>
                </Card>
              </Grid>
              )
          }):<h1> No Data Found</h1>
         }
        </Grid>
        {noData && <h1> No Data Found</h1>}
      </div>
    );
  }
}
