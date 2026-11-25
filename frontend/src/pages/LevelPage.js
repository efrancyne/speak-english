import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Tabs from "../components/Tabs";
import TopicList from "../components/TopicList";
import { getContents, getProgress, removeStatus, saveStatus } from "../services/api";

function LevelPage({ user }) {
  const { code } = useParams();
  const level = code.toUpperCase();

  const [items, setItems] = useState([]);
  const [statuses, setStatuses] = useState({});
  const [activeTab, setActiveTab] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setActiveTab("");
    setError(false);
    getContents({ level })
      .then(setItems)
      .catch(() => setError(true));
  }, [level]);

  useEffect(() => {
    if (!user) return;
    getProgress(user.id)
      .then((rows) => setStatuses(Object.fromEntries(rows.map((r) => [r.contentId, r.status]))))
      .catch(() => {});
  }, [user]);

  const categories = [...new Set(items.map((item) => item.typeName))];
  const currentTab = activeTab || categories[0];
  const visibleItems = items.filter((item) => item.typeName === currentTab);

  const countMastered = items.filter((item) => statuses[item.id] === "dominado").length;
  const countNeedsStudy = items.filter((item) => statuses[item.id] === "preciso_estudar").length;

  const handleChange = async (contentId, status) => {
    const updated = { ...statuses };
    try {
      if (statuses[contentId] === status) {
        await removeStatus(user.id, contentId);
        delete updated[contentId];
      } else {
        await saveStatus(user.id, contentId, status);
        updated[contentId] = status;
      }
      setStatuses(updated);
    } catch {
      alert("Não foi possível salvar. Tente novamente.");
    }
  };

  return (
    <main className="page">
      <Link to="/niveis" className="back">
        <FaArrowLeft /> Todos os níveis
      </Link>

      <h1 className="title">Nível {level}</h1>

      {error && (
        <p className="message">
          Não foi possível carregar os assuntos. Verifique se o servidor está rodando.
        </p>
      )}

      <div className="summary">
        <span>
          <strong>{countMastered}</strong> de {items.length} dominados
        </span>
        <span>
          <strong>{countNeedsStudy}</strong> para estudar
        </span>
        <progress value={countMastered} max={items.length || 1} />
        <Link to="/meus-estudos" className="btn btn-outline btn-sm">
          Ver meus estudos
        </Link>
      </div>

      <Tabs names={categories} active={currentTab} onChange={setActiveTab} />

      <TopicList items={visibleItems} statuses={statuses} onChange={handleChange} />
    </main>
  );
}

export default LevelPage;
