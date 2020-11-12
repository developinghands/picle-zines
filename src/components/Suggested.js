import React, { useState, useEffect } from "react";
import "./Suggested.css";
import storage from "../firebase";

export default function Suggested({ id, url, title, setPost }) {
  const [image, setImage] = useState("");
  // const [post, setPost] = useState([]);
  if (url) {
    storage
      .ref()
      .child(`${url}`)
      .getDownloadURL()
      .then(image => {
        setImage(image);
      });
  }
  const loadPost = () => {
    console.log("Suggested Article Clicked");
    setPost(id);
  };
  return url ? (
    <button className="suggest" onClick={loadPost}>
      <img src={image} />
      <p>{title}</p>
    </button>
  ) : (
    <div className="nothing">nothing</div>
  );
}
