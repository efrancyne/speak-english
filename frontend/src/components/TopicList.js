import TopicItem from "./TopicItem";

function TopicList({ items, statuses, onChange, showLevel }) {
  return (
    <ul className="topics">
      {items.map((topic) => (
        <TopicItem
          key={topic.id}
          topic={topic}
          status={statuses[topic.id]}
          showLevel={showLevel}
          onChange={(status) => onChange(topic.id, status)}
        />
      ))}
    </ul>
  );
}

export default TopicList;
