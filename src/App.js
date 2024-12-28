import React from 'react'
import "./app.css"
import TodosHeader from './components/todos-header'
import TodosForm from './components/todos-form'
import TodosItems from './components/todo-items'
import TodosFooter from './components/todod-footer'
const App = () => {
  return (
    <div className="container">
      <div className="wrap grid border-b-4 border-black  border rounded-[10px] mt-10 mx-auto w-[550px] h-[300px]">
        <TodosHeader/>
        <TodosForm/>
        <TodosItems/>
        <TodosFooter/>
      </div>
    </div>
  )
}

export default App







// import React from 'react'
// import "./app.css"

// const App = () => {
//   return (
//   <div className="container">
//       <div className="wrap grid  border rounded-[30px] mt-10 mx-auto border-black w-[600px] h-[300px]">


//         <ul className="pl-2 list-group list-group-flush  mb-8">
//           <li className="pl-2 list-group-item flex    pb-3">
//            <div className="mr-80">
//            <input className='mr-3' type="checkbox" id="flexCheckDefault"/>
//             <label htmlFor="flexCheckDefault">
//               defaul checkbox
//             </label>
//            </div>
//             <button className='px-3 rounded-[10px] py-2 bg-red-700'>Remove</button>
//           </li>
//         </ul>
//         <div className="pl-2 card-footer">
//           <button className=' bg-cyan-600 py-2 px-5 rounded-md'>save</button>
//         </div>
//       </div>
//   </div>
//   )
// }

// export default App
