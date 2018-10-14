import { combineReducers } from 'redux';
import { blocks, todos, subTodos } from './index';

const todoApp = combineReducers({
	blocks,
	todos,
	subTodos
})

export default todoApp;