import { useState, useReducer, useEffect, createContext } from 'react';
import { getResumeData, getAllMsg, sendPost, login, sendResume } from '../api/resume';
import PropTypes from 'prop-types';

const defaultValue = {
	isLogin: false,
	userInfo: {
		name: '',
		engName: '',
		jobTitle: '',
		introduction: '',
		location: '',
		email: '',
		phone: '',
	},
	userInfoEditor: {},
	companysEditor: [],
	projectsEditor: [],
	skillsEditor: [],
	companys: [],
	skills: [],
	isLoaded: false,
	//addPost: () => {},
	msgList: [],
	poster: {
		parentId: 0,
		nickName: '',
		comment: '',
	},
	errMsg: '',
	notifyShow: false,
	apiWorking: false,
};

// 建立Context
export const Context = createContext(defaultValue);
Context.displayName = 'ResumeContext';

// reducer 區塊
const msgReducer = (state, { type, payload }) => {
	switch (type) {
		case 'SETUP':
			return payload;
		default:
			return payload;
	}
};

const posterReducer = (state, { type, name, val }) => {
	switch (type) {
		case 'SETUP':
			return { ...state, [name]: val };
		case 'CLEAN':
			return {
				parentId: 0,
				nickName: '',
				comment: '',
			};
		default:
			break;
	}
};

const userInfoEditorReducer = (state, { type, name, val }) => {
	switch (type) {
		case 'LOAD':
			return val;
		case 'SETUP':
			return { ...state, [name]: val };
		case 'CLEAN':
			return {};
		default:
			break;
	}
};

const companysEditorReducer = (state, { type, name, val }) => {
	switch (type) {
		case 'LOAD':
			return val;
		case 'SETUP': {
			const { companyId, propVal } = val;
			const index = state.findIndex((obj) => obj.id === companyId);
			let company = state.filter((obj) => obj.id === companyId)[0];
			company = { ...company, [name]: propVal };
			const companys = [...state];
			companys.splice(index, 1, company);
			return companys;
		}
		case 'CLEAN':
			return {};
		default:
			break;
	}
};

const projectsEditorReducer = (state, { type, name, val }) => {
	switch (type) {
		case 'LOAD':
			return val;
		case 'SETUP':
			return { ...state, [name]: val };
		case 'CLEAN':
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
	const [skills, setSkill] = useState(defaultValue.skills);
	const [isLoaded, setIsLoaded] = useState(defaultValue.isLoaded);
	const [showMsgToast, setShowMsgToast] = useState(false);
	const [errMsg, setErrMsg] = useState(defaultValue.errMsg);
	const [notifyShow, setNotifyShow] = useState(defaultValue.notifyShow);
	const [apiWorking, setApiWorking] = useState(defaultValue.apiWorking);

	const [userInfoEditor, dispatchUserInfoEditor] = useReducer(
		userInfoEditorReducer,
		defaultValue.userInfoEditor,
	);
	const [companysEditor, dispatchCompanysEditor] = useReducer(
		companysEditorReducer,
		defaultValue.companysEditor,
	);
	const [poster, dispatchPoster] = useReducer(posterReducer, defaultValue.poster);
	const [msgList, dispatchMsgList] = useReducer(msgReducer, defaultValue.msgList);

	// 進入系統時自動呼叫
	const getResumes = () => {
		getResumeData().then((data) => {
			if (data !== null) {
				const userInfoData = data?.info;
				setUserInfo(userInfoData);
				dispatchUserInfoEditor({
					type: 'LOAD',
					name: 'userinfo',
					val: userInfoData,
				});
				const companyData = data?.company;
				setCompany(companyData);
				dispatchCompanysEditor({
					type: 'LOAD',
					name: 'companys',
					val: companyData,
				});
				const skillData = data?.skill;
				setSkill(skillData);
				setIsLoaded(true);
			}
		});
	};
	useEffect(getResumes, []);

	// 登入履歷維護
	const loginSys = async (username, password) => {
		const data = { username, password };
		const result = await login(data);

		if (result.result === 'SUCCESS') {
			setIsLogin(true);
		} else {
			return setErrMsg(result.msg);
		}
	};

	// 履歷維護
	const updateUserInfo = (name, val) => {
		dispatchUserInfoEditor({ type: 'SETUP', name, val });
	};

	const updateCompanys = (name, val) => {
		dispatchCompanysEditor({ type: 'SETUP', name, val });
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

	// 留言板
	const getMsgList = () => {
		getAllMsg().then((data) => {
			dispatchMsgList({
				type: 'SETUP',
				payload: data?.msgList,
			});
		});
	};

	const updatePoster = (name, val) => {
		if (!Object.prototype.hasOwnProperty.call(poster, 'parentId')) {
			dispatchPoster({ type: 'SETUP', name: 'parentId', val: '0' });
		}
		dispatchPoster({ type: 'SETUP', name, val });
	};

	const setResponser = (responser) => {
		setShowMsgToast(true);
		const [parentId, comment] = responser.split(',');
		dispatchPoster({ type: 'SETUP', name: 'comment', val: comment });
		dispatchPoster({ type: 'SETUP', name: 'parentId', val: parentId });
	};

	const resetPost = () => {
		dispatchPoster({ type: 'CLEAN' });
	};

	const sendPoster = async () => {
		await sendPost(poster);
		getMsgList();
		dispatchPoster({ type: 'CLEAN' });
	};

	return (
		<Context.Provider
			value={{
				isLogin,
				setIsLogin,
				userInfo,
				userInfoEditor,
				updateUserInfo,
				updateCompanys,
				companys,
				companysEditor,
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

Provider.propTypes = {
	children: PropTypes.node.isRequired,
};
