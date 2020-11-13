import React, { useState, useEffect } from "react";
import "./Header.css";
import storage from "../firebase";

export default function Header({change}) {
  const [url, seturl] = useState("");
  const [activeFeed, setFeed] = useState("active");
  const [activeDisc, setDisc] = useState();
  useEffect(() => {
    storage
      .ref()
      .child("picle.png")
      .getDownloadURL()
      .then(url => {
        seturl(url);
      });
  }, []);
    const handleClick = what => {
      if(what == "feed"){
        setFeed("active")
        setDisc(null)
        change(true)
      }else{
        setFeed(null)
        setDisc("active")
        change(false)
      }
    }
  return (
    <div className="header">
      <div className="header_logo">
        {" "}
        {/*logo*/}
        <img src={url} />
      </div>
      <div className="header_nav">
        <h3 className={activeFeed} onClick={() => handleClick("feed")}>
          Feed 
        </h3>
        <h3 className={activeDisc} onClick={() => handleClick("discover")}>Discover</h3>
      </div>
    </div>
  );
}
