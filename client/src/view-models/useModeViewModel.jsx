
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../slices/profileSlice";

const useModeViewModel = ()=>{
    const dispatch = useDispatch()
    const [selectedTheme, setSelectedTheme] = useState('dark');
    const {mode} = useSelector((state)=>state.profile)
    const [modal,setModal] = useState(false)

    const handleSelectedTheme = (theme)=> {
     
        dispatch(setMode(theme))
       
      }

    return{
        selectedTheme,
        setSelectedTheme,
        handleSelectedTheme,
        mode,
        modal,
        setModal
    }
}

export default useModeViewModel