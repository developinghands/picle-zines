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
  function loadPost(postId) {
    setPost(postId);
  }
  return url ? (
    <div className="suggest" onClick={loadPost(id)}>
      <img src={image} />
      <p>{title}</p>
    </div>
  ) : (
    <div className="nothing">nothing</div>
  );
}
