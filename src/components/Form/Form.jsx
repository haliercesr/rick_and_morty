import style from "../Form/Form.module.css"
import {useState} from "react"
import Validate from "./validation.js"

export default function Form (props){

    const [user,setData]=useState(
        {email:"",
        password:""
    })

    const [errors,setErrors]=useState({})

    function handleChange(e){
        const property=e.target.value
        const name=e.target.name
        setData({...user,[name]:property})
        setErrors(Validate({...user,[name]:property}))
        
    }
   
   
    
    return <div className={style.contenedor}>
             <form className={style.forms}>
               <div>
               <label>Email</label>
               <input name="email" onChange={handleChange} />
               <p className={style.p1}>{errors.email}</p>
               </div>
               <div>
               <label>Password</label>
               <input type="password" name="password" onChange={handleChange}/>
               <p className={style.p1}>{errors.password}</p>
               </div>
               <button>Submit</button>
             </form>
           </div>;
   
}

