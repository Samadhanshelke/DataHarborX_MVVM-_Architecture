

import darkImages from "../Assets/dark"
import lightImages from "../Assets/light"
import useModeController from "./ModeController"
const useThemeImageController = ()=>{
  const {mode} = useModeController()
    
  if(mode === 'light'){
    const{hero,hero2} = lightImages()
    return{
      hero,
      hero2
    }
  }
  
  const {hero,hero2} = darkImages();
    return {
        hero,hero2
    }
  
}

export default useThemeImageController