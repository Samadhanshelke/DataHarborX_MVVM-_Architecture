import { useState } from "react";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../services/authAPI";
import { useNavigate } from "react-router-dom";

const useForgotPasswordViewModel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleForgotPassword = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email, navigate));        
  };

  return {
    email,
    setEmail,
    handleForgotPassword,
  };
};

export default useForgotPasswordViewModel;
