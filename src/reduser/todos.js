import { TODO } from "../constans/todos"

const initialState =[]

const todos = (state = initialState, action) => {
  switch(action.type) {
   case TODO.ADD_TODO:
   return[
     ...state,
     action.payload
   ]
   case TODO.REMOV:
     return state.filter(item => item.id !== action.payload.id)
   default:
   return state
  }
}

export default todos