import React, { useState } from "react";
import axios from "axios";
import "./OtpGenerator.css";
import { Alert } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

export default function OtpGnerator() {
  const [number, setNumber] = useState(" ");
  const [error, setError] = useState(" ");
  const [successMessage, setSuccessMessage] = useState(" ");

  function getMobileNum(e) {
    setNumber(e.target.value);
  }
  function getOtp(e) {
    e.preventDefault();

    // Validate mobile number
    const numberRegex = /^[6-9]\d{9}$/;
    if (!numberRegex.test(number)) {
      setError(
        <Alert variant="filled" severity="error">
          Please Enter Valid mobile no !!!
        </Alert>
      );
      setTimeout(() => {
        setError("");
      }, 2000); // clear error message after 2 seconds

      return;
    }

    axios
      .post("https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP", {
        mobile: number,
      })
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          setNumber("");
          setSuccessMessage(
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
              Otp Sent Successfully !
            </Alert>
          );
          setTimeout(() => {
            setError("");
          }, 2000);
        } else {
          throw new Error("Failed to generate OTP.");
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return (
    <>
      <h1>{error}</h1>
      <h1>{successMessage}</h1>
      <div className="wrapper">
        <input type="tel" value={number} onChange={getMobileNum} />
        <button onClick={getOtp}>Get Otp</button>
      </div>
           
    </>
  );
}
