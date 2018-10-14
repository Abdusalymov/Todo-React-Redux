import React from 'react';
import DropList from './DropList';
let uniqid = require('uniqid');

class ElementList extends React.Component{
	
  addSubTodo(){
		this.props.addSubTodo(this.props.todoId, uniqid());
  }
  
	removeTodo(){
		this.props.remove(this.props.todoId);
	}
  
	insertName(e){
		const { todoId, addNameOfTodo} = this.props;
		addNameOfTodo( todoId, e.target.value);
	}
	
  render(){
    return(
      <li className="child">
        <label>
          <input type="checkbox" className='checkbox'/>
          <span className="checkbox_custom"></span>
					{this.props.todoName ? this.props.todoName : 
						(<input type="text" onBlur={this.insertName.bind(this)}/>)}
        </label>
        <div>
          <span className='add' onClick={this.addSubTodo.bind(this)}>
						Add
					</span> 
          <span className='remove' onClick={this.removeTodo.bind(this)}>
						Remove
					</span>
        </div>
				{this.props.subTodoArr.length !== 0 && this.props.subTodoArr.map((item) => {
					let component;
						if(item.todoId === this.props.todoId){

							component =	(<DropList 
							 key={uniqid()} 
							 subTodoId={item.subTodoId}
							 subTodoName={item.subTodoName}
							 addNameSubTodo={this.props.addNameSubTodo}
							 removeSubTodo={this.props.removeSubTodo} 
							 />)
						}
						return component;
					})	 
			 	}
      </li>
    )
  }
}

export default ElementList;