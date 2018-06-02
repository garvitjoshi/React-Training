export function removeClosed(bugs){
	let openBugs = bugs.filter(bug => !bug.isClosed);
	let action = { type : 'REPLACE', payload : openBugs};
	return action;
}