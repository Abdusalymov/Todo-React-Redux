import { combineReducers } from 'redux';
import { todos, todo } from './index';

const todoApp = combineReducers({
	todos,
	// todo
})

export default todoApp;