import React from 'react'
import "./app.css"

const App = () => {
  return (
  <div className="container">
      <div className="wrap  border rounded-[30px] mt-10 mx-auto border-black w-[600px] h-[300px]">
        <div className="p-4 rounded-tl-[30px] rounded-tr-[30px]    bg-slate-300 card-header">
        <h1 className=''>todos 0</h1>
        </div>
        <div className="card-body mb-8">

        </div>

        <ul className="list-group list-group-flush mb-8">
          <li className="list-group-item border  pb-3">An item</li>
          <li className="list-group-item border  pb-3">A second  item</li>
          <li className="list-group-item border pb-3">A third item</li>
        </ul>    
        <div className="card-footer">
          <button className='bg-cyan-600 py-2 px-5 rounded-md'>save</button>
        </div>
      </div>
  </div>
  )
}

export default App
