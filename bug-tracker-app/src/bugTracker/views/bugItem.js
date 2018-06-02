import React from 'react';

/*class BugItem extends PureComponent{
	constructor(props){
		super(props);
		this.onBugNameClick = this.onBugNameClick.bind(this);
	}
	onBugNameClick(){
		this.props.toggle(this.props.bug);
	}
	render(){
		let { bug } = this.props; 
		return(
			<li>
				<span  className={bug.isClosed ? 'bugname closed' : 'bugname'} onClick={this.onBugNameClick}>{bug.name}</span>
				<div>[ {bug.isClosed.toString()} ]</div>
				<div className="datetime">[Created At]</div>
			</li>
		)
	}
}*/

export function BugItem({bug, toggle}){
	return(
		<li>
			<span  className={bug.isClosed ? 'bugname closed' : 'bugname'} onClick={() => toggle(bug)}>{bug.name}</span>
			<div>[ {bug.isClosed.toString()} ]</div>
			<div className="datetime">[Created At]</div>
		</li>
	)
}