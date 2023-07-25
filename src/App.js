import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Adduser from './components/adduser/Adduser';
import User from './components/users/User';
import Interview from './components/interview/Interview';
import EditUser from './components/edituser/EditUser';

import {BrowserRouter,Routes,Route} from "react-router-dom"



function App() {
  return (
    <BrowserRouter>
    <Header/>
 <Routes>
  <Route path="/" element = {<Interview/>}/>
<Route path='/add' element={ <Adduser/>}/>
    
 <Route path="/user" element={<User/>}/>
 <Route path="edit/:id" element={<EditUser/>}/>
 </Routes>
    
    </BrowserRouter>

  );
}

export default App;
