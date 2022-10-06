import { useState, useContext } from "react";

import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import ToastContainer from "react-bootstrap/ToastContainer";
import Spinner from "react-bootstrap/Spinner";

import { Context } from "../../store/index";

import "./PostToast.css";

const PostToast = () => {
  const [validated, setValidated] = useState(false);
  const {
    poster,
    updatePoster,
    resetPost,
    sendPoster,
    showMsgToast,
    setShowMsgToast
  } = useContext(Context);

  const toggleShow = () => {
    resetPost();
    setShowMsgToast(!showMsgToast);
    setValidated(false);
  };

  const handleSubmit = () => {
    if (poster.nickName === "" || poster?.comment === "") {
      setValidated(true);
    } else {
      setShowMsgToast(!showMsgToast);
      sendPoster();
      setValidated(false);
    }
  };

  return (
    <div className="">
      <Button
        disabled={showMsgToast}
        className="toast-button"
        onClick={toggleShow}
        variant="outline-primary">
        {showMsgToast ? (
          <>
            <Spinner animation="border" role="status" size="sm">
              <span className="visually-hidden">開啟中...</span>
            </Spinner>
            開啟中
          </>
        ) : (
          "發表留言"
        )}
      </Button>

      <ToastContainer position="middle-center">
        <Toast show={showMsgToast} onClose={toggleShow}>
          <Toast.Header>
            <strong className="me-auto">新留言</strong>
          </Toast.Header>
          <Toast.Body className="bg-white">
            <Form noValidate validated={validated}>
              <Form.Group className="mb-3" controlId="formNickName">
                <Form.Label>留言人*</Form.Label>
                <Form.Control
                  required
                  placeholder="你是誰"
                  onChange={(event) => {
                    updatePoster("nickName", event.target.value);
                  }}
                  value={poster.nickName}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formComment">
                <Form.Label>留言內容*</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  rows={2}
                  onChange={(event) => {
                    updatePoster("comment", event.target.value);
                  }}
                  value={poster.comment}
                />
              </Form.Group>

              <Stack direction="horizontal" gap={3}>
                <Button
                  size="sm"
                  variant="outline-primary"
                  onClick={() => {
                    resetPost();
                  }}>
                  刪除內容
                </Button>
                <Button
                  size="sm"
                  variant="outline-primary"
                  onClick={(event) => {
                    handleSubmit();
                  }}>
                  送出
                </Button>
              </Stack>
            </Form>
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default PostToast;
