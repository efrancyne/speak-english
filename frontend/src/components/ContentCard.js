import "./contentCard.css";
import phrasalVerbs from "../assets/phrasal_verbs.png";
import expressions from "../assets/expressions.png";
import vocabulary from "../assets/vocabulary.png";

const types = [
  {
    name: "Vocabulary",
    image: vocabulary,
    description: "Aprenda o vocabulário mais usado no inglês e como utilizá-lo.",
  },
  {
    name: "Phrasal Verbs",
    image: phrasalVerbs,
    description: "Aprenda os verbos frasais mais usados no inglês e como utilizá-los.",
  },
  {
    name: "Expressions",
    image: expressions,
    description: "Aprenda as expressões mais usadas no inglês e como utilizá-las.",
  },
];

function ContentCard({ title }) {
  return (
    <section className="content-section">
      <h2 className="content-card-title">{title}</h2>

      <div className="content-card">
        {types.map((type) => (
          <div className="content-card-lessons" key={type.name}>
            <img className="content-card-image" src={type.image} alt={type.name} />
            <span className="content-card-text">{type.name}</span>
            <p className="content-card-description">{type.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContentCard;
