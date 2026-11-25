import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { login } from "../services/api";

function Login({ onLogin }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await login(form.email, form.password);
      onLogin(user);
      navigate("/niveis");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="page form-page">
      <h1 className="title">Entrar</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          E-mail
          <input type="email" name="email" required value={form.email} onChange={handleChange} />
        </label>
        <label>
          Senha
          <input
            type="password"
            name="password"
            required
            value={form.password}
            onChange={handleChange}
          />
        </label>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="btn btn-primary">
          <FaSignInAlt /> Entrar
        </button>
      </form>
      <p className="form-link">
        Não tem conta? <Link to="/cadastro">Cadastre-se</Link>
      </p>
    </main>
  );
}

export default Login;
