import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/authAPI";


const useNavbarViewModel = ()=>{
    const [open, setOpen] = useState(false)
   const token = useSelector((state)=>state.auth.token)
   const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutUser = ()=>{
        
       dispatch(logout(navigate))
    }
    
   
  
return{
    open,
    setOpen,
    token,
    logoutUser,
    navigate,
 
}

}

export default useNavbarViewModel;