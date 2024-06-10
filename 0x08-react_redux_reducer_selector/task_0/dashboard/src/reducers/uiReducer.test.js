import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
import { SELECT_COURSE } from '../actions/courseACtionTypes';

describe('tests for uiReducer', () => {
	const initialState = {
		isNotificationDrawerVisible: false,
		isUserLoggedIn: false,
		user: {},
	};

	it('should return initial state when no action is passed', () => {
		expect(uiReducer(initialState, 'null')).toEqual(initialState);
	});

	it('should return initial state when wrong action is passed', () => {
		expect(uiReducer(initialState, { type: SELECT_COURSE })).toEqual(
			initialState
		);
	});

	it('should change state correctly when action is passed', () => {
		expect(
			uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER })
		).toEqual({ ...initialState, isNotificationDrawerVisible: true });
	});
});