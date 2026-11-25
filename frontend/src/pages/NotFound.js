import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="page">
      <h1 className="title">Página não encontrada</h1>
      <Link to="/">Voltar para o início</Link>
    </main>
  );
}

export default NotFound;
