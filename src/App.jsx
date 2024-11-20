import { useState } from "react"
import "./style.css"

export default function App (){
  const[newItem, setnewItem] = useState("")
  //setnewItem ('sfdjgh')


  return ( 
    <>
  <form className="new-item-form">
    <div className="form-row">
      <label htmlFor="new-item">New Item</label>
      <input
       value ={newItem} 
       onChange= {e => setnewItem(e.target.value)}
       type="text" 
       id="item"
     />
    </div>

    <button className="btn">Add Task</button>

  </form>

   <h1 className="header">Todo List</h1>
   <ul className="list">
    <li>
      <label htmlFor="">
        <input type="checkbox" />
        Item 1
      </label>
       <button className="btn-btn-danger">Delete</button>

    </li>

    <li>
      <label htmlFor="">
        <input type="checkbox" />
        Item 2
      </label>
       <button className="btn-btn-danger">Delete</button>

    </li>



   </ul>



  </>
  )
}

