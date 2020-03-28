import React, { Component } from 'react'
import './Posts.css'
import Loading from '../Loading/Loading';
import PostPreview from './PostPreview/PostPreview';

export default class PostList extends Component {

  render() {
    return (
      <div className="Posts">
        <div className="container">
          <div className="row">
            <div className="col-10 offset-1 offset-md-0 col-md-12">
              <h2 className="text-center">Notes</h2>
              {
                this.props.status === "loaded" ?
                  (
                    <React.Fragment>
                      <ol style={{ counterReset:"a " + (parseInt(this.props.posts.count) + 1) }}>
                        {
                          this.props.posts.map((post, key) => {
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
                    </React.Fragment>
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
