
import {createSelector} from 'reselect';
export const jobsSelector = state => state.todoReducer.jobs;
export const searchText = state => state.rootReducer.search;

export const showTodo = createSelector(jobsSelector,searchText, (todoList, search)=>{
return todoList.filter((todo)=> {    
        return todo.name.includes(search);
});
});