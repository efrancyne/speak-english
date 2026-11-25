import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaLeaf,
  FaMountain,
  FaRocket,
  FaSeedling,
  FaTree,
  FaTrophy,
} from "react-icons/fa";

const levelInfo = {
  A1: { icon: <FaSeedling />, group: "Iniciante" },
  A2: { icon: <FaLeaf />, group: "Iniciante" },
  B1: { icon: <FaTree />, group: "Intermediário" },
  B2: { icon: <FaMountain />, group: "Intermediário" },
  C1: { icon: <FaRocket />, group: "Avançado" },
  C2: { icon: <FaTrophy />, group: "Avançado" },
};

function LevelCard({ code, description }) {
  const info = levelInfo[code];

  return (
    <Link to={`/niveis/${code}`} className={`level level-${code[0].toLowerCase()}`}>
      <div className="level-top">
        <strong className="level-code">{code}</strong>
        <span className="level-icon">{info.icon}</span>
      </div>
      <span className="tag">{info.group}</span>
      <span className="level-text">{description}</span>
      <span className="level-link">
        Ver assuntos <FaArrowRight />
      </span>
    </Link>
  );
}

export default LevelCard;
