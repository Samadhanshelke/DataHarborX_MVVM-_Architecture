import { useEffect, useState } from "react";

import { editUser, getUserList } from "../services/userListAPI";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useUpdateViewModel = (id) => {
  const [img, setImg] = useState(null);
  const [prevImage, setPrevImage] = useState(null);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const userList = useSelector((state) => state.userLists.userList);

  const handleFormSubmit = (data) => {
    const formData = new FormData();
    formData.append("UserName", data.UserName);
    formData.append("Email", data.Email);
    formData.append("Phone", data.Phone);
    if (img) {
      formData.append("img", img);
    }

    editUser(formData, id, navigate, token);
  };
  useEffect(()=>{
    dispatch(getUserList(token));

  },[dispatch,token])



  return {
    prevImage,
    userList,
    setImg,
    handleFormSubmit,
    setPrevImage
   
  };
};

export default useUpdateViewModel;
