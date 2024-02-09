import useVerifyEmailViewModel from "../view-models/useVerifyEmailViewModel";
const useVerifyEmailController = () => {
const { otp,
    setOtp,
    handleVerifyAndSignup,
    handleResendOtp,}=  useVerifyEmailViewModel()


  return {
    otp,
    setOtp,
    handleVerifyAndSignup,
    handleResendOtp,
  };
};

export default useVerifyEmailController;
