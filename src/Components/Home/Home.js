import React, { Component } from 'react'
import NewsletterSubscribe from '../NewsletterSubscribe/NewsletterSubscribe';
import SocialIcons from '../SocialIcons/SocialIcons';
import BooksList from '../Books/BooksList';
import Videos from '../Videos/Videos';
import Contact from '../Contact/Contact';
import PostList from '../Posts/PostList';
import BlogService from '../../Services/BlogService';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  
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
      let limit = 3
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
            <div>
                <NewsletterSubscribe />
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
                <div className="py-3 text-center">
                    <Link to="/posts" className="btn btn-primary">
                        See All
                    </Link> 
                </div>
                <SocialIcons />
                <BooksList />
                <Videos />
                <Contact />
            </div>
        )
    }
}
