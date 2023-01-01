import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
     <nav className='navbar'>
     <h3><Link to="/">PhotoShare</Link></h3>
     <div className='nav__BtnGroup'>
         <Link to='/user/photos' style={{ marginRight: "10px" }}>
             My Photos
         </Link>
         <Link to='/photo/upload'>Upload Photo</Link>
     </div>
 </nav>
  )
}
