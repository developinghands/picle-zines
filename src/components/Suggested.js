import React from "react";

export default function Suggested({ url, title }) {
  return (
    <div className="suggest">
      <img src={url} />
      <p>{title}</p>
    </div>
  );
}
