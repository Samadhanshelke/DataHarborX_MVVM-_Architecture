import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useLoginViewModel from '../view-models/useLoginViewModel';
const useLoginController = () => {
    const {handleFormSubmit} = useLoginViewModel()
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
   
      Email: "test@gmail.com",
      Password: 'Pass@123',
    },
  });

  const onSubmit = (data) => {
    const { Email, Password } = data;

    if (Email === '' || Password === '') {
      toast.error('All Fields Required');
      return;
    }

    handleFormSubmit(data)
  };

  return {
    errors,
    register,
    handleSubmit,
    onSubmit,
  };
};

export default useLoginController;
