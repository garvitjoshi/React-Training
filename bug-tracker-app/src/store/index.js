import { createStore, combineReducers } from 'redux';
import { bugsReducer, spinnerReducer } from '../reducers';

let rootReducer = combineReducers({
	spinnerData : spinnerReducer,
	bugsData : bugsReducer
});

let appStore = createStore(rootReducer);

export default appStore;