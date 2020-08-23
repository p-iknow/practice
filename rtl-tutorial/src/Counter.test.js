import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('<Counter/>', () => {
	it('matches snapshot', () => {
		const { container } = render(<Counter/>);
		expect(container).toMatchSnapshot();
	});

	it('has a number and two buttons', () => {
		const { getByText } = render(<Counter/>);
		getByText('0');
		getByText('+1');
		getByText('-1');
	});

	it('increases', () => {
		const utils = render(<Counter/>);
		const number = utils.getByText('0');
		const plusButton = utils.getByText('+1');

		// 클릭 이벤트를 두번 발생시키키
		fireEvent.click(plusButton);
		fireEvent.click(plusButton);

		expect(number).toHaveTextContent('2');
		expect(number.textContent).toBe('2');
	});

	it('decreases', () => {
		const utils = render(<Counter/>);
		const number = utils.getByText('0');
		const minusButton = utils.getByText('-1');

		fireEvent.click(minusButton);
		fireEvent.click(minusButton);

		expect(number).toHaveTextContent('-2');
		expect(number.textContent).toBe('-2');

	});

});
