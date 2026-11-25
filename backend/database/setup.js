require("dotenv").config();
const fs = require("fs");
const path = require("path");
const mysql = require("mysql2/promise");
const { levels, contentTypes, topics } = require("./topics");

async function main() {
  const dbName = process.env.DB_NAME;

  const conn = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    multipleStatements: true,
  });
  await conn.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\` CHARACTER SET utf8mb4`);
  await conn.query(`USE \`${dbName}\``);

  await conn.query(fs.readFileSync(path.join(__dirname, "schema.sql"), "utf8"));

  for (const l of levels) {
    await conn.query("INSERT IGNORE INTO niveis (codigo, descricao) VALUES (?, ?)", [
      l.code,
      l.description,
    ]);
  }
  for (const t of contentTypes) {
    await conn.query("INSERT IGNORE INTO categorias (slug, nome, descricao) VALUES (?, ?, ?)", [
      t.slug,
      t.name,
      t.description,
    ]);
  }

  const [nivelRows] = await conn.query("SELECT id, codigo FROM niveis");
  const [categoriaRows] = await conn.query("SELECT id, slug FROM categorias");
  const nivelId = Object.fromEntries(nivelRows.map((r) => [r.codigo, r.id]));
  const categoriaId = Object.fromEntries(categoriaRows.map((r) => [r.slug, r.id]));

  let count = 0;
  for (const [code, list] of Object.entries(topics)) {
    for (const [type, title, meaning, example] of list) {
      await conn.query(
        "INSERT IGNORE INTO assuntos (nivel_id, categoria_id, titulo, significado, exemplo) VALUES (?, ?, ?, ?, ?)",
        [nivelId[code], categoriaId[type], title, meaning, example],
      );
      count++;
    }
  }

  console.log(
    `Banco "${dbName}" pronto: ${levels.length} níveis, ${contentTypes.length} categorias, ${count} assuntos.`,
  );
  await conn.end();
}

main().catch((err) => {
  console.error("Falha ao configurar o banco:", err.message);
  process.exit(1);
});
