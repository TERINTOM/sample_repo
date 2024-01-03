import { useRef, useState } from "react";

const Drag = () => {
  const [fruititem,setFruit]=useState(['apple','orange','bannana']);
  const dragItem=useRef(null)
  const dragOveritem=useRef(null)

  const handlesort=()=>{
  let fruit=[...fruititem]

  const draggedcontent=fruit.splice(dragItem.current,1)[0]
  fruit.splice(dragOveritem.current,0,draggedcontent)

  dragItem.current=null
  dragOveritem.current=null

  setFruit(fruit)
  }

  return ( 
  fruititem.map((item,index)=>(
   <div key={index} style={{backgroundColor:"aquamarine",margin:'auto',width:'300px',cursor:'move'}} draggable
   onDragStart={()=>dragItem.current=index}
   onDragEnter={()=>dragOveritem.current=index}
   onDragEnd={handlesort}
   > 
    <h1>{item}</h1>
   </div>
  ))
   );
}
 
export default Drag;