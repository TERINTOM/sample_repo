
import { useForm } from "react-hook-form";

// type formvalues={
//     usernam:string,
//     email:string,
//     channel:string,
// }

const Field = () => {
    

  const form= useForm()
  const{register,handleSubmit,formState}=form
  const{errors}=formState

  const onSubmit=(data)=>{
    console.log("form submitted",data)
  }

    return ( 
        <>
     
       <form onSubmit={handleSubmit(onSubmit)}>
        <div>
        <label>name</label>
        <input type="text" placeholder="name" name="name" id="name"
        {...register("name",
        {required:{
        value:true,
        message:'username is required',}
              })} />
              <p>{errors.username?.message}</p>
        </div>


        <div>
        <label>email</label>
        <input type="email" placeholder="email" name="email" id="email" {...register("email",
        {required:{
            value:true,
            message:"email is required"
        }})}/>
        <p>{errors.email?.message}</p>
        </div>
        
        <div>
        <label>password</label>
        <input type="password" placeholder="password" name="password" id="password" {...register("password")}/>
        </div>
        <div>
        <label>role</label>
        <input type="text" placeholder="role" name="role" ref={register}/>
        </div>
        <div>
            <button>submit</button>
        </div>
       </form>
       
     
       
        </>
     );
}
 
export default Field;