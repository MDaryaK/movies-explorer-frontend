import "./index.css";
import {useState} from "react";

export default function Switch({ caption, checked, onClick }) {
  return (
    <label className="switch" onClick={onClick}>
      <span className={`switch__controller ${checked ? "switch__controller-checked" : ""}`} />
      <span className="switch__caption">{caption}</span>
    </label>
  )
}
