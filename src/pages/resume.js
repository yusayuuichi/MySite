import Container from "react-bootstrap/Container";

import UserInfo from "../components/UserInfo/UserInfo";
import WorkExp from "../components/WorkExp/WorkExp";
import Skill from "../components/Skill/Skill";

const Resume = () => {
  return (
    <Container fluid>
      <UserInfo />
      <WorkExp />
      <Skill />
    </Container>
  );
};

export default Resume;
