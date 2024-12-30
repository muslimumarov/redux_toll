
const TodosHeader = ({length}) => {
  return (
      <div className="px-2 rounded-tl-[10px] rounded-tr-[10px] border-t-transparent border-l-transparent border-r-transparent border border-b-2 border-black w-full h-[70px] mb-4 bg-slate-300 card-header">
        <h1 className='text-[30px] pt-2'>Todos: {length}</h1>
      </div>
  )
}
export default TodosHeader