import React, { Component } from 'react';

export class BugEdit extends Component{
	txtBugNameRef = React.createRef();
	constructor(props){
		super(props);
		this.onAddNewClick = this.onAddNewClick.bind(this);
	}
	onAddNewClick(){
		let newBugName = this.txtBugNameRef.current.value;
		this.props.addNew(newBugName);
	}
	render(){
		return(
			<section className="edit">
				<label htmlFor="">Bug :</label>
				<input type="text" ref={this.txtBugNameRef}/>
				<input type="button" value="Add New" onClick={this.onAddNewClick} />
			</section>
		)
	}
}