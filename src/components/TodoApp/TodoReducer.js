
const initialState = {
  
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


  const todoReducer = (state = initialState, action) =>{
//    console.log(state,action);
  switch(action.type){
   case 'ADDJOB': 
   return  {
      
       jobs: [ ...state.jobs, action.payload ]
   }
  default: return state;
  }
}

 export default todoReducer;