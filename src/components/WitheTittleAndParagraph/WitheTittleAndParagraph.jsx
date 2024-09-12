import React from "react";
import "./WitheTittleAndParagraph.css";

const WitheTittleAndParagraph = ({ tittle, text }) => {
  return (
    <div className="WitheTittleAndParagraph">
      <h2>{tittle}</h2>
      <p>{text}</p>
    </div>
  );
};

export default WitheTittleAndParagraph;
