import React, { useState, useEffect } from "react";
import Post from "./Post";
import { db } from "../firebase";
import Suggested from "./Suggested";

export default function Body() {
  const [suggest, setSuggest] = useState([]);
  const [newPost, setNewPost] = useState([]);
  useEffect(() => {
    console.log("Body.js called")
    db.collection("news")
      .get()
      .then(snapshot =>
        setSuggest(
          snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          }))
        )
      )
      .catch(error => {
        console.error("Error: ", error);
      });
  }, []);
  const setPost = postId => {
    console.log("Recieved new Post Data...");
    suggest.map(post => {
      if (post.id == postId) {
        setNewPost(post);
        console.log("New Post State Updated...", newPost);
      }
    });
  };
  return (
    <div className="body">
      <div className="post">
        <Post id={newPost} />
      </div>
      <h3>Related articles</h3>
      {suggest.map(post => (
        <Suggested
          key={post.id}
          id={post.id}
          title={post.data.title}
          url={post.data.image}
          setPost={setPost}
        />
      ))}
    </div>
  );
}
