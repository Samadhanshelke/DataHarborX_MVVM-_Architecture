import { useDispatch, useSelector } from "react-redux";
import { sendOtp, signUp } from '../services/authAPI';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useVerifyEmailViewModel = () => {
  const [otp, setOtp] = useState("");
  const { signupData } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleVerifyAndSignup = (e) => {
    e.preventDefault();
    const {
      Name,
      Email,
      Phone,
      Password,
      City,
      State,
      Gender,
      hearAbout,
    } = signupData;

    dispatch(
      signUp(
        Name,
        Email,
        Phone,
        Password,
        otp,
        City,
        State,
        Gender,
        hearAbout,
        navigate
      )
    );
  };

  const handleResendOtp = () => {
    dispatch(sendOtp(signupData.Email));
  };

  return {
    otp,
    setOtp,
  
    handleVerifyAndSignup,
    handleResendOtp,
  };
};

export default useVerifyEmailViewModel;
