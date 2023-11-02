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
import MoviesPage from "../pages/Movies";
import SavedMoviesPage from "../pages/SavedMovies";
import ProtectedRoute from "./ProtectedRoute";
import {useEffect, useState} from "react";
import {CurrentUserContext} from "../contexts/CurrentUser";
import axios from "axios";
import Token from "../utils/Token";
import AuthRoute from "./AuthRoute";

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  const [films, setFilms] = useState({
    data: null,
    error: "",
    loading: true
  });

  const [savedFilms, setSavedFilms] = useState({
    data: [],
    error: "",
    loading: true
  });

  const [render, setRender] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    init().catch(err => console.log(err));
  }, []);

  const init = async () => {
    getFilms().catch(err => console.log(err));

    await checkToken();
  };

  const checkToken = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setRender(true);
      return;
    }

    Token.set(token);

    try {
      const { data: user } = await axios.get("/users/me");
      setCurrentUser(user);

      await getSavedFilms();
    } catch (e) {
      console.log(e);
      Token.remove();
    }

    setRender(true);
  };

  const getFilms = async () => {
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
  };

  const getSavedFilms = async () => {
    try {
      const { data } = await axios.get("/movies");

      setSavedFilms({
        data,
        loading: false
      });
    } catch (e) {
      console.log(e);

      setSavedFilms({
        data: null,
        error: "Что-то пошло не так",
        loading: false
      });
    }
  };

  const onSignin = async () => {
    try {
      const { data: user } = await axios.get("/users/me");
      setCurrentUser(user);

      await getSavedFilms();

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

  const onFavorite = async (type, data, isFavorite) => {
    const newSavedFilms = { ...savedFilms };

    if (isFavorite) {
      newSavedFilms.data.push(data);
    } else {
      const findSavedIndex = type === "saved" ? (
        newSavedFilms.data.findIndex((item) => data._id === item._id)
      ) : newSavedFilms.data.findIndex((item) => data.id === item.movieId);
      const savedItem = savedFilms.data[findSavedIndex];

      try {
        await axios.delete("/movies/" + savedItem._id);
        newSavedFilms.data.splice(findSavedIndex, 1);
      } catch (e) {
        console.log(e);
      }

      console.log(newSavedFilms.data);
    }

    setSavedFilms(newSavedFilms);
  };

  const onSignout = () => {
    setCurrentUser(null);
  };

  if (!render) {
    return null;
  }

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
                <MoviesPage data={films} savedFilms={savedFilms} onFavorite={onFavorite} />
              </AuthorizedLayout>
            </ProtectedRoute>
          )}
        />
        <Route
          path="/saved-movies"
          element={(
            <ProtectedRoute isAuth={currentUser !== null}>
              <AuthorizedLayout>
                <SavedMoviesPage data={savedFilms} savedFilms={[]} onFavorite={onFavorite} />
              </AuthorizedLayout>
            </ProtectedRoute>
          )}
        />
        <Route
          path="/profile"
          element={(
            <ProtectedRoute isAuth={currentUser !== null}>
              <ProfileLayout>
                <ProfilePage onSave={onProfileSave} onSignout={onSignout} />
              </ProfileLayout>
            </ProtectedRoute>
          )}
        />
        <Route
          path="/signin"
          element={(
            <AuthRoute isAuth={currentUser !== null}>
              <EmptyLayout>
                <SigninPage onSignin={onSignin} />
              </EmptyLayout>
            </AuthRoute>
          )}
        />
        <Route
          path="/signup"
          element={(
            <AuthRoute isAuth={currentUser !== null}>
              <EmptyLayout>
                <SignupPage />
              </EmptyLayout>
            </AuthRoute>
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
