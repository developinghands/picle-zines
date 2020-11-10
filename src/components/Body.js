import React, { useState, useEffect } from "react";
import Post from "./Post";
import { db } from "../firebase";

export default function Body() {
  const [url, setURL] = useState([]);
  const news = db.collection("news").docs;

  news.map(doc => ({
    setURL(
      url: news.data()
    )}))

  return (
    <div className="body">
      <div className="post">
        <Post />
      </div>
    </div>
  );
}
