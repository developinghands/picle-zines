import React, { useState, useEffect } from "react";
import "./Discover.css";
import { db } from "../firebase";
import Suggested from "./Suggested";
import Post from "./Post";

export default function Discover() {
  const [list, setList] = useState([]);
  const [show, setShow] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [post, loadPost] = useState("");
  useEffect(() => {
    db.collection("discover")
      .orderBy("category")
      .onSnapshot(snap =>
        setList(
          snap.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          }))
        )
      );
  }, []);
  const openList = category => {
    setShow(true); // show category related posts
    console.log("openList called with ", category);
    db.collection("news")
      .where("category", "==", `${category}`)
      .get()
      .then(snap =>
        setCategoryList(
          snap.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          }))
        )
      )
      .catch(error => console.error(error));
    console.log("Data Stored", categoryList);
  };
  const setPost = postId => {
    console.log("Recieved new Post Data..."); //console
    categoryList.map(post => {
      if (post.id == postId) {
        setNewPost(postId);
        console.log("New Post State Updated...", newPost); //console
      }
    });
  };
  return (
    <div className="discover">
      {!show ? (
        list.map(item => (
          <p
            className="block"
            key={item.id}
            onClick={() => {
              openList(item.data.category);
            }}
          >
            {item.data.category}
          </p>
        ))
      ) : !newPost ? (
        categoryList.map(post => (
          <div className="suggestedBlock">
          <Suggested
            key={post.id}
            id={post.id}
            title={post.data.title}
            url={post.data.image}
            setPost={setPost}
          />
          </div>
        ))
      ) : <div className="post"><Post key={newPost} id={newPost}/></div>
      }
    </div>
  );
}
