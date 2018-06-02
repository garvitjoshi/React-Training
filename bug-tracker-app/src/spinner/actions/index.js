export let spinnerActionCreators = {
	increment(delta){
		var action = {type : 'INCREMENT', payload : delta};
		return action;	
	},
	decrement(delta){
		var action = {type : 'DECREMENT', payload : delta};
		return action;
	},
};
export default spinnerActionCreators;
