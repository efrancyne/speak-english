import "./App.css";
import "./pages/pages.css";
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import LevelsPage from "./pages/LevelsPage";
import LevelPage from "./pages/LevelPage";
import MyStudy from "./pages/MyStudy";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

function App() {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")));

  const handleLogin = (loggedUser) => {
    localStorage.setItem("user", JSON.stringify(loggedUser));
    setUser(loggedUser);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <Routes>
      <Route element={<Layout user={user} onLogout={handleLogout} />}>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/niveis" element={user ? <LevelsPage /> : <Navigate to="/login" replace />} />
        <Route
          path="/niveis/:code"
          element={user ? <LevelPage user={user} /> : <Navigate to="/login" replace />}
        />
        <Route path="/meus-estudos" element={<MyStudy user={user} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/cadastro" element={<Register onLogin={handleLogin} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
