import { Route, Routes } from "react-router-dom";
import { FilmsData } from "../data/films";

import Account from "../pages/account";
import Landing from "../pages/landing";
import Auth from "../pages/(auth)/auth";
import NotFoundPage from "../pages/404";
import Register from "../pages/(auth)/register";
import FilmsLayout from "./FilmsLayout";

import "../index.css";

const films = FilmsData;

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Landing /> } />
      <Route path="/movies" element={ <FilmsLayout filmsList={films} /> } />
      <Route path="/saved-movies" element={ <FilmsLayout filmsList={films} /> } />
      <Route path="/profile" element={ <Account /> } />
      <Route path="/signin" element={ <Auth /> } />
      <Route path="/signup" element={ <Register /> } />
      <Route path="*" element={ <NotFoundPage /> } />
    </Routes>
  );
}

export default App;
