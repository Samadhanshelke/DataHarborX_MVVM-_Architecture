import axios from "axios";
import {setUserList} from '../slices/userListingSlice'
import toast from "react-hot-toast";


const URL = import.meta.env.VITE_BACKEND_URL
console.log(URL)
export function getUserList(token){
    
   return async(dispatch)=>{
       await axios.get(`${URL}/listing/getuserlisting`,{
        headers: {
            Authorization: `Bearer ${token}`,
        },
       }).then((response)=>{
         
            
               localStorage.setItem("updateuser", JSON.stringify(response.data.users))
               dispatch(setUserList(response.data.users))
               
           

       }).catch((err)=>{
          console.log(err)
       })


   }
}

export async function createUser(data,navigate,token){
    try {
        const response = await axios.post(`${URL}/listing/createUser`,data,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
     
        if(!response.data.success){
            throw new Error(response.data.message)
        }
        toast.success("User Created Successfully")
        navigate('/dashboard')
    } catch (error) {
        toast.error("creation Failed")
        navigate("/dashboard")
    
    }
    
}

export async function editUser(formData,id,navigate,token){
    try {
  

    const response = await axios.put(`${URL}/listing/edituser/${id}`,  formData , {
        headers: {
            Authorization: `Bearer ${token}`,
             'Content-Type': 'multipart/form-data',
        },
    });
 
    if(!response.data.success){
        toast.error("edit user Failed")
        throw new Error(response.data.message)
    }
    
    toast.success("edit User Successfully")
    navigate('/dashboard')
    } catch (error) {
        toast.error("edit user Failed")
        navigate("/dashboard")
     
    } 
}

export async function deleteUser(userId,navigate,token){
    try {
       
        const response = await axios.delete(`${URL}/listing/deleteuser/${userId}`,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
   
        if(!response.data.success){
            throw new Error(response.data.message)
        }
        toast.success(" User deleted Successfully")
        navigate('/dashboard')
    } catch (error) {
        toast.error("delete user Failed")
        navigate("/dashboard")
      
    }
}

