import { TODO } from "../constans/todos"

export  const addTodo = (todoitem) => {
  return {
    type: TODO.ADD_TODO,
    payload: {
      ...todoitem
    }
  }
}
export const removTodo = (id) => {
  console.log(id);
  return {
    type: TODO.REMOV,
    payload: {
      id
    }
  }
}