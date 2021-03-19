import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "../Post/Post";

const MyPosts = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user.id;
    const userPosts = await axios.get(
      `http://localhost:3002/api/1.0/posts/get/${userId}`,
    );
    console.log("my posts", userPosts.data);
    setPosts(userPosts.data);
    console.log(posts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h2>My Posts</h2>
      {posts.map((item) => (
        <Post data={item} owner={true} />
      ))}
    </div>
  );
};

export default MyPosts;
