import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import userEvent from "@testing-library/user-event";

import TextShow from './TextShow';

describe('測試文字顯示區塊是否正常', () => {
	test('當帶入text資料時，確認文字有分段正常顯示', () => {
		render(
			<TextShow
				text={`這是一段測試用的文字
        包含了斷行符號與一般的的enter\r\n用以測試`}
			/>,
		);

		expect(screen.getByText('這是一段測試用的文字')).toHaveTextContent('這是一段測試用的文字');
		expect(screen.getByText('包含了斷行符號與一般的的enter')).toHaveTextContent(
			'包含了斷行符號與一般的的enter',
		);
		expect(screen.getByText('用以測試')).toHaveTextContent('用以測試');
	});
});
