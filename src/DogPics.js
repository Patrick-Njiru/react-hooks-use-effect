import React, { useState, useEffect } from "react";

// WARNING: this useEffect will run in an infinite loop!
// to fix, pass an empty array as the second argument for useEffect
function DogPics() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((r) => r.json())
      .then((data) => {
        console.log("setState");
        setImages(data.message);
      });
  }, []);

  console.log("render");

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      marginTop: "10px"
      }}
      >
      {images.map((image) => (
        <img 
        src={image} key={image} 
        alt="Random Dog" 
        style={{
          display: "block",
          width: "50vw",
          marginTop: "20px"
         }}
         />
      ))}
    </div>
  )
}

export default DogPics;
