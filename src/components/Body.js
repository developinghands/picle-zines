import React, { useState, useEffect } from "react";
import Post from "./Post";
import { db } from "../firebase";
import Suggested from "./Suggested";

export default function Body() {
  const [suggest, setSuggest] = useState([]);
  useEffect(() => {
    db.collection("news").onSnapshot(snapshot =>
      setSuggest(
        snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        }))
      )
    );
  }, []);

  return (
    <div className="body">
      <div className="post">
        <Post />
      </div>
      {suggest.map(post => (
        <Suggested key={post.id} title={post.data.title} url={post.data.image}/>
      ))}
    </div>
  );
}
