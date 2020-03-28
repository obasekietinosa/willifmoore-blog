import React, { Component } from 'react'
import './Posts.css'
import Loading from '../Loading/Loading';
import PostPreview from './PostPreview/PostPreview';

export default class PostList extends Component {

  render() {
    return (
      <div className="Posts">
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

    )
  }
}
