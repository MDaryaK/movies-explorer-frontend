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
import {useAsyncEffect} from "../hooks/useAsyncEffect";
import Token from "../utils/Token";
import {FilmsContext} from "../contexts/Films";

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [films, setFilms] = useState({
    data: null,
    error: "",
    loading: true
  });

  const [render, setRender] = useState(false);

  const navigate = useNavigate();

  // Get films
  useAsyncEffect(async () => {
    try {
      const { data } = await axios.get("https://api.nomoreparties.co/beatfilm-movies");

      setFilms({
        data,
        loading: false
      });
    } catch (e) {
      console.log(e);

      setFilms({
        data: null,
        error: "Что-то пошло не так",
        loading: false
      });
    }
  }, []);

  // Check token
  useAsyncEffect(async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setRender(true);
      return;
    }

    Token.set(token);

    try {
      const { data: user } = await axios.get("/users/me");
      setCurrentUser(user);
    } catch (e) {
      console.log(e);
      Token.remove();
    }

    setRender(true);
  }, []);

  const onSignin = async () => {
    try {
      const { data: user } = await axios.get("/users/me");
      setCurrentUser(user);

      navigate("/profile");
    } catch (e) {
      console.log(e);
    }
  };

  const onProfileSave = (user) => {
    setCurrentUser({
      ...currentUser,
      ...user
    });
  };

  if (!render) {
    return null;
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <FilmsContext.Provider value={films}>
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
                  <ProfilePage onSave={onProfileSave} />
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
                <SignupPage />
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
      </FilmsContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
