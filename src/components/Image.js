import React, { useEffect, useState } from "react";
import "./Image.css";
export default function Image() {
  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT_JP7BYDMU2u2-Z35r6DStWXCl8rNUW1W-cugS2m6&s"
  );
  const [error, setError] = useState();

  async function getImage() {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();

      setImage(data.message);
    } catch (error) {
      setError(`Something Wrong ${error.message}`);
    }
  }

  useEffect(() => {
    getImage();
  },[]);

  return (
    <div>
      <img src={image} alt="Dog Image" />
      <h1>{error}</h1>
    </div>
  );
}
