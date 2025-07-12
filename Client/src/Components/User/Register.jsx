import React from 'react'
import { useContext,useState } from 'react'
import AppContext from '../../Context/AppContext.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { toast, Bounce } from 'react-toastify'
import '../Styles/Register.css'

const Register = () => {
        const{register}=useContext(AppContext)
    const navigate=useNavigate()

        const [formData,setformData]=useState({
        name:"",
        email:"",
        password:""
})
    const onChangeHandler=(e)=>{
const{name,value}=e.target;
setformData({...formData,[name]:value})

 

}
const submitHnader=async (e)=>{
         e.preventDefault();
    const {name,email,password}=formData;
    const result=await register(name,email,password)
if(result.success){

      toast.success(result.message, {
position: "top-right",
autoClose: 1500,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
navigate('/user/login')
return
    }
toast.error(result.message, {
position: "top-right",
autoClose: 1500,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
    }

  return (
    <div>
       <form onSubmit={submitHnader} class='form'>
      <div class="form-container" >
    <h2>Sign In</h2>
    <input name="name"  value={formData.name} onChange={onChangeHandler} type="text" placeholder="Full Name" required />
    <input name="email"  value={formData.email} onChange={onChangeHandler} type="email" placeholder="Email" required />
    <input name="password"  value={formData.password} onChange={onChangeHandler}type="password" placeholder="Password" required />
    <button>Register</button>
    <div class="form-switch">
      Already have an account?<Link to="/user/login">Login</Link>
    </div>
  </div>

    </form>
    </div>
  )
}

export default Register
