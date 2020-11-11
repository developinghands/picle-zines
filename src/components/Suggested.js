import React, { useState, useEffect } from "react";
import "./Suggested.css";
import storage from "../firebase";

export default function Suggested({ url, title }) {
  const [image, setImage] = useState("");
  useEffect(() => {
    if (url) {
      storage
        .ref()
        .child(`${url}`)
        .getDownloadURL()
        .then(image => {
          setImage(image);
          console.log(image);
        });
    }
  }, [url]);
  return (
    <div className="suggest">
      <img src={image} />
      <p>{title}</p>
    </div>
  );
}
