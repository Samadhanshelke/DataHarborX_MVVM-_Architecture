import useForgotPasswordViewModel from "../view-models/useForgotPasswordViewModel";


const useForgotPasswordController = () => {

 const { email,setEmail,handleForgotPassword }= useForgotPasswordViewModel()
  
    return {
      email,
      setEmail,
      handleForgotPassword
    };
  };


export default useForgotPasswordController;
