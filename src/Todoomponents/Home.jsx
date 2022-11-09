import React from 'react'
import { useState } from 'react'
import edit from './img/edit.png'
import delet from './img/delete.png'
import Filter from './Filter'



const Home = () => {
    const  [taskInput , SettaskInput]= useState("")
    const  [ todoList , Settodolist]  = useState([])

    const add =()=>{
        todoList.push({desc:taskInput})
        Settodolist(todoList)
        SettaskInput("")
    }

  return (
    <>
    <div className = 'mainContainer'>
    <Filter/>
        <div className='center-container'>
            <h1>ToDO list 📌</h1>
            <input placeholder='Enter todo item'value={taskInput} onChange={(event)=> SettaskInput(event.target.value)}/>
            <button onClick={add}>Add ➕</button>
            
                {todoList?.length ? todoList.map((todoObject , index)=><ListItem/>)
                :
                <p>No TODO item Added !</p>}
            
           


        </div>
        
        </div>
    </>
  )
}

function ListItem(props){
    return (
        <div className='list-item row jc-space between'>
            <span>List Item</span>
            <img src={edit} className="editicon"/>
            <img src={delet} className="deleteicon"/>

            </div>
    )
}

export default Home