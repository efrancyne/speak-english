import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tabs from "../components/Tabs";
import TopicList from "../components/TopicList";
import { getMyContents, removeStatus, saveStatus } from "../services/api";

const TABS = {
  "Preciso estudar": "preciso_estudar",
  "Já domino": "dominado",
};

function MyStudy({ user }) {
  const [items, setItems] = useState([]);
  const [activeTab, setActiveTab] = useState("Preciso estudar");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!user) return;
    getMyContents(user.id)
      .then(setItems)
      .catch(() => setError(true));
  }, [user]);

  if (!user) {
    return (
      <main className="page">
        <h1 className="title">Meus estudos</h1>
        <p className="hint">
          <Link to="/login">Entre na sua conta</Link> para ver o que você marcou.
        </p>
      </main>
    );
  }

  const visibleItems = items.filter((item) => item.status === TABS[activeTab]);
  const statuses = Object.fromEntries(items.map((item) => [item.id, item.status]));

  const handleChange = async (contentId, status) => {
    try {
      if (statuses[contentId] === status) {
        await removeStatus(user.id, contentId);
        setItems(items.filter((item) => item.id !== contentId));
      } else {
        await saveStatus(user.id, contentId, status);
        setItems(items.map((item) => (item.id === contentId ? { ...item, status } : item)));
      }
    } catch {
      alert("Não foi possível salvar. Tente novamente.");
    }
  };

  return (
    <main className="page">
      <h1 className="title">Meus estudos</h1>
      <p className="lead">Os assuntos que você marcou, de todos os níveis.</p>

      {error && (
        <p className="message">
          Não foi possível carregar seus estudos. Verifique se o servidor está rodando.
        </p>
      )}

      <Tabs names={Object.keys(TABS)} active={activeTab} onChange={setActiveTab} />

      {visibleItems.length === 0 ? (
        <p className="message">Nenhum assunto aqui ainda. Abra um nível e marque os assuntos.</p>
      ) : (
        <TopicList items={visibleItems} statuses={statuses} onChange={handleChange} showLevel />
      )}
    </main>
  );
}

export default MyStudy;
