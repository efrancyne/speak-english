function StepCard({ icon, number, title, text }) {
  return (
    <div className="step-card">
      <span className="step-number">{number}</span>
      <div className="step-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default StepCard;
