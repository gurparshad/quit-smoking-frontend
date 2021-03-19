import axios from "axios";
import React from "react";
import "./Post.css";
import { useHistory } from "react-router-dom";

const Post = ({ data, owner }) => {
  const history = useHistory();
  const deletePost = async (e) => {
    e.preventDefault();
    const postId = data.id;
    await axios.delete(`http://localhost:3002/api/1.0/posts/delete/${postId}`);
    history.push("/community");
  };
  return (
    <div className="post">
      <h4 className="post__title">{data.title}</h4>
      <h6 className="post__description">{data.description}</h6>
      {!owner ? (
        <div className="post__userName">
          By {`${data.user.firstName} ${data.user.lastName} `}
        </div>
      ) : (
        <button onClick={deletePost} className="post__deleteBtn">
          Delete
        </button>
      )}
    </div>
  );
};

export default Post;
