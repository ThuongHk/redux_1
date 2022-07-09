
const initialState = {
   search: '',
  
}


  const searchReducer = (state = initialState, action) =>{
//    console.log(state,action);
  switch(action.type){
  
   case 'SEARCHJOB':
       return {
            search: action.payload
       }
   default: return state
  }
}

 export default searchReducer;