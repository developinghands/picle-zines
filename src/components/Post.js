import React, { useState, useEffect } from "react";
import "./Post.css";
import { db } from "../firebase";

export default function Body({ post }) {
  const [data, setData] = useState("");

  useEffect(() => {
    console.log("Post.js Called");
    if (post) {
      db.collection("news")
        .where("__name__", "==", "u8AtExHub9H2A3jye2td")
        .get()
        .then(snap => {
          setData(
            snap.docs.map(doc => ({
              id: doc.id,
              data: doc.data()
            }))
          );
        });
    } else {
      console.log("No Post Data Found, loading dummy data... ");
    }
  }, []);
  return (
    <div className="post_box">
      <div className="post_header">
        <h3>{post ? post.data.title : "Dummy Title"}</h3>
        <p>
          Author : Nikhil Mishra <span className="date">| 08-Nov-2020</span>
        </p>
      </div>
      <div className="post_body">
        <img src="https://ik.imagekit.io/demo/default-image.jpg" />
        <p className="post_message">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
    </div>
  );
}
