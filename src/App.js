import React, { useState, useEffect } from "react";
import "./style.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app_body">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}