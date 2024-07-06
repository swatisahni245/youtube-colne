import ListItem from "./ListItem";

const List = ({ list, onVideoSelect }) => {
  return (
    <>
      {list.map((item, idx) => (
        <ListItem key={idx} myItem={item} onVideoSelect={onVideoSelect} />
      ))}
    </>
  );
};

export default List;


