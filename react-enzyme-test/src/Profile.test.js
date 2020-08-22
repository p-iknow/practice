import React from 'react';
import { mount } from 'enzyme';
import Profile from './Profile';

describe('<Profile />', () => {
	it('matches snapshot', () => {
		const wrapper = mount(<Profile userName="P-iknow" name="이영창" />);
		expect(wrapper).toMatchSnapshot();
	});

	it('it render with userName and name', () => {
		const wrapper = mount(<Profile userName="P-iknow" name="이영창" />);
		expect(wrapper.props().userName).toBe('P-iknow');
		expect(wrapper.props().name).toBe('이영창');

		const boldElement = wrapper.find('b');
		expect(boldElement.contains('P-iknow')).toBe(true);
		const spanElement = wrapper.find('span');
    expect(spanElement.text()).toBe('(이영창)');

	});
});
