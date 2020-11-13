import React, { useState, useEffect } from "react";
import "./Discover.css";
import { db } from "../firebase";

export default function Discover() {
  const [list, setList] = useState([]);
  useEffect(() => {
    db.collection("discover")
      .orderBy("category")
      .get()
      .then(snap =>
        setList(
          snap.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          }))
        )
      );
  });
  return (
    <div className="discover">
      {list.map(item => (
        <p className="block" key={item.id}>{item.data.category}</p>
      ))}
    </div>
  );
}
