import { useSelector } from "react-redux"
import TodosItem from "./todo-item"

const TodosItems = () => {
  const todos = useSelector(state => state.todos)
  return (
    <ul className="pl-2 list-group list-group-flush  ">
      {
       todos.length > 0 ? todos.map(item => (
          <TodosItem text={item.text} key={item.id} id={item.id} />
        )): (<h1 className="text-3xl text-center">Todod not created yet</h1>)
      }
    </ul>     
  )
}
export default TodosItems