import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { authentication } from "../../App";

const Register = () => {
  const history = useHistory();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [firstNameError, setFirstNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [registerError, setRegisterError] = useState(false);

  const registerErrorMsg = "Email already in use, try login";

  const submitHandler = async (e) => {
    e.preventDefault();

    let isValid = false;
    isValid = validate(user);
    if (isValid) {
      try {
        const result = await axios.post(
          "http://localhost:3002/api/1.0/users/register",
          user,
        );
        localStorage.setItem("user", JSON.stringify(result.data.user));
        authentication.onAuthentication();
        history.push(`/onBoarding/${result.data.user.id}`);
      } catch (error) {
        if (error.response.status === 400) {
          setRegisterError(true);
        }
        console.log(error);
      }
    }
  };

  const validate = (user) => {
    setFirstNameError("");
    setEmailError("");
    setPasswordError("");
    setLastNameError("");
    setConfirmPasswordError("");

    // used regular expression for validation
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/;

    let validationError = false;

    if (user.firstName === "") {
      setFirstNameError("*Please Enter the firstName");
      validationError = true;
    } else if (user.firstName.length < 3) {
      setFirstNameError("*firstName must be of atleast 3 characters");
      validationError = true;
    }

    if (user.lastName === "") {
      setLastNameError("*Please Enter the lastName");
      validationError = true;
    } else if (user.lastName.length < 3) {
      setLastNameError("*lastName must be of atleast 3 characters");
      validationError = true;
    }

    if (!user.email.match(emailRegex)) {
      setEmailError("*Please Enter a valid Email");
      validationError = true;
    }

    if (!user.password.match(passwordRegex)) {
      setPasswordError(
        "*Password must be of lenght 8 and contain atleast one uppercase, a lowercase and a number",
      );
      validationError = true;
    }

    if (user.password !== user.confirmPassword) {
      setConfirmPasswordError(
        "*Password and confirm password fields must be same",
      );
      validationError = true;
    }

    if (validationError === true) {
      console.log("here here", validationError);
      return false;
    } else {
      return true;
    }
  };

  return (
    <form onSubmit={submitHandler} className="register" data-test="register">
      <div className="register__formInner">
        <h2>Register Here</h2>
        <div className="register__formGroup">
          <label htmlFor="firstName" className="register__label">
            First Name:
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            value={user.firstName}
            autoComplete="true"
            data-test="firstNameInput"
          />

          <p className="register__error" data-test="firstNameValidationError">
            {firstNameError}
          </p>
        </div>
        <div className="register__formGroup">
          <label htmlFor="lastName" className="register__label">
            Last Name:
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            value={user.lastName}
            autoComplete="true"
            data-test="lastNameInput"
          />
          <p className="register__error" data-test="lastNameValidationError">
            {lastNameError}
          </p>
        </div>
        <div className="register__formGroup">
          <label htmlFor="email" className="register__label">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            value={user.email}
            autoComplete="true"
            data-test="emailInput"
          />
          <p className="register__error" data-test="emailValidationError">
            {emailError}
          </p>
        </div>

        <div className="register__formGroup">
          <label htmlFor="password" className="register__label">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            value={user.password}
            data-test="passwordInput"
          />
          <p className="register__error" data-test="passwordValidationError">
            {passwordError}
          </p>
        </div>

        <div className="register__formGroup">
          <label htmlFor="confirmPassword" className="register__label">
            Confirm Password:
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            onChange={(e) =>
              setUser({ ...user, confirmPassword: e.target.value })
            }
            value={user.confirmPassword}
          />
          <p className="register__error">{confirmPasswordError}</p>
        </div>
        {registerError && <p className="register__error">{registerErrorMsg}</p>}
        <input
          className="register__submitButton"
          type="submit"
          value="Submit"
          data-test="submitInput"
        />
        <div>
          <p className="register__loginParagraph">
            Already have an account
            <span>
              <Link to="/"> Login</Link>
            </span>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Register;
