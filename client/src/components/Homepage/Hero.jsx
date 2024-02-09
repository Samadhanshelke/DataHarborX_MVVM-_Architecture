
// import hero from '../../Assets/Images/hero2.svg'
import { motion } from "framer-motion";
import useHomeController from "../../view-controllers/HomeController";
import useThemeImageController from '../../view-controllers/ThemeImageController';
const Hero = () => {
 const {gotoDashboard} =  useHomeController()
 const {hero} = useThemeImageController()

  return (
    <div className="w-11/12 m-auto sm:h-screen justify-center flex flex-col items-center">
          <div className="w-full overflow-hidden mt-12 sm:mt-12 flex flex-col gap-x-16 sm:flex-row">
          <motion.div 
             initial={{ x: -100, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ duration: 1 }}
          >
                <h1 className={`text-3xl sm:text-5xl font-serif mb-2`}> Seamlessly Manage, Organize,<br /> and Interact with User Data in <br /> Real-Time</h1>
                <p className={`text-[16px] font-serif main_heading `}>Effortless CRUD Operations, Enhanced Filtering, and Offline Capabilities for Streamlined User Interaction</p>
          </motion.div>
              <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
        >
                  <img src={hero} alt="" className="h-[340px] w-[520px]"/>
              </motion.div>
          </div>

          <motion.div  
           initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="mt-6 mb-4"
           >
                <button onClick={gotoDashboard} className={`dashboard_btn py-2 px-4 rounded-md`}>DASHBOARD</button>           
          </motion.div>

    </div>
  )
}

export default Hero