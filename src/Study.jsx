import { useState } from "react";

const Study = () => {

   const[data,setData]=useState([{fname:'',lname:''}])


    const handleClick=()=>{
        setData([...data, { fname: '', lname: '' }]);
    }

    const handleChange=(e,i)=>{
     const{name,value}=e.target
     const onChangevalue=[...data]
     onChangevalue[i][name]=value
     setData(onChangevalue)
    }

    const handleDelete=(i)=>{
     const deletevalue=[...data]
     deletevalue.splice(i,1)
     setData(deletevalue)
    }

    return (  

        <>
        <div>
        <button onClick={handleClick}>add</button>
        {
            data.map((val,i)=>{
             return(
             <div>
                <input name="fname" value={val.fname} onChange={(e)=>handleChange(e,i)} placeholder="questio"/>
                <input name="lname" value={val.lname} onChange={(e)=>handleChange(e,i)}/>
                <button onClick={()=>handleDelete(i)}>delete</button>
              </div>
              ) 
            })
        }
        </div>

        </>
    );
}
 
export default Study;