import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Wrapper from './components/Wrapper'

const Todo = ()=> <div className="wrapper_todo"><Wrapper/></div>
ReactDOM.render(<Todo/>, document.getElementById('root'));