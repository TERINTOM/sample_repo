import { Box, Button } from "@mui/material";
import { useState } from "react";
import {storage} from "./Firebase";
import { ref,uploadBytes } from "firebase/storage";
import{v4} from 'uuid';

const Login = () => {

const[img,setImg]=useState(null)

const upd=(e)=>{
setImg(e.target.files[0])
}

const uploadImg=()=>{
if (img===null)return
const imgRef=ref(storage,`img/${img.name + v4()}`)
uploadBytes(imgRef,img).then(()=>{
  alert('image upload')
})
}

    return ( 
        <>
      <Box>
       <input type="file" onChange={upd}/>
       <Button onClick={uploadImg} >upload</Button>
      </Box>
        </>
     );
}
 
export default Login;