export function removeClosed(){
	return function(dispatch, getState){
		let bugs = getState().bugsData;
		let openBugs = bugs.filter(bug => !bug.isClosed);
		let action = { type : 'REPLACE', payload : openBugs};
		dispatch(action);
	}
}

/* update the above to remove the closed bugs from the server*/