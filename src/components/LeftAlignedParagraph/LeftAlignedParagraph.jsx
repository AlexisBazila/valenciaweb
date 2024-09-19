import React from "react";
import "./LeftAlignedParagraph.css";

const LeftAlignedParagraph = ({ subTtitle, paragraphs = [] }) => {
  return (
    <div className="LeftAlignedParagraph">
      <h2>{subTtitle}</h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default LeftAlignedParagraph;
