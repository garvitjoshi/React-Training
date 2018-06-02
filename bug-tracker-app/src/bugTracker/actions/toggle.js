import axios from 'axios';

export function toggle(bugToToggle){
	return function(dispatch){
		let toggledBugData = {...bugToToggle, isClosed : !bugToToggle.isClosed};
		axios.put('http://localhost:3030/bugs/' + toggledBugData.id, toggledBugData)
			.then(response => response.data)
			.then(toggledBug => dispatch({type : 'UPDATE', payload : {oldBug : bugToToggle, newBug : toggledBug}}));
	}
}