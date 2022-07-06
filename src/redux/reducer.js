 import {combineReducers} from 'redux';
 const initialState = {
    search: '',
    jobs: [
        {
            id: 1,
            name: 'viec 1',
            complete: false
        },
        {
            id: 2,
            name: 'viec 2',
            complete: false
        },
        {
            id: 3,
            name: 'viec 3',
            complete: false
        }
    ]
 }


   const rootReducer = (state = initialState, action) =>{
    console.log(state, action);
   switch(action.type){
    case 'ADDJOB': 
    return {
        ...state,
        jobs: [ ...state.jobs, action.payload ]
    }
   }
}

  export const reducer = combineReducers({ rootReducer

  })