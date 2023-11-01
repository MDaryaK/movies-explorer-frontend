import {Navigate} from "react-router-dom";

export default function AuthRoute({ isAuth = false, children }) {
  if (isAuth) {
    return <Navigate to="/profile" />;
  }

  return children;
}
