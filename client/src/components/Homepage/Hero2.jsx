
import { motion } from "framer-motion";
import useHomeController from '../../view-controllers/HomeController';
import useThemeImageController from "../../view-controllers/ThemeImageController";

const Hero2 = () => {
 const {controls} = useHomeController();
 const {hero2} = useThemeImageController()

  return (
    <div className='flex flex-col sm:flex-row justify-between items-center m-auto gap-x-3 w-11/12 overflow-hidden'>
        <motion.div
         initial={{ x: -200, opacity: 0 }}
         
          animate={controls}>
            <img
            
              id="left_side"
            src={hero2} alt="leftimage" className="h-[340px] w-[520px]"
            />

        </motion.div>

        <motion.div className='sm:w-[800px]'
           initial={{ x: 200, opacity: 0 }}
           animate={controls}
        >
          <h1 className='text-2xl sm:text-4xl'>UserManager: Secure User <br /> Data  Management</h1>
          <span className={`main_heading`}>
                 UserManager provides secure user data management with a decentralized blockchain, 
                ensuring instant global payments with low transaction fees. It eliminates the need for
                manual data entry and strives for efficient user data management.
           </span>
        </motion.div>
    </div>
  )
}

export default Hero2