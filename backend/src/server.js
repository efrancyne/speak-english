require("dotenv").config();
const app = require("./app");
const db = require("./config/db");

const port = process.env.PORT || 3001;

app.listen(port, async () => {
  console.log(`API rodando em http://localhost:${port}`);

  try {
    await db.query("SELECT 1 FROM niveis LIMIT 1");
    console.log("Banco de dados conectado.");
  } catch (err) {
    console.error(`Não foi possível usar o banco de dados (${err.code || err.message}).`);
  }
});
