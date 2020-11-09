import React from "react";
import "./Post.css";

export default function Body() {
  return (
    <div className="post_box">
      <div className="post_header">
        <h3>Post Title</h3>
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
