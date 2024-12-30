import { useDispatch } from "react-redux"
import { markDone, removTodo } from "../action/todos"

const TodosItem = ({ id, title }) => {
  const dispatch = useDispatch()
  const handleChange = (e) => {
    dispatch(markDone(
      {
        id,
        title,
        isDone: e.target.checked,
      }
    ))
  }
  return (
    <li className="pl-2 pr-3 mb-2 border border-black items-center list-group-item justify-between  flex ">
      <div className="">
        <input className='mr-3 ' type="checkbox" id="flexCheckDefault" onChange={handleChange} />
        <label className="text-black " htmlFor="flexCheckDefault">
          {title}
        </label>
      </div>
      <button onClick={() => dispatch(removTodo(id))} className='px-3 m-1 rounded-[10px] text-white py-1 bg-red-700'>Remove</button>
    </li>
  )
}
export default TodosItem