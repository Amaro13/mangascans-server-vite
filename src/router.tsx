import { Dispatch, SetStateAction, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./contexts/auth";
import Favorites from "./pages/favorites";
import Home from "./pages/home";
import Login from "./pages/login";
import SettingsGenres from "./pages/settingsgenres";
import SettingsMangas from "./pages/settingsmangas";

// interface RouterProps {
//   logged: boolean;
//   setLogged: Dispatch<SetStateAction<boolean>>;
// }

// const Router = ({ logged, setLogged }: RouterProps) => {
const Router = () => {
  const { logged } = useAuth();
  return (
    <Routes>
      {logged ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/settings/mangas" element={<SettingsMangas />} />
          <Route path="/settings/genres" element={<SettingsGenres />} />
          <Route path="/settings/users" element={<SettingsMangas />} />
          <Route path="/favorites" element={<Favorites />} />
        </>
      ) : (
        <Route path="/login" element={<Login />} />
      )}
      <Route
        path="*"
        element={<Navigate to={logged ? "/" : "login"} replace />}
      />
    </Routes>
  );
};

export default Router;
