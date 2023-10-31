import {Navigate} from "react-router-dom";

export default function ProtectedRoute({ isAuth = false, children }) {
  if (!isAuth) {
    return <Navigate to="/signin" />;
  }

  return children;
}
