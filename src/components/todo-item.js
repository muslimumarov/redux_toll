const TodosItem = ({id, text}) => {
  return (
    <li className="pl-2 pr-3 list-group-item justify-between flex pb-3">
      <div className="">
        <input className='mr-3' type="checkbox" id="flexCheckDefault" />
        <label className="text-black" htmlFor="flexCheckDefault">
          {text}
        </label>
      </div>
      <button className='px-3 rounded-[10px] text-white py-2 bg-red-700'>Remove</button>
    </li>
  )
}
export default TodosItem