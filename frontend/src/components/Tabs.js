function Tabs({ names, active, onChange }) {
  return (
    <div className="tabs">
      {names.map((name) => (
        <button
          key={name}
          type="button"
          className={name === active ? "tab active" : "tab"}
          onClick={() => onChange(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
