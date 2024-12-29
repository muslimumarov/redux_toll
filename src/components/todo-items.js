import { useSelector } from "react-redux"
import TodosItem from "./todo-item"

const TodosItems = () => {
  const todos = useSelector(state => state.todos)
  return (
    <ul className="px-8 ml-5  max-w-[500px] max-h-[200px] overflow-y-auto list-group list-group-flush border border-black  mb-3">
      {
       todos.length > 0 ? todos.map(item => (
          <TodosItem title={item.title} key={item.id} id={item.id} />
        )): (<h1 className="text-3xl text-center">Todod not created yet</h1>)
      }
    </ul>
  )
}
export default TodosItems