import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setSignupData } from "../slices/authSlice";
import { sendOtp } from "../services/authAPI";



export const useSignupViewModel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleFormSubmit = (data) => {
    dispatch(setSignupData(data));
    dispatch(sendOtp(data.Email, navigate));
  };

  return {
    handleFormSubmit,
  };
};


