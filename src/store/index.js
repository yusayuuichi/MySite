import { useState, useReducer, useEffect, createContext } from "react";
import {
  getResumeData,
  getAllMsg,
  sendPost,
  login,
  sendResume,
} from "../api/resume";

const defaultValue = {
  isLogin: false,
  userInfo: {
    name: "",
    engName: "",
    jobTitle: "",
    introduction: "",
    location: "",
    email: "",
    phone: "",
  },
  userInfoEditor: {},
  companys: [],
  projects: [],
  skills: [],
  isLoaded: false,
  addPost: () => {},
  msgList: [],
  poster: {
    parentId: 0,
    nickName: "",
    comment: "",
  },
  errMsg: "",
  notifyShow: false,
  apiWorking: false,
};

// 建立Context
export const Context = createContext(defaultValue);
Context.displayName = "ResumeContext";

// reducer 區塊
const msgReducer = (state, { type, payload }) => {
  switch (type) {
    case "SETUP":
      return payload;
    default:
      return payload;
  }
};

const posterReducer = (state, { type, name, val }) => {
  switch (type) {
    case "SETUP":
      return { ...state, [name]: val };
    case "CLEAN":
      return {
        parentId: 0,
        nickName: "",
        comment: "",
      };
    default:
      break;
  }
};

const userInfoEditorReducer = (state, { type, name, val }) => {
  switch (type) {
    case "LOAD":
      return val;
    case "SETUP":
      return { ...state, [name]: val };
    case "CLEAN":
      return {};
    default:
      break;
  }
};

// 建立 Context Provider
export const Provider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(defaultValue.isLogin);
  const [userInfo, setUserInfo] = useState(defaultValue.userInfo);
  const [companys, setCompany] = useState(defaultValue.companys);
  const [projects, setProject] = useState(defaultValue.projects);
  const [skills, setSkill] = useState(defaultValue.skills);
  const [isLoaded, setIsLoaded] = useState(defaultValue.isLoaded);
  const [showMsgToast, setShowMsgToast] = useState(false);
  const [errMsg, setErrMsg] = useState(defaultValue.errMsg);
  const [notifyShow, setNotifyShow] = useState(defaultValue.notifyShow);
  const [apiWorking, setApiWorking] = useState(defaultValue.apiWorking);

  const [userInfoEditor, dispatchUserInfoEditor] = useReducer(
    userInfoEditorReducer,
    defaultValue.userInfoEditor
  );
  const [poster, dispatchPoster] = useReducer(
    posterReducer,
    defaultValue.poster
  );
  const [msgList, dispatchMsgList] = useReducer(
    msgReducer,
    defaultValue.msgList
  );

  const loginSys = async (username, password) => {
    const data = { username, password };
    const result = await login(data);

    if (result.result === "SUCCESS") {
      setIsLogin(true);
    } else {
      return setErrMsg(result.msg);
    }
  };

  const updateUserInfo = (name, val) => {
    dispatchUserInfoEditor({ type: "SETUP", name, val });
  };

  const sendSaveResume = async () => {
    setApiWorking(true);
    let result = await sendResume({ userInfoEditor });
    getResumes();

    if (result?.result) {
      setNotifyShow(true);
    }
    setApiWorking(false);
  };

  const updatePoster = (name, val) => {
    if (!poster.hasOwnProperty("parentId")) {
      dispatchPoster({ type: "SETUP", name: "parentId", val: "0" });
    }
    dispatchPoster({ type: "SETUP", name, val });
  };

  const setResponser = (responser) => {
    setShowMsgToast(true);
    const [parentId, comment] = responser.split(",");
    dispatchPoster({ type: "SETUP", name: "comment", val: comment });
    dispatchPoster({ type: "SETUP", name: "parentId", val: parentId });
  };

  const resetPost = () => {
    dispatchPoster({ type: "CLEAN" });
  };

  const sendPoster = async () => {
    await sendPost(poster);
    await getMsgList();
    await dispatchPoster({ type: "CLEAN" });
  };

  const getMsgList = () => {
    getAllMsg().then((data) => {
      dispatchMsgList({
        type: "SETUP",
        payload: data?.msgList,
      });
    });
  };

  const getResumes = () => {
    getResumeData().then((data) => {
      if (data !== null) {
        const userInfoData = data?.info;
        setUserInfo(userInfoData);
        dispatchUserInfoEditor({
          type: "LOAD",
          name: "userinfo",
          val: userInfoData,
        });
        const companyData = data?.company;
        setCompany(companyData);
        const projectData = data?.project;
        setProject(projectData);
        const skillData = data?.skill;
        setSkill(skillData);
        setIsLoaded(true);
      }
    });
  };
  useEffect(getResumes, []);

  return (
    <Context.Provider
      value={{
        isLogin,
        setIsLogin,
        userInfo,
        userInfoEditor,
        updateUserInfo,
        companys,
        projects,
        skills,
        isLoaded,
        msgList,
        getMsgList,
        poster,
        updatePoster,
        resetPost,
        sendPoster,
        setResponser,
        showMsgToast,
        setShowMsgToast,
        loginSys,
        errMsg,
        setErrMsg,
        sendSaveResume,
        notifyShow,
        setNotifyShow,
        apiWorking,
      }}
    >
      {children}
    </Context.Provider>
  );
};
