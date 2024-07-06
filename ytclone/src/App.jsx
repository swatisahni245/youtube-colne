import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import SearchInput from "./components/SearchInput";
import Main from "./components/Main";
import List from "./components/List";
import { useEffect, useState } from "react";
import youtube from "./api/youtube";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [mainVideo, setMainVideo] = useState(null);

  const getData = async (searchItem) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyDnlZ8qX5rUgMd-eWPYUh6tmmh4eHVExVM",
        q: searchItem,
      },
    });

    setVideos(response.data.items);
    setMainVideo(response.data.items[0]);
  };

  const handleVideoSelect = (video) => {
    setMainVideo(video);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <SearchInput onSearch={getData} />
      <Row>
        <Col sm={8}>
          <Main video={mainVideo} />
        </Col>
        <Col sm={4}>
          <List list={videos} onVideoSelect={handleVideoSelect} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
