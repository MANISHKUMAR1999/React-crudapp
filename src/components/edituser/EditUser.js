import styled from '@emotion/styled'
import { FormControl, FormGroup, InputLabel,Input ,Typography, Button} from '@mui/material'
import React, { useEffect, useState } from 'react'

import { addUser } from '../service/api'
import { getUser,editUser } from '../service/api'
import { useNavigate, useParams } from 'react-router-dom'

const Container = styled(FormGroup)`
width:50%;
margin:5%  auto 0 auto;
& > div{
  margin-top:20px;
}
`

const initialValue = {
  name:"",
  email:"",
  username:"",
  phone:""

}

const EditUser = () => {
  const[user,setUser] = useState(initialValue)
  const { name, username, email, phone } = user;

  const navigate = useNavigate()
  const {id} = useParams()

  //const [user, setUser] = useState(initialValue);

  useEffect(()=>{
    getUserData();
  },[])

  const getUserData = async()=>{
    let response = await getUser(id)
    setUser(response.data)
   // console.log(response)

  }

  const onValueChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
}

const addUserDetails = async()=>{
  await editUser(user,id)
  navigate("/user")

}

  
  return (
    <Container>
    <Typography variant="h4">Add User</Typography>
    <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
    </FormControl>
    <FormControl>
        <InputLabel htmlFor="my-input">Username</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
    </FormControl>
    <FormControl>
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
    </FormControl>
    <FormControl>
        <InputLabel htmlFor="my-input">Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
    </FormControl>
    <FormControl>
        <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Edit User</Button>
    </FormControl>
</Container>
   
  )
}

export default EditUser