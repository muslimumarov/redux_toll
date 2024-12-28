import { useRef } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../action/todos"
const TodosForm = () => {
  const dispatch = useDispatch()
  const inputRef = useRef(null)
  const formSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo(
      {
        title: inputRef.current.value,
        id: 1,
        isDone: false
      }
    ));
  }
  return (
    <div className="card-body pl-5 mb-1">
      <form onSubmit={formSubmit}>
        <input
          ref={inputRef}
          className='border rounded-[5px] inline-block mr-60 border-black px-3  py-1'
          type="text"
          id="examplfor"
          placeholder='e.g. By eggs' />
        <button className='bg-green-700  inline-block text-[white] py-1 px-5 rounded-md'>add</button>
      </form>
    </div>

  )
}
export default TodosForm