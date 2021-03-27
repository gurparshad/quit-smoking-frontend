import React, { useEffect, useState } from "react";
import moment from "moment";
import achievements from "./achievements.json";
import "./Achievements.css";
import axios from "axios";

const Achievements = () => {
  const [daysSmokeFree, setDaysSmokeFree] = useState();

  const calculateSmokeFreeTime = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user.id;
    try {
      const result = await axios.get(
        `http://localhost:3002/api/1.0/userDetails/${userId}`,
      );
      const startDate = new Date(result.data.quitDate);
      const endDate = new Date();
      const diff = endDate - startDate;
      const diffDuration = moment.duration(diff);
      const days = diffDuration.days();
      setDaysSmokeFree(days);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    calculateSmokeFreeTime();
  }, []);

  return (
    <div className="achievements">
      {achievements.map((item) => (
        <div className="achievements__achievement">
          <div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
          <div>
            {daysSmokeFree >= item.time ? (
              <div className="achievements__statusComplete">Completed</div>
            ) : (
              <div className="achievements__statusIncomplete">
                Not Completed
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
