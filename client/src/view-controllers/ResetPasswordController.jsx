
import { useForm } from "react-hook-form";
import useResetPasswordViewModel from "../view-models/useResetPasswordViewModel";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const useResetPasswordController = () => {
   const {eye,
    setEye,
    handleFormSubmit,}= useResetPasswordViewModel()
  const { id } = useParams();
  const uuid = JSON.parse(localStorage.getItem("uuid"));


  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    if (id !== uuid) {
      toast.error("Password token is invalid");
      return;
    }

    const { Password, Confirm_Password, Email } = getValues();
    handleFormSubmit(Password,Confirm_Password,Email)
  
  };

  return {
    eye,
    setEye,
    register,
    handleSubmit,
    getValues,
    errors,
    onSubmit,
  };
};

export default useResetPasswordController;
