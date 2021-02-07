import React from 'react';
import './Post.css';
import Avatar from "@material-ui/core/Avatar";

function post({ username, caption, imageUrl }) {
    return (
        <div className="post">
          <div className="post_header">
            <Avatar
            className="post_avatar"
            alt='plalev00'
            src="/static/images/avatar/2.jpg"
            />
            <h3>{username}</h3>
          </div>
          {/* header -> avatar + username */}

          <img className="post_image" src={imageUrl} alt=""/>

          <h4 className="post_text"><strong>{username}</strong> {caption}</h4>
        </div>
    )
}

export default post
