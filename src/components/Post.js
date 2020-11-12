import React, { useState, useEffect } from "react";
import "./Post.css";
import storage, { db } from "../firebase";

export default function Post({ id }) {
  const [data, setData] = useState([]);
  const [image, setImage] = useState([]);
  useEffect(() => {
    console.log("Post.js Called");
    if (id) {
      db.collection("news")
        .where("__name__", "==", id)
        .get()
        .then(snap => {
          setData(
            snap.docs.map(doc => ({
              id: doc.id,
              data: doc.data()
            }))
          );
        })
        .catch(error => console.error("Error: ", error));
    } else {
      console.log("No Post Data Found, loading dummy data... ");
    }
  }, []);

  return (
    <div className="post_box">
      <div className="post_header">
        {data.map(doc => (
          <h3>{doc.data.title}</h3>
        ))}
        {data.map(doc => (
          <p>
            Author : {doc.data.author}{" "}
            <span className="date">| {doc.data.date}</span>
          </p>
        ))}
      </div>
      <div className="post_body">
        {data.map(doc => {
          storage
            .ref()
            .child(`${doc.data.image}`)
            .getDownloadURL()
            .then(snap => setImage(snap))
            .catch(error => console.error("Error: ", error));
        })}
        <img src={image} />

        {console.log(image)}
        {data.map(doc => (
          <p className="post_message">{doc.data.article}</p>
        ))}
      </div>
    </div>
  );
}
