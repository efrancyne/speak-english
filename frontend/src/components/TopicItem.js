import { useState } from "react";
import {
  FaBookmark,
  FaCheckCircle,
  FaChevronDown,
  FaRegBookmark,
  FaRegCheckCircle,
} from "react-icons/fa";

function TopicItem({ topic, status, onChange, showLevel }) {
  const [open, setOpen] = useState(false);

  return (
    <li className={status ? `topic ${status}` : "topic"}>
      <div className="topic-row">
        <button type="button" className="topic-button" onClick={() => setOpen(!open)}>
          <FaChevronDown className={open ? "topic-arrow open" : "topic-arrow"} />
          <span>
            {showLevel && <span className="tag tag-level">{topic.level}</span>}
            <strong className="topic-title">{topic.title}</strong>
            <span className="topic-meaning">{topic.meaning}</span>
          </span>
        </button>

        <div className="topic-actions">
          <button
            type="button"
            className={status === "preciso_estudar" ? "chip chip-study active" : "chip chip-study"}
            onClick={() => onChange("preciso_estudar")}
          >
            {status === "preciso_estudar" ? <FaBookmark /> : <FaRegBookmark />}
            <span>Preciso estudar</span>
          </button>
          <button
            type="button"
            className={status === "dominado" ? "chip chip-done active" : "chip chip-done"}
            onClick={() => onChange("dominado")}
          >
            {status === "dominado" ? <FaCheckCircle /> : <FaRegCheckCircle />}
            <span>Já domino</span>
          </button>
        </div>
      </div>

      {open && topic.example && <p className="topic-example">“{topic.example}”</p>}
    </li>
  );
}

export default TopicItem;
