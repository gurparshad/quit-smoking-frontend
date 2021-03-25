import axios from "axios";
import React, { useEffect, useState } from "react";
import "./PostDetails.css";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const [details, setDetails] = useState({});
  const { postId } = useParams();

  const getPostDetails = async () => {
    const result = await axios.get(
      `http://localhost:3002/api/1.0/posts/getOne/${postId}`,
    );
    setDetails(result.data);
  };

  useEffect(() => {
    getPostDetails();
  }, []);

  return (
    <div className="postDetails">
      <h3>{details.title}</h3>
      <hr></hr>
      <p style={{ fontSize: 25 }}>{details.description}</p>
    </div>
  );
};

export default PostDetails;
