import { useContext } from "react";

import Button from "react-bootstrap/Button";

import UserInfoEditor from "../components/UserInfoEditor/UserInfoEditor";
import WorkExpEditor from "../components/WorkExpEditor/WorkExpEditor";

import { Context } from "../store/index";

const Editor = () => {
  const { sendSaveResume, apiWorking } = useContext(Context);

  const handleUpdate = async () => {
    await sendSaveResume;
  };

  return (
    <>
      <UserInfoEditor />
      <WorkExpEditor />
      <div>技能</div>
      <section className="w-100 d-flex justify-content-center">
        <Button
          variant="outline-primary"
          className="d-flex"
          onClick={sendSaveResume}
          disabled={apiWorking}
        >
          儲存
        </Button>
      </section>
    </>
  );
};

export default Editor;
