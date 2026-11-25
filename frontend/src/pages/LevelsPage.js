import { useEffect, useState } from "react";
import LevelCard from "../components/LevelCard";
import { getLevels } from "../services/api";

function LevelsPage() {
  const [levels, setLevels] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getLevels()
      .then(setLevels)
      .catch(() => setError(true));
  }, []);

  return (
    <main className="page">
      <h1 className="title">Níveis</h1>
      <p className="lead">
        O CEFR divide o aprendizado de inglês em seis níveis. Escolha um para ver os assuntos
        essenciais.
      </p>

      {error && (
        <p className="message">
          Não foi possível carregar os níveis. Verifique se o servidor está rodando.
        </p>
      )}

      <div className="levels">
        {levels.map((level) => (
          <LevelCard key={level.code} code={level.code} description={level.description} />
        ))}
      </div>
    </main>
  );
}

export default LevelsPage;
