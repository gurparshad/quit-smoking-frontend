import React, { useEffect, useState } from "react";
import "./Profile.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { authentication } from "../../App";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const history = useHistory();

  const resetProgram = async (e) => {
    e.preventDefault();
    const newQuitDate =  new Date();
    const data = {
      quitDate: newQuitDate,
    };
    await axios.patch(
      `http://localhost:3002/api/1.0/userDetails/update/${userData.userId}`,
      data,
    );
    history.push(`/dashboard/${userData.userId}`);
  };

  const terminateProgram = async (e) => {
    e.preventDefault();
    await axios.delete(
      `http://localhost:3002/api/1.0/users/delete/${userData.userId}`,
    );
    localStorage.clear();
    authentication.onLogout();
    history.push("/register");
  };

  const getUserData = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    let userObj = {
      userId: user.id,
      userFirstName: user.firstName,
      userLastName: user.lastName,
      userEmail: user.email,
    };
    setUserData(userObj);
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div>
      <h3 className="profile__header">Profile</h3>
      <hr></hr>
      <div className="profile__dataItem">
        <p className="profile__dataItemSpan">First Name:</p>
        <p>{userData.userFirstName}</p>
      </div>
      <div className="profile__dataItem">
        <p className="profile__dataItemSpan">Last Name:</p>
        <p>{userData.userLastName}</p>
      </div>
      <div className="profile__dataItem">
        <p className="profile__dataItemSpan">Email:</p>
        <p>{userData.userEmail}</p>
      </div>
      <hr></hr>
      <div className="profile__options">
        <h5 className="profile__header">Oh! I smoked today</h5>
        <h6 className="profile__header">
          Its ok, mistakes happen. just press teh button below, you can start
          again
        </h6>
        <button className="profile__resetbtn" onClick={resetProgram}>
          Reset Program
        </button>
        <h5 className="profile__header">I Dont want to continue anymore</h5>
        <button className="profile__terminateBtn" onClick={terminateProgram}>
          Terminate Program
        </button>
      </div>
    </div>
  );
};

export default Profile;
