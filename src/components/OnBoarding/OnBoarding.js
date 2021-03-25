import React, { useState } from "react";
import "./OnBoarding.css";
import moment from "moment";

const OnBoarding = () => {
  const [cigarettesInPack, setCigarettesInPack] = useState();
  const [packCost, setPackCost] = useState();
  const [cigarettesInDay, setCigarettesInDay] = useState();
  const [years, setYears] = useState();
  const [currency, setCurrency] = useState();
  const [quitDate, setQuitDate] = useState();

  const saveData = () => {};

  return (
    <form className="onBoarding" onSubmit={saveData}>
      <label htmlFor="packCost">
        How much does a packet of cigarettes cost ?
      </label>
      <input type="text" name="packCost" id="packCost" />
      <label htmlFor="">How many cigarettes in a packet ?</label>
      <input type="text" name="cigarettesInPack" id="cigarettesInPack" />
      <label htmlFor="">How many you smoke each day ?</label>
      <input type="text" name="cigarettesInDay" id="cigarettesInDay" />
      <label htmlFor="">How many years have you been smoking ?</label>
      <input type="text" name="years" id="years" />
      <label htmlFor="">What is your currency ?</label>
      <input type="text" name="currency" id="currency" />
      <label htmlFor="">Quit Date</label>
      <input
        type="text"
        name="quitDate"
        id="quitDate"
        value={moment(new Date()).format("YYYY-MM-DD")}
      />
      <input type="submit" value="Submit" className="onBoarding__submitBtn" />
    </form>
  );
};

export default OnBoarding;
