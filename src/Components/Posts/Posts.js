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
          <div className="container">
            <div className="row">
              <div className="col-10 offset-1 offset-md-0 col-md-12">
                <h2 className="text-center">Notes</h2>
                    <PostList 
                        posts={ this.state.posts }
                        status={ this.state.postsLoaded ? "loaded" : "loading" }
                    />
              </div>
            </div>
          </div>
        </Route>
        <Route path='/posts/:slug' component={Post} />
      </Switch>
    )
  }
}
