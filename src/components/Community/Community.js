import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import axios from "axios";
import "./Community.css";
import { Link } from "react-router-dom";

const Community = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const result = await axios.get(
      "http://localhost:3002/api/1.0/posts/getAll",
    );
    console.log(result.data);
    setPosts(result.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="community">
      <h3 className="community__header">
        You are not alone, Read stories and thoughts of other people or chat
      </h3>
      <div>
        <Link to="/createPost" className="community__shareBtn">
          Share Something...
        </Link>
        <Link to="/liveChat" className="community__liveBtn">
          Live Chat 💬
        </Link>
        <Link to="/myPosts" className="community__shareBtn">
          My Posts
        </Link>
      </div>

      <div className="community__posts">
        {posts.map((item) => (
          <Post data={item} />
        ))}
      </div>
    </div>
  );
};

export default Community;
