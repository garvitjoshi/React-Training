import React, { Component } from 'react';

export class BugSort extends Component{
	selectSortBy = React.createRef();
	chkDescending = React.createRef();

	constructor(props){
		super(props);
		this.onSortChange = this.onSortChange.bind(this);
	}
	onSortChange(){

		let sortBy = this.selectSortBy.current.value,
			isDescending = this.chkDescending.current.checked;
		if (sortBy)
			this.props.sort(sortBy, isDescending);
	}
	
	render(){
		return(
			<section className="sort">
				<label htmlFor="">Order By :</label>
				<select ref={this.selectSortBy} onChange={this.onSortChange}>
					<option value=""></option>
					<option value="name">Name</option>
					<option value="isClosed">Status</option>
				</select>
				<label htmlFor="">Descending ? :</label>
				<input type="checkbox" ref={this.chkDescending}  onChange={this.onSortChange}/>
			</section>
		)
	}
}