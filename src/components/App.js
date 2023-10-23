import { Route, Routes } from "react-router-dom";

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

function App() {
  return (
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
          <AuthorizedLayout>
            <MoviesPage />
          </AuthorizedLayout>
        )}
      />
      <Route
        path="/saved-movies"
        element={(
          <AuthorizedLayout>
            <SavedMoviesPage />
          </AuthorizedLayout>
        )}
      />
      <Route
        path="/profile"
        element={(
          <ProfileLayout>
            <ProfilePage />
          </ProfileLayout>
        )}
      />
      <Route
        path="/signin"
        element={(
          <EmptyLayout>
            <SigninPage />
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
  );
}

export default App;
