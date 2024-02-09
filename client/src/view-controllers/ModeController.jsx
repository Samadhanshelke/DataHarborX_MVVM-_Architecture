
import useModeViewModel from "../view-models/useModeViewModel";



const useModeController = ()=>{
 
  
const {selectedTheme,setSelectedTheme,handleSelectedTheme,mode, modal,setModal} = useModeViewModel();

const handleOpenModal = ()=>{
     setModal(true)
}
const closeModal = ()=>{
  setModal(false)
}
  

    return {
        mode,
        selectedTheme,
        setSelectedTheme,
        handleSelectedTheme,
        modal,
        setModal,
        handleOpenModal,
        closeModal
    }
}

export default useModeController