import React, { useState, useEffect } from "react";
import "./Footer.css";
import storage from "../firebase";

export default function Footer() {
  const [insta, setInsta] = useState("");
  const [facebook, setFacebook] = useState("");
  useEffect(() => {
    storage
      .ref()
      .child("instagram.png")
      .getDownloadURL()
      .then(url => {
        setInsta(url);
      });
    storage
      .ref()
      .child("facebook.png")
      .getDownloadURL()
      .then(url => {
        setFacebook(url);
      });    
  });
  const takeMeToInsta = () => {
    window.location.href = "https://instagram.com/ig.nikhil.mishra";
  };
  return (
    <div className="footer">
      <img src={insta} onClick={takeMeToInsta} />
      <img src={facebook} onClick={takeMeToInsta} />
    </div>
  );
}
