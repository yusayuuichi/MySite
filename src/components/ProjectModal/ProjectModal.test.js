import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import PorjectModal from './ProjectModal';
import userEvent from '@testing-library/user-event';

describe('測試 Modal 按鈕是否正常', () => {
	test('按下按鈕時開啟 Modal 視窗', async () => {
		const data = {
			company: [
				{
					id: 3,
					companyName: '資誠聯合會計師事務所',
					companyAbbName: 'PWC',
					companyLogo:
						'https://scontent.fvga9-1.fna.fbcdn.net/v/t1.6435-9/39742462_10156816075332474_8912987248727687168_n.png?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=s-SaLyxJflcAX-IZakl&tn=00juLn4zuwcm2Omq&_nc_ht=scontent.fvga9-1.fna&oh=00_AT_CxOhiyv5Bap0QeX1nM3zQcwzxLxTkptZ8ggwHLUqtSw&oe=633494AD',
					deptName: 'FSC3',
					position: 'Senior Associate',
					jobSummary:
						'協助客戶解決風險導向稽核軟體並提供客製化服務\r\n- 系統導入 (環境、軟體安裝)\r\n- 版本更新 (新功能導入)\r\n- 售後服務 (Bug 維護)',
					usedSkills:
						'Java8 / Spring MVC / Spring Boot / Struts2 / Thymeleaf / Hibernate / Bootstrap5 / SQL Server / JPA / Jenkins / Tomcat',
					beginDate: '2022-03-02',
					endDate: 'Present',
					project: [
						{
							id: 9,
							companyId: 3,
							projectName: '台銀稽核案',
							desc: '於台銀現有風險導向系統整併內部稽核核心系統',
						},
						{
							id: 8,
							companyId: 3,
							projectName: '台銀擴充案',
							desc: '擴充風險導向系統，新增客製化功能&維護舊有功能',
						},
					],
				},
			],
		};

		//arrange
		render(<PorjectModal company={data} />);

		//act
		await userEvent.click(screen.getByTestId('ModalBtn'));
		const modal = screen.getByTestId('Modal');

		//assert
		expect(modal).toBeVisible();
	});
});
