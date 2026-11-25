import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa";
import { register } from "../services/api";

function Register({ onLogin }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await register(form.name, form.email, form.password);
      onLogin(user);
      navigate("/niveis");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="page form-page">
      <h1 className="title">Criar conta</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Nome
          <input type="text" name="name" required value={form.name} onChange={handleChange} />
        </label>
        <label>
          E-mail
          <input type="email" name="email" required value={form.email} onChange={handleChange} />
        </label>
        <label>
          Senha (mínimo 6 caracteres)
          <input
            type="password"
            name="password"
            minLength={6}
            required
            value={form.password}
            onChange={handleChange}
          />
        </label>
        {error && <p className="error">{error}</p>}
        <button type="submit" className="btn btn-primary">
          <FaUserPlus /> Cadastrar
        </button>
      </form>
      <p className="form-link">
        Já tem conta? <Link to="/login">Entrar</Link>
      </p>
    </main>
  );
}

export default Register;
