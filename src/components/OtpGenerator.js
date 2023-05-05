import React, { useState } from "react";
import "./OtpGenerator.css";
export default function OtpGenerator() {
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function getNo(e) {
    setNumber(e.target.value);
  }

  function getOtp() {
    const NoRegex = /^[6-9]\d{9}$/;
    if (!NoRegex.test(number)) {
      setError("Please Enter Valid Number");
      setSuccess("");
    } else {
      const url = "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP";
      const option = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobile: number }),
      };
      fetch(url, option)
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            setNumber("");
            setSuccess("OTP sent successfully.");
            setError("");
          } else {
            throw new Error("Failed to generate OTP.");
          }
          return response.json();
        })
        .then((data) => console.log(data))
        .catch((error) => {
          setError(error.message);
          setSuccess("");
        });
    }
  }

  return (
    <div>
      <h1>{success}</h1>
      <h1>{error}</h1>
      <input
        type="tel"
        placeholder="Enter no to send otp"
        value={number}
        onChange={getNo}
      />
      <button onClick={getOtp}>Get OTP</button>
    </div>
  );
}
