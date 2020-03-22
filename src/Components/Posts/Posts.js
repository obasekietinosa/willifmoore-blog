import React, { Component } from 'react'
import './Posts.css'

import {
  Switch,
  Route
} from "react-router-dom";
import BlogService from '../../Services/BlogService';
import PostList from './PostList';
import Post from './Post/Post';

export default class Posts extends Component {
  
  constructor() {
    super();
    this.blogService = new BlogService()
    this.state = {
      postsLoaded: false,
      posts: []
    };
  }

  componentDidMount() {
    if (!this.state.postsLoaded) {
      this.getPosts();
    }
  }

  getPosts = () => {
    let limit = 100
    let offset = 0
    this.blogService.getPosts(limit, offset)
      .then(data => {
        console.log(data)
        let posts = data
        let postsLoaded = true
        this.setState({ posts, postsLoaded, error: "" })
      })
      .catch(error => this.setState({ error: "There was an error fetching posts. Please try again." }))
  }

  render() {
    return (
      <Switch>
        <Route exact path='/posts'>
          <PostList 
              posts={ this.state.posts }
              status={ this.state.postsLoaded ? "loaded" : "loading" }
          />
        </Route>
        <Route path='/posts/:slug' component={Post} />
      </Switch>
    )
  }
}
