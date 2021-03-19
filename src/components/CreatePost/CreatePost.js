import React, { useState } from "react";
import "./CreatePost.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const CreatePost = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const savePost = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user.id;
    const data = {
      title: title,
      description: description,
    };
    try {
      await axios.post(
        `http://localhost:3002/api/1.0/posts/create/${userId}`,
        data,
      );
      history.push("/myPosts");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="createPost">
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        type="text"
        placeholder="Description"
        cols="30"
        rows="10"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button className="createPost__btn" onClick={savePost}>
        Submit
      </button>
    </div>
  );
};

export default CreatePost;
