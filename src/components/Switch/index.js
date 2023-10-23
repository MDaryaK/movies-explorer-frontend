import "./index.css";
import {useState} from "react";

export default function Switch({ caption }) {
  const [checked, setChecked] = useState(false);

  return (
    <label className="switch" onClick={() => setChecked(!checked)}>
      <span className={`switch__controller ${checked ? "switch__controller-checked" : ""}`} />
      <span className="switch__caption">{caption}</span>
    </label>
  )
}
