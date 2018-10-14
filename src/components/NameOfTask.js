import React from 'react';

class NameOfTask extends React.Component{
  insertName(e){
		this.props.addNameOfBlock(this.props.block.id, e.target.value);
  }
  render(){
		const {block} = this.props;
    return(
      <h1 className="name_task cursor_style">
        {block.blockName ? block.blockName : (<input type="text" className="name" onBlur={this.insertName.bind(this)}/>)}
      </h1>
    )
  }
}

export default NameOfTask;