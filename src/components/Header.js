import React, { useState } from "react";
import "./Header.css";
import storage from "../firebase";

export default function Header() {
  const [url, seturl] = useState("");
  storage
    .ref()
    .child("picle.png")
    .getDownloadURL()
    .then(url => {
      seturl(url);
    });

  return (
    <div className="header">
      <div className="header_logo">
        {" "}
        {/*logo*/}
        <img src={url} />
      </div>
      <div className="header_nav">
        <h3 className={`${true && "active"}`}>Feed</h3>

        <h3 className={`${false && "active"}`}>Discover</h3>
      </div>
    </div>
  );
}
