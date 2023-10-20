import React from "react";

import "./index.css";

export default function SectionTitle(props) {
  return (
    <p className="section-title">
      {props.title}
    </p>
  );
}
