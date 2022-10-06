import React, { useEffect, useContext } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { Context } from "../../store/index";
import TextShow from "../TextShow/TextShow";

const Post = () => {
  useEffect(() => {
    getMsgList();
  }, []);

  const { msgList, getMsgList, setResponser } = useContext(Context);

  const respHandler = (event) => {
    setResponser(event.target.value);
  };

  return (
    <>
      {msgList?.map((msg) => {
        return (
          <Card key={msg.id} border="light" className="mb-3">
            <Card.Body>
              <Card.Title>{msg.nick_name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {msg.create_time}
              </Card.Subtitle>
              <Card.Text>
                <TextShow text={msg.comment} />
              </Card.Text>
              <Button
                variant="link"
                className="mb-2"
                value={`${msg.id},To ${msg.nick_name}\r\n`}
                onClick={respHandler}>
                回覆
              </Button>

              {msg?.childs?.map((subMsg) => {
                return (
                  <Card key={subMsg.id} border="light">
                    <Card.Body>
                      <Card.Title>{subMsg.nick_name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {subMsg.create_time}
                      </Card.Subtitle>
                      <Card.Text>
                        <TextShow text={subMsg.comment} />
                      </Card.Text>
                    </Card.Body>
                  </Card>
                );
              })}
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default Post;
