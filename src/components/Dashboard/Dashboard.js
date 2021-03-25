import React, { useEffect, useState } from "react";
import moment from "moment";
import Banner from "../Banner/Banner";
const Dashboard = () => {
  const [smokeFreeTime, setSmokeFreeTime] = useState("");

  const calculateSmokeFreeTime = () => {
    const startDate = new Date("2021-03-18 18:40:47");
    const endDate = new Date();
    console.log(startDate);
    console.log(endDate);
    const diff = endDate - startDate;
    console.log(diff);
    const diffDuration = moment.duration(diff);
    console.log(diffDuration);
    const days = diffDuration.days();
    console.log(days);
    const hours = diffDuration.hours();
    console.log(hours);
    const minutes = diffDuration.minutes();
    setSmokeFreeTime(`${days}d ${hours}h ${minutes}m`);
  };

  useEffect(() => {
    calculateSmokeFreeTime();
  }, []);

  return (
    <div>
      <Banner />
      <h1>Time Smoke free</h1>
      <h2>{smokeFreeTime}</h2>
    </div>
  );
};

export default Dashboard;
