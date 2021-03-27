import React, { useState, useEffect } from "react";
import "./EditPost.css";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditPost = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { postId } = useParams();

  const updatePost = async (e) => {
    const data = {
      title: title,
      description: description,
    };
    try {
      await axios.patch(
        `http://localhost:3002/api/1.0/posts/update/${postId}`,
        data,
      );
      history.push("/myPosts");
    } catch (err) {
      console.log(err);
    }
  };

  const getPostData = async () => {
    const result = await axios.get(
      `http://localhost:3002/api/1.0/posts/getOne/${postId}`,
    );
    setTitle(result.data.title);
    setDescription(result.data.description);
  };

  const deletePost = async (e) => {
    e.preventDefault();
    await axios.delete(`http://localhost:3002/api/1.0/posts/delete/${postId}`);
    history.push("/myPosts");
  };

  useEffect(() => {
    console.log("inside useeffect ");
    getPostData();
  }, []);

  return (
    <div className="createPost">
      <input
        value={title}
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <textarea
        value={description}
        type="text"
        placeholder="Description"
        cols="30"
        rows="10"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <div className="editPost__btns">
        <button className="createPost__btn" onClick={updatePost}>
          Submit
        </button>
        {window.location.href.indexOf("editPost") > -1 ? (
          <button className="deletePost__btn" onClick={deletePost}>
            Delete
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default EditPost;
