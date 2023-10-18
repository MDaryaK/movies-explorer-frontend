import { Route, Routes } from "react-router-dom";
import { FilmsData } from "../data/films";

import Account from "../pages/account";
import Landing from "../pages/Landing";
import Auth from "../pages/(auth)/auth";
import NotFoundPage from "../pages/404";
import Register from "../pages/(auth)/register";
import FilmsLayout from "./FilmsLayout";

import "../index.css";
import MainLayout from "../layouts/Main";

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
          <MainLayout>
            <FilmsLayout filmsList={films} />
          </MainLayout>
        )}
      />
      <Route
        path="/saved-movies"
        element={(
          <MainLayout>
            <FilmsLayout filmsList={films} />
          </MainLayout>
        )}
      />
      <Route
        path="/profile"
        element={(
          <MainLayout>
            <Account />
          </MainLayout>
        )}
      />
      <Route path="/signin" element={ <Auth /> } />
      <Route path="/signup" element={ <Register /> } />
      <Route path="*" element={ <NotFoundPage /> } />
    </Routes>
  );
}

export default App;
