import React, { useState } from 'react'
import { useNavigate , Link} from 'react-router-dom'
import axios from "axios"


export default function Signup() {
  const [name, setName] = useState()
  const [password,setPassword] = useState()
  const [email,setEmail]=useState()
  function handleSubmit(event){
    event.preventDefault();
  }
   
  return (
    <>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <div className='login'>
      <div className="login-page ">
        <h1>Signup</h1>
        <form >
        <i class="fa-solid fa-user fa-2xl"></i><input type="email"  placeholder='Enter your username'onChange={(e)=>setName(e.target.value)} /><br/>
        <i class="fa-solid fa-lock fa-2xl"></i><input type="password" placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)} /><br/>
        <i class="fa-solid fa-envelope"></i><input type = "email" placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)}/><br/>
        </form>
        <button className ="btn " to = "/login">Login</button>
      </div>
    </div>
    </>
  )
}
