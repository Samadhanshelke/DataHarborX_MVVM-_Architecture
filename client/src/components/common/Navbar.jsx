
import { Link} from 'react-router-dom'
import { CiLight,CiDark } from "react-icons/ci";
import Profile from './Profile'
import Button from '@mui/material/Button';

import Sidebar from './Sidebar'

import { GiHamburgerMenu } from 'react-icons/gi';
import useNavbarController from '../../view-controllers/NavbarController';
import useModeController from '../../view-controllers/ModeController';
const Navbar = () => {
  const { open,token,toggleSidebaar,closeSidebar} = useNavbarController()
 const {handleSelectedTheme,mode} = useModeController();
   
   
  return (
    <div className='border-b'>
    <div className={`${open===true ? 'w-full' :'w-11/12'} m-auto  h-14 flex justify-between  items-center`}>
          <div>
             
             <span className={`text-2xl font-semibold tracking-wider ml-0.5`}>DataHarborX</span>
          </div>
          <div className={` hidden sm:flex gap-x-6 text-lg`}>
             <Link to={"/"}>
                Home
             
             </Link>
             <Link to={"/Dashboard"} >
                   DashBoard
             
             </Link>
             
             <Link to={"/about"} >
                 About
              
             </Link>
             
          </div>
          
          { token !== null
             ? <Profile/>
             :<div className='relative'>
             <div className='hidden cursor-pointer sm:flex justify-center items-center gap-x-6 text-lg'>
             {
              
                   mode === 'dark' ? <CiLight className='text-2xl' onClick={()=>handleSelectedTheme('light')}/>
                      : <CiDark className='text-2xl' onClick={()=>handleSelectedTheme('dark')}/>
            
             }
             <Link to="/login">
                <Button variant="contained" >Login</Button>
             </Link>
             <Link to="/signup" >
                <Button variant="outlined" size="medium">Signup</Button>
             </Link>
            </div>
            <GiHamburgerMenu className="flex sm:hidden  text-2xl" onClick={toggleSidebaar}/>
              {
                open && <Sidebar toggleSidebaar={toggleSidebaar} closeSidebar={closeSidebar}/>
              }
            </div>
          }  
    </div>
</div>
)
}

export default Navbar
  

//    // <div className={`${isdarkmode ? 'bg-white text-black navbar border-b': 'bg-[#111c1e] text-white border-b navbar'}`}>
//    <div>
//          <div className={`${open===true ? 'w-full' :'w-11/12'} m-auto  h-14 flex justify-between items-center`}>
//                <div>
                  
//                   <span className={` ${isdarkmode ? 'text-black' : 'text-white'} text-2xl font-semibold tracking-wider ml-0.5`}>DataHarborX</span>
//                </div>
//                <div className={`${isdarkmode ? 'text-black' : 'text-white'} hidden sm:flex gap-x-6 text-lg`}>
//                   <Link to={"/"}>
//                      Home
                  
//                   </Link>
//                   <Link to={"/Dashboard"} >
//                         DashBoard
                  
//                   </Link>
                  
//                   <Link to={"/about"} >
//                       About
                   
//                   </Link>
                  
//                </div>
               
//                { token !== null
                  // ? <Profile/>
//                   :<div className='relative'>
//                   <div className='hidden sm:flex justify-center items-center gap-x-6 text-lg'>
//                   {
//                      isdarkmode ? <CiDark className={`${isdarkmode ? 'text-black' : 'text-white'} text-2xl`} onClick={handleModeChange}/>
//                                 :<CiLight className='text-white text-2xl' onClick={handleModeChange}/>
   
//                   }
//                   <Link to="/login" >
//                      <Button variant="contained" >Login</Button>
//                   </Link>
//                   <Link to="/signup" >
//                      <Button variant="outlined" size="medium">Signup</Button>
//                   </Link>
//                  </div>
//                  <GiHamburgerMenu className="flex sm:hidden text-white text-2xl" onClick={toggleSidebaar}/>
//                    {
//                      open && <Sidebar toggleSidebaar={toggleSidebaar} closeSidebar={closeSidebar}/>
//                    }
//                  </div>
//                }  
//          </div>
//    </div>
//   )
// }

// export default Navbar