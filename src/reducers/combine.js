import { combineReducers } from 'redux';
import todos from './index';

const todoApp = combineReducers({
	todos
})

export default todoApp;