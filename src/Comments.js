import React, { Component } from 'react'

class Comments extends Component {
    constructor() {
        super()

        this.state = {
            comment: ''
        }

        this.updateComment = this.updateComment.bind(this)
    }

    updateComment(ev) {
        this.setState({
            commend: ev.target.value
        })
    }

    render() {
        return (
            <div className="comments">
                <textarea
                    value={this.state.comment}
                    onChange={this.updateComment}
                    placeholder="Enter Comment">
                </textarea>
                <button className="button">Submit comment</button>
            </div>
        )
    }
}

export default Comments