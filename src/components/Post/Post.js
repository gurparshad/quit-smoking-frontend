import axios from "axios";
import React from "react";
import "./Post.css";
import { useHistory, Link } from "react-router-dom";

const Post = ({ data, owner }) => {
  const MAX_LENGTH = 150;
  const history = useHistory();

  const onPostClick = () => {
    history.push(`/postDetails/${data.id}`);
  };
  const onPostEditClick = () => {
    history.push(`myPosts/editPost/${data.id}`);
  };
  return (
    <div className="post">
      <div className="post__data">
        <h4 className="post__title">{data.title}</h4>
        {data.description.length > MAX_LENGTH ? (
          <h6 className="post__description">
            {data.description.substring(0, MAX_LENGTH)}...
          </h6>
        ) : (
          <h6 className="post__description">{data.description}</h6>
        )}
      </div>

      {!owner ? (
        <div className="post__data">
          <div className="post__userName">
            By {`${data.user?.firstName} ${data.user?.lastName} `}
          </div>
          <button className="post__readMoreBtn" onClick={onPostClick}>
            Read More
          </button>
        </div>
      ) : (
        <div className="post__ownerBtns">
          <button className="post__readMoreBtn" onClick={onPostClick}>
            Read More
          </button>
          <button className="post__readMoreBtn" onClick={onPostEditClick}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default Post;
