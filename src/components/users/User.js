import { TableBody, TableCell, TableHead, TableRow,Table,styled, Button } from '@mui/material'
import React, { useEffect,useState } from 'react'
import { getAllUser,deleteUser } from '../service/api'
import { Link,useParams } from 'react-router-dom';



const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 28px;
    }
`;


const User = () => {

  useEffect(()=>{
    getUserDetails()

  },[])

  const [users,setUsers] = useState([])

  //let {id} = useParams()

  const getUserDetails = async()=>{
    let response = await getAllUser()
    console.log(response.data)
    setUsers(response.data)
  }

  

  const deleteUserData = async(id)=>{
  await deleteUser(id)
    getUserDetails()
    

  }

  const tableHeader = ['ID','Name','UserName','Eamil','Phone']
  return (
   <StyledTable>
    <TableHead>
      <THead>
        {tableHeader.map((header,index)=>(
          <TableCell key={index}>{header}</TableCell>
        ))}
        <TableCell></TableCell>
      </THead>
     
    </TableHead>
    <TableBody>
      {users.map((user)=>(
        <TRow key={user.id}>
          <TableCell>{user.id}</TableCell>
          <TableCell>{user.name}</TableCell>
          <TableCell>{user.username}</TableCell>
          <TableCell>{user.email}</TableCell>
          <TableCell>{user.phone}</TableCell>
          <TableCell>
           <Link to={`/edit/${user.id}`}><Button variant='contained' style={{marginRight:10}} >Edit</Button></Link> 
           <Link to={`/user`}> <Button variant='contained' color='secondary' onClick={() => deleteUserData(user.id)}>Delete</Button></Link>
          </TableCell>
        </TRow>
        
      ))}
    </TableBody>
   </StyledTable>
  )
}

export default User