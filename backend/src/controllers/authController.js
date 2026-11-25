const bcrypt = require("bcryptjs");
const db = require("../config/db");

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password || password.length < 6) {
    return res.status(400).json({ message: "Informe nome, e-mail e senha (mínimo 6 caracteres)." });
  }

  const [exists] = await db.query("SELECT id FROM usuarios WHERE email = ?", [email]);
  if (exists.length > 0) {
    return res.status(409).json({ message: "E-mail já cadastrado." });
  }

  const hash = await bcrypt.hash(password, 10);
  const [result] = await db.query(
    "INSERT INTO usuarios (nome, email, senha_hash) VALUES (?, ?, ?)",
    [name, email, hash],
  );
  res.status(201).json({ id: result.insertId, name, email });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const [rows] = await db.query("SELECT * FROM usuarios WHERE email = ?", [email]);
  const user = rows[0];
  if (!user || !(await bcrypt.compare(password || "", user.senha_hash))) {
    return res.status(401).json({ message: "E-mail ou senha inválidos." });
  }
  res.json({ id: user.id, name: user.nome, email: user.email });
};
