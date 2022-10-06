// import PropTypes from "prop-types";
import { useState, useContext } from "react";

import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

import { Context } from "../../store/index";

const PostBoard = () => {
  const { poster, updatePoster, resetPost, sendPoster } = useContext(Context);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    if (poster.nickName === "" || poster?.comment === "") {
      setValidated(true);
    } else {
      sendPoster();
      setValidated(false);
    }

    event.preventDefault();
  };

  return (
    <>
      <Form
        className="bg-light fixed-bottom border rounded px-3 py-3"
        noValidate
        onSubmit={(event) => handleSubmit(event)}
        validated={validated}>
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
          <Button size="sm" variant="outline-primary" type="submit">
            送出
          </Button>
        </Stack>
      </Form>
    </>
  );
};

// Text.propTypes = {
//   text: PropTypes.string
// };
// Text.defaultProps = {
//   text: ""
// };
export default PostBoard;
