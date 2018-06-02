var SM = (function(){	
	var _currentState = undefined,
		_listeners = [],
		_reducer = undefined,
		_init_action = '@@INIT_ACTION'

	function getState(){
		return _currentState;
	}

	function subscribe(listenerFn){
		_listeners.push(listenerFn);
	}

	function triggerChange(){
		_listeners.forEach(listenerFn => listenerFn());
	}

	function dispatch(action){
		var newState = _reducer(_currentState, action);
		if (newState === _currentState) return;
		_currentState = newState;
		triggerChange();
	}

	function createStore(reducer){
		_reducer = reducer;
		_currentState = reducer(_currentState, _init_action);
		return { getState, dispatch, subscribe };
	}

	function bindActionCreators(actionCreators, dispatch){
		var actions = {};
		for(let key in actionCreators){
			actions[key] = function(){
				let action = actionCreators[key].apply(undefined, arguments);
				dispatch(action);
			}
		}
		return actions;
	}

	return  { createStore, bindActionCreators };
})();