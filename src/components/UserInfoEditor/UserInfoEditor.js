import { useContext } from "react";

import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import { Context } from "../../store/index";

const UserInfoEditor = () => {
  const { userInfoEditor, updateUserInfo } = useContext(Context);
  const handleHeadShot = (event) => {
    const files = event.target.files;
    const file = files[0];
    getBase64(file);
  };
  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };
  const onLoad = (fileString) => {
    updateUserInfo("figure", fileString);
  };

  const handleUserInfo = (event) => {
    console.log("It's OK");
  };

  return (
    <>
      <Row className="mt-3">
        <Col sm={6} md={4} lg={4}>
          <Figure>
            <Figure.Image
              width={250}
              height={250}
              alt="Head Shot"
              src={userInfoEditor?.figure}
            />
            <Form.Group controlId="formFileMultiple" className="mb-1">
              <Form.Label>更新大頭照</Form.Label>
              <Form.Control
                type="file"
                multiple
                size="sm"
                onChange={(event) => handleHeadShot(event)}
              />
            </Form.Group>
            <Figure.Caption>
              <Form.Group className="mb-1" controlId="workNow">
                <Form.Control
                  type="text"
                  placeholder="現職:"
                  size="sm"
                  onChange={(event) => handleUserInfo(event)}
                  defaultValue={userInfoEditor?.workNow}
                />
              </Form.Group>
            </Figure.Caption>
          </Figure>
        </Col>
        <Col>
          <Form.Group className="mb-1" controlId="name">
            <Form.Control
              type="text"
              placeholder="中文名"
              size="lg"
              onChange={(event) => handleUserInfo(event)}
              defaultValue={userInfoEditor?.name}
            />
          </Form.Group>
          <Form.Group className="mb-1" controlId="engName">
            <Form.Control
              type="text"
              placeholder="英文名"
              size="lg"
              onChange={(event) => handleUserInfo(event)}
              defaultValue={userInfoEditor?.engName}
            />
          </Form.Group>
          <Form.Group className="mb-1" controlId="jobTitle">
            <Form.Control
              type="text"
              placeholder="職稱"
              size="lg"
              onChange={(event) => handleUserInfo(event)}
              defaultValue={userInfoEditor?.jobTitle}
            />
          </Form.Group>
          <article>
            <Form.Group className="mb-1" controlId="school">
              <Form.Control
                type="text"
                placeholder="畢業學校&年份"
                size="sm"
                onChange={(event) => handleUserInfo(event)}
                defaultValue={userInfoEditor?.school}
              />
            </Form.Group>

            <Form.Group className="mb-1" controlId="introduction">
              <Form.Control
                type="text"
                as="textarea"
                rows={7}
                placeholder="簡介"
                onChange={(event) => handleUserInfo(event)}
                defaultValue={userInfoEditor?.introduction}
              />
            </Form.Group>
          </article>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <Form.Group className="mb-1" controlId="location">
            <Form.Control
              type="text"
              placeholder="地點"
              size="sm"
              onChange={(event) => handleUserInfo(event)}
              defaultValue={userInfoEditor?.location}
            />
          </Form.Group>
        </Col>
        <Col sm={4}>
          <Form.Group className="mb-1" controlId="phone">
            <Form.Control
              type="text"
              placeholder="電話"
              size="sm"
              onChange={(event) => handleUserInfo(event)}
              defaultValue={userInfoEditor?.phone}
            />
          </Form.Group>
        </Col>
        <Col sm={4}>
          <Form.Group className="mb-1" controlId="email">
            <Form.Control
              type="text"
              placeholder="電子郵件"
              size="sm"
              onChange={(event) => handleUserInfo(event)}
              defaultValue={userInfoEditor?.email}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <Form.Group className="mb-1" controlId="linkedin">
            <Form.Control
              type="text"
              placeholder="Linkedin"
              size="sm"
              onChange={(event) => handleUserInfo(event)}
              defaultValue={userInfoEditor?.linkedin}
            />
          </Form.Group>
        </Col>
        <Col sm={4}>
          <Form.Group className="mb-1" controlId="cakeresume">
            <Form.Control
              type="text"
              placeholder="Cakeresume"
              size="sm"
              onChange={(event) => handleUserInfo(event)}
              defaultValue={userInfoEditor?.cakeresume}
            />
          </Form.Group>
        </Col>
      </Row>
    </>
  );
};

export default UserInfoEditor;
