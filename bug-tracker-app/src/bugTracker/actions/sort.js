function getDescendingComparerFor(comparer){
	return function(p1, p2){
		return comparer(p1, p2) * -1;
    }
}

function getComparerFor(attrName){
	return function(p1, p2){
        if (p1[attrName] < p2[attrName]) return -1;
        if (p1[attrName] > p2[attrName]) return 1;
        return 0;
    }
}

export function sort(sortBy, isDescending = false){
	return function(dispatch, getState){
		let comparer = getComparerFor(sortBy);
		if (isDescending)
			comparer = getDescendingComparerFor(comparer);
		let bugs = getState().bugsData;
		bugs.sort(comparer);
		let action = { type : 'REPLACE', payload : bugs};
		dispatch(action);
	}
}