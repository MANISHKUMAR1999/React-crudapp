import React from 'react'
//import "./header.scss"
import {AppBar , Toolbar, Typography,styled} from "@mui/material"
import { Link } from 'react-router-dom'
import "./header.css"

const Navbar = styled(AppBar)`
background:#000000

`

const Tabs = styled(Typography)`
margin-right:20px;
font-size:20px;
cursor:pointer;
color:inherit;
text-decoration:none;
`
const Header = () => {
  return (
    <div>
      <Navbar position='static'>
        <Toolbar>
          <Link to="/" className='link'><Tabs >Home</Tabs></Link>
        <Link to="/user" className='link'> <Tabs >All User</Tabs></Link>  
        <Link to="/add" className='link'><Tabs >Add User</Tabs></Link>  
        </Toolbar>
      </Navbar>
    </div>
  )
}

export default Header