import React from "react";
import "./CreatePost.css";

const CreatePost = () => {
  return (
    <div className="createPost">
      <input type="text" placeholder="Title" />
      <br />
      <textarea type="text" placeholder="Description" cols="30" rows="10" />
      <br />
      <button className="createPost__btn">Submit</button>
    </div>
  );
};

export default CreatePost;
