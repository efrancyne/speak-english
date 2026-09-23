import "./contentCard.css";
import phrasalVerbs from "../assets/phrasal_verbs.png";
import expressions from "../assets/expressions.png";
import vocabulary from "../assets/vocabulary.png";

function ContentCard() {
  return (
    <div>
      
      <p className="content-card-title">O que você gostaria de explorar hoje?</p>
      
      <div className="content-card">
      <div className="content-card-lessons">
        <img className="content-card-image" src={phrasalVerbs} alt="phrasal verbs" />
        <a className="content-card-text" href="#">
          Phrasal Verbs
        </a>
        <p className="content-card-description">Aprenda os verbos frasais mais usados no inglês e como utilizá-los.</p>
      </div>
      <div className="content-card-lessons">
        <img className="content-card-image" src={expressions} alt="gramática" />
        <a className="content-card-text" href="#">
          Expressions
        </a>
        <p className="content-card-description">Aprenda as expressões mais usadas no inglês e como utilizá-las.</p>
      </div>
      <div className="content-card-lessons">
        <img className="content-card-image" src={vocabulary} alt="vocabulário" />
        <a className="content-card-text" href="#">
          Vocabulary
        </a>
        <p className="content-card-description">Aprenda o vocabulário mais usado no inglês e como utilizá-lo.</p>
      </div>
      </div>
    </div>
  );    
}

export default ContentCard;