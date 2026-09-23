import "./niveis.css";
function Niveis() {
  return (
    
    <div className="levels">
      <button className="square">A1
        <p className="level-description">Primeiros <br />
        passos</p>
      </button>
      <button className="square">A2
        <p className="level-description">Rotina e frases essenciais</p>
      </button>
      <button className="square">B1
        <p className="level-description">Opiniões, planos e conversas </p>
      </button>
      <button className="square">B2
        <p className="level-description">Ideias complexas e mais fluência</p>
      </button>
      <button className="square">C1
        <p className="level-description">Precisão e flexibilidade</p>
      </button>
      <button className="square">C2
        <p className="level-description">Domínio amplo do idioma</p>
      </button>
    </div>
  );
}

export default Niveis;