import { createStore, combineReducers, applyMiddleware } from 'redux';
import { bugsReducer, spinnerReducer } from '../reducers';
import thunk from 'redux-thunk'

let rootReducer = combineReducers({
	spinnerData : spinnerReducer,
	bugsData : bugsReducer
});

let appStore = createStore(rootReducer, applyMiddleware(thunk));

export default appStore;