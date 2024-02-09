
import {createUser}  from "../services/userListAPI";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const useCreateUserViewModel = () => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  
 

  const handleFormSubmit = (data) => {
    createUser(data, navigate, token);
  };

  return {
    token,
    navigate,
    handleFormSubmit
  };
};

export default useCreateUserViewModel;
