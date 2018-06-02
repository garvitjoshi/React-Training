import React, { Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { BugStats } from './views/bugStats';
import { BugSort } from './views/bugSort';
import { BugEdit } from './views/bugEdit';
import { BugList } from './views/bugList';
import bugActionCreators from './actions';

class BugTracker extends Component{
	componentDidMount(){
		this.props.load();
	}
	render(){
		let { model : bugs, addNew, toggle, removeClosed, sort } = this.props;
		return(
			<div>
				<BugStats bugs={bugs} />
				<BugSort sort={sort} />
				<BugEdit addNew={addNew} />
				{/*<BugList bugs={bugs} removeClosed={removeClosed} toggle={toggle} />*/}
				<BugList {...{bugs, removeClosed, toggle}} />
			</div>
		)
	}
}

function mapStateForBugTrackerToProps(state){
	/*let bugs = state.bugsData.filter((bug, index) => index % 2 === state.spinnerData % 2);*/
	let bugs = state.bugsData;
	return { model : bugs };
}

function mapDispatchToActionForBugTracker(dispatch){
	let bugActions = bindActionCreators(bugActionCreators, dispatch);
	return bugActions;
}

export default connect(mapStateForBugTrackerToProps, mapDispatchToActionForBugTracker)(BugTracker);










