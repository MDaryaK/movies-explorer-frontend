import { Route, Routes } from "react-router-dom";
import { FilmsData } from "../data/films";

import Account from "../pages/account";
import Landing from "../pages/Landing";
import Auth from "../pages/auth";
import NotFoundPage from "../pages/404";
import Register from "../pages/signin";
import FilmsLayout from "./FilmsLayout";

import "../index.css";
import MainLayout from "../layouts/Main";
import ProfileLayout from "../layouts/Profile";
import AuthorizedLayout from "../layouts/Authorized";

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
      <Route path="/signin" element={ <Register /> } />
      <Route path="/signup" element={ <Auth /> } />
      <Route path="*" element={ <NotFoundPage /> } />
    </Routes>
  );
}

export default App;
