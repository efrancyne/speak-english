const db = require("../config/db");

const STATUSES = ["preciso_estudar", "dominado"];

exports.list = async (req, res) => {
  const [rows] = await db.query(
    "SELECT assunto_id AS contentId, status FROM progresso WHERE usuario_id = ?",
    [req.params.userId],
  );
  res.json(rows);
};

exports.listContents = async (req, res) => {
  const [rows] = await db.query(
    `SELECT a.id, a.titulo AS title, a.significado AS meaning, a.exemplo AS example,
            n.codigo AS level, c.nome AS typeName, p.status
       FROM progresso p
       JOIN assuntos a ON a.id = p.assunto_id
       JOIN niveis n ON n.id = a.nivel_id
       JOIN categorias c ON c.id = a.categoria_id
      WHERE p.usuario_id = ?
      ORDER BY a.id`,
    [req.params.userId],
  );
  res.json(rows);
};

exports.save = async (req, res) => {
  const { userId, contentId, status } = req.body;
  if (!STATUSES.includes(status)) {
    return res.status(400).json({ message: "Status inválido." });
  }
  await db.query("REPLACE INTO progresso (usuario_id, assunto_id, status) VALUES (?, ?, ?)", [
    userId,
    contentId,
    status,
  ]);
  res.status(204).end();
};

exports.remove = async (req, res) => {
  await db.query("DELETE FROM progresso WHERE usuario_id = ? AND assunto_id = ?", [
    req.params.userId,
    req.params.contentId,
  ]);
  res.status(204).end();
};
