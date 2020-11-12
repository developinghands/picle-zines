import React, { useState, useEffect } from "react";
import Post from "./Post";
import { db } from "../firebase";
import Suggested from "./Suggested";

export default function Body() {
  const [suggest, setSuggest] = useState([]);
  const [newPost, setNewPost] = useState("");
  useEffect(() => {
    console.log("Body.js called");                              //body.js calling
    db.collection("news")                                       //firebase collection
      .get()
      .then(snapshot =>
        setSuggest(                                             //set suggest
          snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          }))
        )
      )
      .catch(error => {
        console.error("Error: ", error);                        //error
      });
  }, []);
  const setPost = (postId) => {
    console.log("Recieved new Post Data...");                   //console
    suggest.map(post => {
      if (post.id == postId) {
        setNewPost(postId);
        console.log("New Post State Updated...", newPost);      //console
      }
    });
  };
  return newPost ? (
    (console.log(newPost),
    (
      <div className="body">
        <div className="post">
          <Post id={newPost}/>
        </div> 
        <h3>Related articles</h3>
        {console.log(suggest)}
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
    ))
  ) : (
    <div className="body">
      <div className="post">{/*<Post id={newPost} />*/}</div>
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
