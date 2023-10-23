import { Route, Routes } from "react-router-dom";
import { FilmsData } from "../data/films";

import Account from "../pages/account";
import Landing from "../pages/Landing";
import NotFoundPage from "../pages/404";
import FilmsLayout from "./FilmsLayout";

import "../index.css";
import MainLayout from "../layouts/Main";
import ProfileLayout from "../layouts/Profile";
import AuthorizedLayout from "../layouts/Authorized";
import EmptyLayout from "../layouts/Empty";
import SignupPage from "../pages/signup";
import SigninPage from "../pages/signin";

const films = FilmsData;

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
            <FilmsLayout filmsList={films} />
          </AuthorizedLayout>
        )}
      />
      <Route
        path="/saved-movies"
        element={(
          <AuthorizedLayout>
            <FilmsLayout filmsList={films} />
          </AuthorizedLayout>
        )}
      />
      <Route
        path="/profile"
        element={(
          <ProfileLayout>
            <Account />
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
