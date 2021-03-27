import React, { useState, useEffect } from "react";
import "./OnBoarding.css";
import moment from "moment";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";

const OnBoarding = () => {
  const [cigarettesInPack, setCigarettesInPack] = useState();
  const [packCost, setPackCost] = useState();
  const [cigarettesInDay, setCigarettesInDay] = useState();
  const [years, setYears] = useState();
  const [currency, setCurrency] = useState();
  const [quitDate, setQuitDate] = useState();
  const history = useHistory();
  const location = useLocation();

  const saveData = async (e) => {
    e.preventDefault();

    let userDetails = {
      packetCost: packCost,
      cigarettesInPack: cigarettesInPack,
      cigarettesEachDay: cigarettesInDay,
      years: years,
      currency: currency,
      quitDate: quitDate,
    };
    let userId = location.pathname.split("/")[2];
    await axios.post(
      `http://localhost:3002/api/1.0/userDetails/${userId}`,
      userDetails,
    );
    history.push(`/dashboard/${userId}`);
  };

  useEffect(() => {
    setQuitDate(moment(new Date()).format("YYYY-MM-DD hh:mm:ss"));
  }, []);

  return (
    <div>
      <h3 className="onBoarding__header">Please answer these quiestions</h3>
      <hr></hr>
      <form className="onBoarding" onSubmit={saveData}>
        <label htmlFor="packCost">
          How much does a packet of cigarettes cost ?
        </label>
        <input
          type="number"
          name="packCost"
          id="packCost"
          onChange={(e) => setPackCost(e.target.value)}
          required
        />
        <label htmlFor="">How many cigarettes in a packet ?</label>
        <input
          type="number"
          name="cigarettesInPack"
          id="cigarettesInPack"
          onChange={(e) => setCigarettesInPack(e.target.value)}
          required
        />
        <label htmlFor="">How many you smoke each day ?</label>
        <input
          type="number"
          name="cigarettesInDay"
          id="cigarettesInDay"
          onChange={(e) => setCigarettesInDay(e.target.value)}
          required
        />
        <label htmlFor="">How many years have you been smoking ?</label>
        <input
          type="number"
          name="years"
          id="years"
          onChange={(e) => setYears(e.target.value)}
          required
        />
        <label htmlFor="">What is your currency ?</label>
        <input
          type="text"
          name="currency"
          id="currency"
          onChange={(e) => setCurrency(e.target.value)}
          required
        />
        <label htmlFor="">Quit Date</label>
        <input type="text" name="quitDate" id="quitDate" value={quitDate} />
        <input type="submit" value="Submit" className="onBoarding__submitBtn" />
      </form>
    </div>
  );
};

export default OnBoarding;
