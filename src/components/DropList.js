import React from 'react';

class DropList extends React.Component{

  insertNameSubTodo(e){
		this.props.addNameSubTodo(this.props.subTodoId, e.target.value);
	}
	
  removeSubTodo(){
    this.props.removeSubTodo(this.props.subTodoId);
	}
	
  render(){
    return(
      <ul className="drop_list">
        <li className='child'>
          <label>
            <input type="checkbox" className='checkbox'/>
            <span className="checkbox_custom"></span>
            {this.props.subTodoName ? this.props.subTodoName : (<input type="text" onBlur={this.insertNameSubTodo.bind(this)}/>)}
          </label>
          <span className='remove' onClick={this.removeSubTodo.bind(this)}>
						Remove
					</span>
        </li>
      </ul>
    )
  }
}
export default DropList;