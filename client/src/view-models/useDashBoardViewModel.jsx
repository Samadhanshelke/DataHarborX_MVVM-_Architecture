import { useEffect, useState } from "react";
import { deleteUser, getUserList } from "../services/userListAPI";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setUserList } from "../slices/userListingSlice";
import { useNavigate } from "react-router-dom";


const useDashboardViewModel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userList = useSelector((state) => state.userLists.userList);
  const { token } = useSelector((state) => state.auth);
  const [search, setSearch] = useState(localStorage.getItem("searchterm") || '');
  const [isModalOpen, setIsModalOpen] = useState(false);


 
  
  const handleChangeSort = (sortedList)=>{
    
    dispatch(setUserList(sortedList));
}
    
const handleDeleteUser = async (userId) => {
  try {
    await deleteUser(userId, navigate, token);
    dispatch(getUserList(token));
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};

useEffect(() => {

  dispatch(getUserList(token));
}, [dispatch, token]);

  return {
    userList,
    handleChangeSort,
    search,
    token,
    setSearch,
    handleDeleteUser,
    navigate,
    isModalOpen,
    setIsModalOpen
  
  };
};

export default useDashboardViewModel;
