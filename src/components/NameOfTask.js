import React from 'react';

class NameOfTask extends React.Component{
  insertName(e){
		this.props.addNameOfBlock(this.props.parent.id, e.target.value);
  }
  render(){
		const {parent} = this.props;
    return(
      <h1 className="name_task cursor_style">
        {parent.name ? parent.name : (<input type="text" className="name" onBlur={this.insertName.bind(this)}/>)}
      </h1>
    )
  }
}

export default NameOfTask;