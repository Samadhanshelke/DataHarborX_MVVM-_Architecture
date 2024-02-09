import { useState } from "react";
import { ResetPassword } from "../services/authAPI";
import { useNavigate } from "react-router-dom";

const useResetPasswordViewModel = () => {
  const navigate = useNavigate();
  const [eye, setEye] = useState(false);

  

  const handleFormSubmit = (Password,Confirm_Password,Email) => {
  
    if (Password === Confirm_Password) {
      ResetPassword(Password, Confirm_Password, Email, navigate);
      localStorage.removeItem("uuid");
    }
  };

  return {
    eye,
    setEye,
    handleFormSubmit,
  };
};

export default useResetPasswordViewModel;
