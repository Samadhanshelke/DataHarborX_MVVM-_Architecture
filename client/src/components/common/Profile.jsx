import { MdOutlineArrowDropDown,MdPerson } from "react-icons/md";
import Dropdown from "./Dropdown";

import useNavbarController from "../../view-controllers/NavbarController";
import { CiDark, CiLight } from "react-icons/ci";
import useModeController from "../../view-controllers/ModeController";

const Profile = () => {
  const {dropdownRef,openDropdown,setOpendropdown,handleOpenDropdown} = useNavbarController()
  const {handleSelectedTheme,mode} = useModeController()
 
  return (
    <div className="relative flex justify-center cursor-pointer items-center gap-x-6" ref={dropdownRef} >
          {
              
              mode === 'dark' ? <CiLight className='text-2xl' onClick={()=>handleSelectedTheme('light')}/>
                 : <CiDark className='text-2xl' onClick={()=>handleSelectedTheme('dark')}/>
       
        }
         <span className={`text-2xl flex  justify-start items-center border-2  cursor-pointer rounded`} onClick={handleOpenDropdown}>
            <MdPerson/>
            <MdOutlineArrowDropDown/> 
            
         </span>
         <div className="absolute top-10 left-[-70px] sm:top-12 sm:left-[-26px] md:left-[-90px] lg:left-[-60px]">
             {
                openDropdown ? <Dropdown openDropdown={openDropdown} setOpendropdown={setOpendropdown}/> : null
             }
                
            </div>
    </div>
  )
}

export default Profile