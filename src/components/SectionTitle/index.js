import React from "react";

import "./index.css";

export default function SectionTitle(props) {
  return (
    <div className="sectionTitle">
      <p>
        {props.title}
      </p>
    </div>
  );
}