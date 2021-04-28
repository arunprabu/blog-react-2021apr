import React, { Component } from 'react';
import axios from 'axios';

class MyBlog extends Component {

  constructor(){
    super();
    console.log('1. Inside Constructor');
    this.state = {
      postList:[]
    }
  }

  componentDidMount(){ // lifecycle hook
    console.log('3. Inside componentDidMount');
    // ideal place for us to send ajax calls to get data from REST API
    // What's the REST API URL? 'https://jsonplaceholder.typicode.com/posts' 
    // What's the HTTP MEthod? GET
    // What's the REST API Client? axios 
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then( (res) => {
        console.log(res);
        this.setState( {
          postList: res.data
        });
      })
      .catch( (err) => {
        console.log(err);
      })
      .finally( () => {
        console.log('It is over!');
      });
  }

  render() {
    console.log('2. Inside render');

    let posts = null;
    if(this.state.postList && this.state.postList.length > 0 ){

      posts = this.state.postList.map( (post) => {
        return( 
          <div className="card" key={post.id}>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
            </div>
          </div>
        )
      });

    }

    return (
      <div>
        <h2>My Blog Example | Lifecycle hook and REST API connection</h2>
        { posts } 

      </div>
    )
  }
}

export default MyBlog;