import React from 'react';

class DropList extends React.Component{
	state = {text: false}
  handleChange(e){
    let value = e.target.value;
    this.setState({text: value})
  }
  removeDropList(){
    this.props.remove(this.props.ident);
  }
  render(){
		const {text} = this.state;
    return(
      <ul className="drop_list">
        <li className='child'>
          <label>
            <input type="checkbox" className='checkbox'/>
            <span className="checkbox_custom"></span>
            {text ? text : (<input type="text" onBlur={this.handleChange.bind(this)}/>)}
          </label>
          <span className='remove' onClick={this.removeDropList.bind(this)}>
						Remove
					</span>
        </li>
      </ul>
    )
  }
}
export default DropList;