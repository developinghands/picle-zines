import React, { useState, useEffect } from "react";
import "./style.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Discover from "./components/Discover";
import Footer from "./components/Footer";

export default function App() {
  const [feed, setFeed] = useState(false);
  const changeView = load => {
    if (!load) {
      setFeed(false);
    } else {
      setFeed(true);
    }
  };
  return (
    <div className="app_body">
      <Header change={changeView} />
      {feed ? <Body /> : <Discover />}
      <Footer />
    </div>
  );
}
