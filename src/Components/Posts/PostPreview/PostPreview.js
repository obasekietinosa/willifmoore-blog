import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './PostPreview.css'

export default class PostPreview extends Component {
  render() {
    return (
      <div className="PostPreview mb-5">
        <Link to={this.props.link} className="title">
            <h3 className="mb-0" dangerouslySetInnerHTML={{ __html: this.props.title }}>
            </h3>
        </Link>
        <span>
          {this.props.category}
        </span>
        <div dangerouslySetInnerHTML={{ __html: this.props.excerpt }}>
        </div>
        <div>
          <Link to={this.props.link} className="btn btn-primary">
            Read Now
          </Link>
        </div>
      </div>
    )
  }
}
