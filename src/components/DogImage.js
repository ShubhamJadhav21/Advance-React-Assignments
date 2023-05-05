import React, { useState, useEffect } from "react";
import axios from "axios";
export default function DogImage() {
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);

  async function fetchImage() {
    try {
      const res = await axios.get("https://dog.ceo/api/breeds/image/random");
      setImage(res.data.message);
    } catch (error) {
      setError(`Sorry, there was an error: ${error.message}`);
    }
  }

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div>
      <img src={image} alt="Dog Image" />
      <h1>{error}</h1>
    </div>
  );
}

