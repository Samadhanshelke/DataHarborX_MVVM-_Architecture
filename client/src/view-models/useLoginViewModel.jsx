import { useNavigate } from 'react-router-dom';
import { login } from '../services/authAPI';
import { useDispatch } from 'react-redux';


const useLoginViewModel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const handleFormSubmit = (data) => { 
    dispatch(login(data, navigate));
  };

  return {
   
    handleFormSubmit,
  };
};

export default useLoginViewModel;
