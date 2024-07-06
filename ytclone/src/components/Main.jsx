import Image from "react-bootstrap/Image";

const Main = (props) => {
  // console.log("Main", props.video);
  if (props.video === null) return <h1>Loading...</h1>;
  const videosrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;
  return (
    <>
      <iframe src={videosrc} width={"100%"} height={"100%"} />
      <h4>{props.video.snippet.channelTitle}</h4>
      <h4>{props.video.snippet.description}</h4>
    </>
  );
};

export default Main;