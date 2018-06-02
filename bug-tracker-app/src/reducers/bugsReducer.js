export function bugsReducer(currentState = [], action){
	if (action.type === 'INIT'){
		return action.payload;
	}
	if (action.type === 'ADD_NEW'){
		let newBug = action.payload;
		let newState = [...currentState, newBug];
		return newState;
	}
	if (action.type === 'UPDATE'){
		let {oldBug, newBug} = action.payload;
		let newState = currentState.map(bug => bug === oldBug ? newBug : bug);
		return newState;
	}
	if (action.type === 'REMOVE'){
		let bugsToRemove = action.payload;
		let newState = currentState.filter(bug => bugsToRemove.indexOf(bug) === -1);
		return newState;
	}
	if (action.type === 'REPLACE'){
		let newState = [...action.payload];
		return newState;
	}
	return currentState;
}