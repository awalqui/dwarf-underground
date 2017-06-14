import React, { Component } from 'react'
import './ArticleLinks.css'

class ArticleLinks extends Component {
  constructor() {
    super()

    this.state = {
      showComments: true
    }
  }

  render() {
    return (
      <div className="article-links">
        <a className="article-link" href="#">
          <i className="fa fa-comments-o"></i>
          <span className="article-link-text">Comments</span>
        </a>
        <a className="article-link" href="#">
          <i className="fa fa-share"></i>
          <span className="article-link-text">Share Post</span>
        </a>
        {this.state.showComments ? <p>Comments!</p> : null}
      </div>
    )
  }
}

export default ArticleLinks         