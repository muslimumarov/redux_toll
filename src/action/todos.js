import { TODO } from "../constans/todos"

export const addTodo = (todoitem) => {
  return {
    type: TODO.ADD_TODO,
    payload: {
      ...todoitem
    }
  }
}
export const removTodo = (id) => {
  return {
    type: TODO.REMOV,
    payload: {
      id
    }
  }
}
export const markDone = (todoitem) => {
  return {
    type: TODO.MARK_TODO_DONE,
    payload: {
      ...todoitem
    }
  }
}
export const initial = (todos) => {
  return {
    type: TODO.INIT,
    payload: todos
  }
}