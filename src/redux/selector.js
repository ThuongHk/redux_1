
import {createSelector} from 'reselect';
export const jobsSelector = state => state.rootReducer.jobs;
console.log(jobsSelector);
export const searchText = state => state.search;
console.log(searchText);

export const showTodo = createSelector(jobsSelector,searchText, (todoList, search)=>{
return todoList.filter((todo)=> {
    return todo.name.includes(search);
});
});