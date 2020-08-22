import React from 'react';
import { mount, shallow } from 'enzyme';
import Counter from './Counter';

describe('<Counter />', () => {
	it('it matches snapshotp', () => {
		const wrapper = mount(<Counter/>);
		expect(wrapper).toMatchSnapshot();
	});

	/*
	여기서는 우리가 mount 대신에 shallow 라는 함수를 사용해주었다,
	shallow 는 컴포넌트 내부에 또다른 리액트 컴포넌트가 있다면 이를 렌더링하지 않습니다. 만약에 우리가 Profile 컴포넌트를 Counter 컴포넌트에서 렌더링 할 경우에는 shallow 의 경우 다음과 같은 결과가 나타나고,
	*/
	it('it has initial number', () => {
		const wrapper = shallow(<Counter/>);
		expect(wrapper.state().number).toBe(0);
	});
	it('increase', () => {
		const wrapper = shallow(<Counter/>);
		wrapper.instance().handleIncrease();
		expect(wrapper.state().number).toBe(1);
	});
	it('decrease', () => {
		const wrapper = shallow(<Counter/>);
		wrapper.instance().handleDecrease();
		expect(wrapper.state().number).toBe(-1);
	});
	it('calls handleIncrease', () => {
		const wrapper = shallow(<Counter/>);
		const plusButton = wrapper.findWhere( node => node.type() === 'button' && node.text() === "+1");
		plusButton.simulate('click');
		expect(wrapper.state().number).toBe(1);
	});
	it('calls handleDecrease', () => {
		const wrapper = shallow(<Counter/>);
		const minusButton = wrapper.findWhere(node =>
			node.type() === 'button' && node.text() === '-1'
		);
		minusButton.simulate('click');
		const number = wrapper.find('h2');
		expect(number.text()).toBe('-1');
	});
});
