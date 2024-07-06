import { Image, Row, Col } from "react-bootstrap";

const ListItem = ({ myItem, onVideoSelect }) => {
  const handleClick = () => {
    onVideoSelect(myItem);
  };

  return (
    <Row className="mb-3" onClick={handleClick} style={{ cursor: "pointer" }}>
      <Col sm={8}>
        <Image
          src={myItem.snippet.thumbnails.high.url}
          rounded
          style={{ width: 200, height: 150 }}
        />
      </Col>
      <Col sm={4}>
        <h5>{myItem.snippet.channelTitle}</h5>
      </Col>
    </Row>
  );
};

export default ListItem;
