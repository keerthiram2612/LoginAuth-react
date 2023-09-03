import React, { useState } from 'react'
import { useNavigate , Link} from 'react-router-dom'
import axios from "axios"


export default function Login() {
   const navigate = useNavigate();
   const handle=()=>{
       navigate('/signup')
   }
 
  return (
    <>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <div className='login'>
      <div className="login-page ">
        <h1>Login</h1>
        <form >
        <i class="fa-solid fa-user fa-2xl"></i><input type="email"  placeholder='Enter your username'/><br/>
        <i class="fa-solid fa-lock fa-2xl"></i><input type="password" placeholder='Enter password' /><br/>
        </form>
        <button onClick={handle} className ="btn ">Create an account</button>
      </div>
    </div>
    </>
  )
}
