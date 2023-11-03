import axios from "axios";

export default class Token {

  static set(token) {
    axios.defaults.headers["authorization"] = `Bearer ${token}`;
    localStorage.setItem("token", token);
  }

  static remove() {
    delete axios.defaults.headers["authorization"];
    localStorage.removeItem("token");
  }

}
