import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Dashboard from "../Dashboard/Dashboard";
import "./Home.css";

const Home = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);
  return <div>{user ? <Dashboard /> : <Banner />}</div>;
};

export default Home;
