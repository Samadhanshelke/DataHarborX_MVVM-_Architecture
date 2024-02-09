
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Page/HomePage'
import Navbar from './components/common/Navbar'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import {Toaster} from 'react-hot-toast';
import PrivateRoute from './Auth/PrivateRoute'
import VerifyEmail from './Page/VerifyEmail'
import ForgotPassword from './Page/ForgotPassword'
import RessetPassword from './Page/RessetPassword'
import DashBoard from './Page/DashBoard'
import CreateUser from './Page/CreateUser'
import UpdateUser from './Page/UpdateUser'
import useModeController from './view-controllers/ModeController'
import About from './Page/About'


function App() {

  const {mode} = useModeController();
 
  
  
  return (
    <div data-theme={mode} className='main_div'>
      <BrowserRouter>
       <Navbar/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/about' element={<About/>}/>
           
            <Route path='/verify-email' element={
                  <VerifyEmail/> 
            }/>

            <Route path='/reset-password' element={
             
                   <ForgotPassword/>
             
            }/>
            <Route path='/reset-password/:id' element={
              
                     <RessetPassword/>
               
            }/>
            <Route path='/dashboard' element={
               <PrivateRoute>
                   <DashBoard/>
       
               </PrivateRoute>
            }/>
            <Route path='/createUser' element={
                  <PrivateRoute>
                       <CreateUser/>

                  </PrivateRoute>
            }/>
            <Route path='/edituser/:id' element={
               <PrivateRoute>

                     <UpdateUser/>
               </PrivateRoute>
            }/>  

        </Routes>
      </BrowserRouter>
     <Toaster/>
    </div>
  )
}

export default App
