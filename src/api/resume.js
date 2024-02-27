// const apiUrl = 'https://zsg4pv-8080.preview.csb.app/';
const apiUrl = 'http://localhost:8080/';

export const getResumeData = async () => {
	try {
		const data = await fetch(`${apiUrl}resume/me`) // 向 requestURL 發送請求
			.then((response) => response.json()); // 取得伺服器回傳的資料並以 JSON 解析
		return data;
	} catch {
		return null;
	}
	// https://87dhy9.sse.codesandbox.io/
	// https://8twqqo-8080.preview.csb.app/
	// .then((data) => console.log(data)); 取得解析後的 JSON 資料
};

export const getAllMsg = async () => {
	try {
		const data = await fetch(`${apiUrl}msg/all`) //取得所有訊息
			.then((response) => response.json());
		return data;
	} catch {
		return null;
	}
};

export const sendPost = async (data) => {
	try {
		await fetch(`${apiUrl}msg/add`, {
			method: 'POST', // or 'PUT'
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
	} catch {
		return null;
	}
};

export const login = async (data) => {
	try {
		const result = await fetch(`${apiUrl}login`, {
			method: 'POST', // or 'PUT'
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}).then((response) => response.json());
		return result;
	} catch {
		return null;
	}
};

export const sendResume = async (data) => {
	try {
		const result = await fetch(`${apiUrl}resume/update`, {
			method: 'POST', // or 'PUT'
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}).then((response) => response.json());
		return result;
	} catch {
		return null;
	}
};

/**
 * {
    "lastID": 7,
    "changes": 1,
    "result": true
}
 */
