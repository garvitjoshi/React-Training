import React, { Component } from 'react';
import { BugItem } from './bugItem';

export class BugList extends Component{
	constructor(props){
		super(props);
		this.onRemoveClosedClick = this.onRemoveClosedClick.bind(this);
	}
	onRemoveClosedClick(){
		this.props.removeClosed();
	}
	render(){
		let { bugs } = this.props;
		let bugItems = bugs.map((bug, index) => (
				<BugItem bug={bug} key={index} toggle={this.props.toggle}/>
			));
		return(
			<section className="list">
				<ol>
					{bugItems}
				</ol>
				<input type="button" value="Remove Closed" onClick={this.onRemoveClosedClick} />
			</section>
		)
	}
}