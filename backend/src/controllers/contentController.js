const db = require("../config/db");

exports.listLevels = async (req, res) => {
  const [rows] = await db.query(
    "SELECT id, codigo AS code, descricao AS description FROM niveis ORDER BY id",
  );
  res.json(rows);
};

exports.listContents = async (req, res) => {
  const [rows] = await db.query(
    `SELECT a.id, a.titulo AS title, a.significado AS meaning, a.exemplo AS example,
            c.nome AS typeName
       FROM assuntos a
       JOIN niveis n ON n.id = a.nivel_id
       JOIN categorias c ON c.id = a.categoria_id
      WHERE n.codigo = ?
      ORDER BY a.id`,
    [String(req.query.level).toUpperCase()],
  );
  res.json(rows);
};
