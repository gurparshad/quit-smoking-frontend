import React, { useEffect, useState } from "react";
import moment from "moment";
import achievements from "./achievements.json";
import "./Achievements.css";

const Achievements = () => {
  const [daysSmokeFree, setDaysSmokeFree] = useState();

  const calculateSmokeFreeTime = () => {
    const startDate = new Date("2021-03-16 18:40:47");
    const endDate = new Date();
    console.log(startDate);
    console.log(endDate);
    const diff = endDate - startDate;
    console.log(diff);
    const diffDuration = moment.duration(diff);
    console.log(diffDuration);
    const days = diffDuration.days();
    console.log(days);
    setDaysSmokeFree(days);
    const hours = diffDuration.hours();
    console.log(hours);
    const minutes = diffDuration.minutes();
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
