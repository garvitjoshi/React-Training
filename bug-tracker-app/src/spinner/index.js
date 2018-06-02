import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import spinnerActionCreators from './actions';

class Spinner extends Component{
	state={ delta : 1};
	render(){
		let { value, increment, decrement } = this.props;
		return(
			<div>
				<input type="number" onChange={evt => this.setState({delta : evt.target.valueAsNumber})} />
				<input type="button" value="DECREMENT" onClick={() => decrement(this.state.delta)}/>
				<span> [ {value} ] </span>
				<input type="button" value="INCREMENT" onClick={() => increment(this.state.delta)}/>
			</div>
		)
	}
}

/*
function mapStateForSpinnerToProps(state){
	let spinnerValue = state.spinnerData;
	return { value : spinnerValue};
}

function mapDispatchToActionForSpinner(dispatch){
	var spinnerActions = bindActionCreators(spinnerActionCreators, dispatch);
	return spinnerActions;
}

export default connect(mapStateForSpinnerToProps, mapDispatchToActionForSpinner)(Spinner);
*/

export default connect(
	(state) => ({value : state.spinnerData}), 
	(dispatch) => bindActionCreators(spinnerActionCreators, dispatch)
)(Spinner);









