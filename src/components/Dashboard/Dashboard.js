import React, { useEffect, useState } from "react";
import moment from "moment";
import "./Dashboard.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [smokeFreeTime, setSmokeFreeTime] = useState("");
  const [userDetails, setUserDetails] = useState({});
  const [savedMoney, setSavedMoney] = useState();

  const calculateUserData = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user.id;
    try {
      const result = await axios.get(
        `http://localhost:3002/api/1.0/userDetails/${userId}`,
      );
      setUserDetails(result.data);
      console.log(userDetails);
      const startDate = new Date(result.data.quitDate);
      const endDate = new Date();
      const diff = endDate - startDate;
      const diffDuration = moment.duration(diff);
      const days = diffDuration.days();
      const hours = diffDuration.hours();
      const minutes = diffDuration.minutes();
      setSmokeFreeTime(`${days}d ${hours}h ${minutes}m`);
      const priceOfOneCigarette =
        result.data.packetCost / result.data.cigarettesInPack;
      const moneySaved = Math.round(days * (result.data.cigarettesEachDay * priceOfOneCigarette) * 10) / 10;
      setSavedMoney(moneySaved);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    calculateUserData();
  }, []);

  return (
    <div>
      <div className="dashboard__time">
        <p style={{ fontSize: 40 }}>Time Smoke free</p>
        <p style={{ fontSize: 100, color: "#399eb5" }}>{smokeFreeTime}</p>
      </div>
      <hr style={{ width: "40%" }} />
      <div className="dashboard__moneySaved">
        <p style={{ fontSize: 40 }}>Money You Saved</p>
        <p style={{ fontSize: 100, color: "#399eb5" }}>
          {savedMoney} {userDetails.currency}
        </p>
        <hr style={{ width: "40%" }} />
        <p style={{ fontSize: 19 }}>
          You are doing great, Remember you are not alone.
        </p>
        <p>Get in touch with others in community section</p>
        <Link to="/community" className="dashboard__communityBtn">
          Community
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
