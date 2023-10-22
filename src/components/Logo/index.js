import {useNavigate} from "react-router-dom";
import logo from "../../images/logo.svg";

import "./index.css";

export default function Logo() {
  const navigate = useNavigate();

  return (
    <img
      className="logo"
      src={logo}
      alt="site logo"
      onClick={() => navigate("/")}
    />
  );
}
