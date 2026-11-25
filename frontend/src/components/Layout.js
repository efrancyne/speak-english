import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ user, onLogout }) {
  return (
    <div className="app-shell">
      <Navbar user={user} onLogout={onLogout} />
      <div className="app-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
