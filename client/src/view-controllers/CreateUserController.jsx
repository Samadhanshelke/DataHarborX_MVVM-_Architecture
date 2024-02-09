import { useForm } from "react-hook-form";
import useCreateUserViewModel from "../view-models/useCreateUserViewModel";


const useCreateUserController = () => {
   const {handleFormSubmit,navigate}  = useCreateUserViewModel()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleFormSubmit(data)
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    navigate,
    
  };
};

export default useCreateUserController;
