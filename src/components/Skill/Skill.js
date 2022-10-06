import { useContext } from "react";

import Button from "react-bootstrap/Button";
import Placeholder from "react-bootstrap/Placeholder";

import "./Skill.css";
import { Context } from "../../store/index";
import logoMapper from "../../utils/logoMapper";

const Skill = () => {
  const { skills, isLoaded } = useContext(Context);

  if (isLoaded) {
    const frontEndSkills = skills?.filter(
      (skill) => "FrontEnd" === skill.skillType
    );
    const backEndSkills = skills?.filter(
      (skill) => "BackEnd" === skill.skillType
    );
    const databaseEndSkills = skills?.filter(
      (skill) => "Database" === skill.skillType
    );

    return (
      <>
        <h1 className="mt-5">技能</h1>
        <h4 className="skill-type">前端</h4>
        <section className="skill-Buttons">
          {frontEndSkills?.map((skill) => {
            return (
              <Button key={skill.id} variant="outline-dark" disabled>
                {logoMapper[skill.skillLogo]} {skill.skillName}
              </Button>
            );
          })}
        </section>
        <h4 className="skill-type">後端</h4>
        <section className="skill-Buttons">
          {backEndSkills?.map((skill) => {
            return (
              <Button key={skill.id} variant="outline-dark" disabled>
                {logoMapper[skill.skillLogo]} {skill.skillName}
              </Button>
            );
          })}
        </section>
        <h4 className="skill-type">資料庫</h4>
        <section className="skill-Buttons">
          {databaseEndSkills?.map((skill) => {
            return (
              <Button key={skill.id} variant="outline-dark" disabled>
                {logoMapper[skill.skillLogo]} {skill.skillName}
              </Button>
            );
          })}
        </section>
      </>
    );
  } else {
    return (
      <>
        <h1 className="mt-5">技能</h1>
        <Placeholder as="h4" animation="glow">
          <Placeholder xs={2} />
        </Placeholder>
        <section className="skill-Buttons">
          {Array(13)
            .fill(0)
            .map((_, i) => (
              <Placeholder key={`place${i}`} as="span" animation="glow">
                <Placeholder size="lg" xs={2} />{" "}
              </Placeholder>
            ))}
        </section>
        <Placeholder as="h4" animation="glow">
          <Placeholder xs={2} />
        </Placeholder>
        <section className="skill-Buttons">
          {Array(13)
            .fill(0)
            .map((_, i) => (
              <Placeholder key={`place${i}`} as="span" animation="glow">
                <Placeholder size="lg" xs={2} />{" "}
              </Placeholder>
            ))}
        </section>
      </>
    );
  }
};

export default Skill;
