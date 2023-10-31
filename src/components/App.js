import {Route, Routes, useNavigate} from "react-router-dom";

import Landing from "../pages/Landing";
import NotFoundPage from "../pages/404";

import "../index.css";
import MainLayout from "../layouts/Main";
import ProfileLayout from "../layouts/Profile";
import AuthorizedLayout from "../layouts/Authorized";
import EmptyLayout from "../layouts/Empty";
import SignupPage from "../pages/signup";
import SigninPage from "../pages/signin";
import ProfilePage from "../pages/profile";
import MoviesPage from "../pages/movies";
import SavedMoviesPage from "../pages/saved-movies";
import ProtectedRoute from "./ProtectedRoute";
import {useState} from "react";
import {CurrentUserContext} from "../contexts/CurrentUser";
import axios from "axios";

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate();

  const onSignup = async (values) => {
    try {
      await axios.post("/signup", values);
      navigate("/signin");
    } catch (e) {
      console.log(e);
    }
  };

  const onSignin = async (values) => {
    try {
      const { data: { token } } = await axios.post("/signin", values);

      axios.defaults.headers["authorization"] = `Bearer ${token}`;
      localStorage.setItem("token", token);

      const { data: user } = await axios.get("/users/me");
      setCurrentUser(user);

      navigate("/profile");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route
          path="/"
          element={(
            <MainLayout>
              <Landing />
            </MainLayout>
          )}
        />
        <Route
          path="/movies"
          element={(
            <ProtectedRoute isAuth={currentUser !== null}>
              <AuthorizedLayout>
                <MoviesPage />
              </AuthorizedLayout>
            </ProtectedRoute>
          )}
        />
        <Route
          path="/saved-movies"
          element={(
            <ProtectedRoute isAuth={currentUser !== null}>
              <AuthorizedLayout>
                <SavedMoviesPage />
              </AuthorizedLayout>
            </ProtectedRoute>
          )}
        />
        <Route
          path="/profile"
          element={(
            <ProtectedRoute isAuth={currentUser !== null}>
              <ProfileLayout>
                <ProfilePage />
              </ProfileLayout>
            </ProtectedRoute>
          )}
        />
        <Route
          path="/signin"
          element={(
            <EmptyLayout>
              <SigninPage onSignin={onSignin} />
            </EmptyLayout>
          )}
        />
        <Route
          path="/signup"
          element={(
            <EmptyLayout>
              <SignupPage onSignup={onSignup} />
            </EmptyLayout>
          )}
        />
        <Route
          path="*"
          element={(
            <EmptyLayout>
              <NotFoundPage />
            </EmptyLayout>
          )}
        />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
