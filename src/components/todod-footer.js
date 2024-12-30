import { useSelector } from "react-redux"

const TodosFooter = () => {
  const itemSave = useSelector(state => state.todos)
  const handSave = () => {
    localStorage.setItem('todos', JSON.stringify(itemSave))
  }
  return (
    <div className="pl-2 card-footer">
    <button className=' bg-cyan-600 ml-2 py-2 px-5 rounded-md' onClick={handSave}>save</button>
  </div>
  )
}
export default TodosFooter