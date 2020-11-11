import React, { useState, useEffect } from "react";
import Post from "./Post";
import { db } from "../firebase";
import Suggested from "./Suggested";

export default function Body() {
  const [suggest, setSuggest] = useState([]);
  const [newPost, setNewPost] = useState("");
  useEffect(() => {
    db.collection("news").get().then(snapshot =>
      setSuggest(
        snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        }))
      )
    );
  }, []);
  function setPost(postId) {
    setNewPost(postId);
  }
  return (
    <div className="body">
      <div className="post">
        <Post id={newPost}/>
      </div>
      <h3>Related articles</h3>
      {/*suggest.map(post => (
        <Suggested
          key={post.id}
          id={post.id}
          title={post.data.title}
          url={post.data.image}
          setPost={setPost}
        />
      ))*/}
    </div>
  );
}
