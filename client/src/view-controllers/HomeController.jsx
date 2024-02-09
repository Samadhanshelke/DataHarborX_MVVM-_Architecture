import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useHomeController = ()=>{
    const navigate = useNavigate();
    const gotoDashboard = ()=>{
        navigate('/dashboard')
    }

    const controls = useAnimation();
  useEffect(() => {
    const handleScroll = () => {
      // You can adjust the threshold value based on when you want the animation to start
      const threshold = window.innerHeight / 4;
      const element = document.getElementById("left_side"); // Replace with the actual ID of your div

      if (element && window.scrollY + threshold > element.offsetTop) {
        controls.start({
          x: 0,
          opacity: 1,
          transition: { duration: 1 },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);
    return {
        gotoDashboard,
        controls
    }
}
export default useHomeController