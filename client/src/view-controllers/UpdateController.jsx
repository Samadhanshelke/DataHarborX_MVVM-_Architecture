// import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useUpdateViewModel from "../view-models/useUpdateViewModel";



const useUpdateController = (id) => {

const {
    prevImage,
    userList,
    setImg,
    handleFormSubmit,
    setPrevImage}=  useUpdateViewModel(id)
  const currentValues = JSON.parse(localStorage.getItem("currentUser"));


  const prevalues = userList.filter((user) => user._id === id);
  const { UserName, Email, Phone, Image } = 
    prevalues.length === 0 ? currentValues : prevalues[0];


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      UserName: UserName,
      Email: Email,
      Phone: Phone,
    },
  });


  const handleInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImg(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPrevImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
   

  const onSubmit = (data) => {
    handleFormSubmit(data)
  };

  return {
   
    Image,
    prevImage,
    register,
    handleSubmit,
    errors,
    handleInputChange,
    onSubmit,
  };
};

export default useUpdateController;
