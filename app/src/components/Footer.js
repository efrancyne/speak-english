import "./footer.css";
import logo from "../assets/logo.png";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img className="logo" src={logo} alt="Logo"/>
        <p>&copy; 2026. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}


export default Footer;