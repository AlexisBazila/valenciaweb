import React from "react";
import "./CenterAlignedParagraph.css";

const CenterAlignedParagraph = ({ subTtitle, paragraphs = [] }) => {
  return (
    <div className="CenterAlignedParagraph">
      <h2>{subTtitle}</h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default CenterAlignedParagraph;
