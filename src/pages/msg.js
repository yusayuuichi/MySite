import Post from "../components/Post/Post";
import PostToast from "../components/PostToast/PostToast";

import Container from "react-bootstrap/Container";

const Msg = () => {
  return (
    <>
      <PostToast />
      <Container
        aria-live="polite"
        aria-atomic="true"
        className="py-2 overflow-auto"
        style={{ height: "80vh" }}>
        <Post />
      </Container>
    </>
  );
};

export default Msg;
