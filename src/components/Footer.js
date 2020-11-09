import React, { useState } from "react";
import "./Footer.css";
import storage from "../firebase";

export default function Footer() {
  const [image, setImage] = useState("");
  storage
    .ref()
    .child("footer.png")
    .getDownloadURL()
    .then(url => {
      setImage(url);
    });
  return (
    <div className="footer">
      <p>Contact : dummy@gmail.com</p>
      <p className="footer_social">Follow us</p>
    </div>
  );
}
