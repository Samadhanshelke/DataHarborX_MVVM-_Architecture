
import { useForm } from "react-hook-form";

import { useEffect } from "react";
import toast from "react-hot-toast";
import { useSignupViewModel } from "../view-models/useSignupViewModel";

export const useSignupController = () => {
   const {handleFormSubmit} = useSignupViewModel()

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    const { Name, Email, Password, Phone, Gender, hearAbout, City, State } = data;

    if (
      Name === "" ||
      Email === "" ||
      Password === "" ||
      Phone === "" ||
      Gender === "" ||
      hearAbout === "" ||
      City === "" ||
      State === ""
    ) {
     
      toast.error('All Field Required')
      return;
    }
    handleFormSubmit(data)
    
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        Name: "",
        Email: "",
        Password: "",
        Phone: "",
        Gender: "",
        hearAbout: "",
        City: "",
        State: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  const stateOptions = [
    { value: "Gujarat", label: "Gujarat" },
    { value: "Maharashtra", label: "Maharashtra" },
    { value: "Karnataka", label: "Karnataka" },
  ];

  const cityOptions = [
    { value: "Mumbai", label: "Mumbai" },
    { value: "Pune", label: "Pune" },
    { value: "Ahmedabad", label: "Ahmedabad" },
  ];

  const handleStateChange = (selectedOption) => {
    setValue("State", selectedOption);
  };

  const handleCityChange = (selectedOption) => {
    setValue("City", selectedOption);
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    stateOptions,
    cityOptions,
    handleStateChange,
    handleCityChange,
  };
};


