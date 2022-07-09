 import {combineReducers} from 'redux';
 import searchReducer from '../components/Search/searchReducer';
 import todoReducer from '../components/TodoApp/todoReducer';
 
  const rootReducer = combineReducers({
    search: searchReducer,
    todo: todoReducer,
  })

  export default rootReducer;