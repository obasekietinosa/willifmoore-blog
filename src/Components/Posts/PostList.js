import React, { Component } from 'react'
import './Posts.css'
import Loading from '../Loading/Loading';
import BlogService from '../../Services/BlogService';
import PostPreview from './PostPreview/PostPreview';

export default class PostList extends Component {
  
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
    let limit = this.props.limit ? this.props.limit : 10
    let offset = this.props.offset ? this.props.offset : 0
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
      <div className="Posts">
        <div className="container">
          <div className="row">
            <div className="col-10 offset-1 offset-md-0 col-md-12">
              <h2 className="text-center">Notes</h2>
              {
                this.state.postsLoaded ?
                  (
                    <ol>
                      {
                        this.state.posts.map((post, key) => {
                          return (
                            <li>
                              <PostPreview
                                key={key}
                                title={post.title.rendered}
                                category={post['_embedded']['wp:term'][0][0].name}
                                datePublished={post.date}
                                excerpt={post.excerpt.rendered}
                                link={"/posts/" + post.slug}
                              />
                            </li>
                          )
                        })
                      }
                    </ol>
                  )
                  : <Loading />
              }
            </div>
          </div>
        </div>
      </div>

    )
  }
}
