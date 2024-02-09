import { Button } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Sidebar = ({toggleSidebaar,closeSidebar}) => {
   
  return (
   
      
       <div className='absolute z-50 right-0 -top-4 flex  bg-gray-700 w-screen m-auto h-screen gap-x-6 text-lg'>
                  <div className=" relative flex w-full flex-col  m-auto  gap-y-4 justify-center items-center">
                  <div className="flex flex-col gap-y-2 items-center">
                  <Link to={"/"} onClick={closeSidebar}>
                     Home
                  
                  </Link>
                  <Link to={"/Dashboard"} onClick={closeSidebar}>
                        DashBoard
                  
                  </Link>
                  
                  <Link to={"/about"} onClick={closeSidebar}>
                      About
                   
                  </Link>

                  </div>
                  <div className="flex gap-x-4">
                  <Link to="/login" onClick={closeSidebar}>
                  <Button variant="contained">Login</Button>

                  </Link>
                  <Link to="/signup" onClick={closeSidebar}>
                     <Button variant="outlined" size="medium">Signup </Button>
                  </Link>

                  </div>
                  </div>
                  <RxCross2 className="absolute right-0 top-0 text-2xl text-white mt-3 me-4" onClick={toggleSidebaar}/>
        </div>
  
  )
}

export default Sidebar