import { useEffect, useRef, useState } from "react";
import useNavbarViewModel from "../view-models/useNavbarViewModel";

const useNavbarController = () => {
  const { open,setOpen,token,logoutUser,navigate} =  useNavbarViewModel()
    const toggleSidebaar  = ()=>{
        setOpen(!open)
     }
     const closeSidebar = () => {
        setOpen(false);
     };

     const [openDropdown,setOpendropdown] = useState(false);
     const handleOpenDropdown=()=>{
          setOpendropdown(!openDropdown)
     }
 
     const dropdownRef = useRef(null);
     useEffect(() => {
         const handleOutsideClick = (event) => {
           if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
             setOpendropdown(false);
           }
         };
     
         document.addEventListener('click', handleOutsideClick);
     
         return () => {
           document.removeEventListener('click', handleOutsideClick);
         };
       }, []);
       
      


  return {
    
     open,
     setOpen,
     token,toggleSidebaar,
     closeSidebar,
     handleOpenDropdown,
     dropdownRef,
     openDropdown,
     setOpendropdown,
     logoutUser,
     navigate,
     

  };
};

export default useNavbarController;
