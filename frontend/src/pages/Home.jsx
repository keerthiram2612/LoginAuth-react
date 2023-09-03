import React from 'react'
import { useLocation, useNavigate } from 'react-router'

export default function Home() {
  const location =useLocation()
  
   
  return (
    <div>
      <h1> Welcome!</h1>
    </div>
  )
}
