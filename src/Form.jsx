import React from 'react'
import { useState } from 'react'
function Form() {
const [name,setName]=useState('')
const[a,setA]=useState([])

const Add=()=>{
    setA([...a,name])
}

  return (
    <div>
        <div>
            <h1>name:</h1>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
            <button onClick={Add} >Add</button>
            <h1>{a.map((a)=>{
                return(
                    <li>{a}</li>
                )
            })}</h1>
           
        </div>
    </div>
  )
}

export default Form