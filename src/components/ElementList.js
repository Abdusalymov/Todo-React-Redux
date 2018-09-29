import React from 'react';
import DropList from './DropList';

class ElementList extends React.Component{
	state = {text: false,
					elem: []
	}
  appChild(){
    const {elem} = this.state;
    this.setState({elem: elem.concat(elem.length)});
  }
  handleChange(e){
    let value = e.target.value;
    this.setState({text: value})
	}
	removeElementList(){
		this.props.remove(this.props.ident);
	}
  remove(i){
    const {elem} = this.state;
    elem.splice(i, 1);
    this.setState({elem: elem});
  }
  render(){
		const {text} = this.state;
    return(
      <li className="child">
        <label>
          <input type="checkbox" className='checkbox'/>
          <span className="checkbox_custom"></span>
          {text ? text : (<input type="text" onBlur={this.handleChange.bind(this)}/>)}
        </label>
        <div>
          <span className='add' onClick={this.appChild.bind(this)}>Add</span>
          <span className='remove' onClick={this.removeElementList.bind(this)}>Remove</span>
        </div>
				{this.state.elem.map((item, index) => 
					(<DropList key={item} ident={index} remove={this.remove.bind(this)}/>))
				}
      </li>
    )
  }
}

export default ElementList;