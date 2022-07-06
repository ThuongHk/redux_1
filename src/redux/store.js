import {createStore} from 'redux';
// import {rootReducer} from './reducer';
import {reducer} from './reducer';

import {composeWithDevTools} from 'redux-devtools-extension';

const composedEnhancers = composeWithDevTools();

const store = createStore(reducer);
export default store;