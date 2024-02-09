import { Button } from "@mui/material";
import { useTheme } from "@emotion/react";

import useCreateUserController from "../view-controllers/CreateUserController";
// import useNavbarController from "../view-controllers/NavbarController";
const CreateUser = () => {
  const theme = useTheme();
  const { register, handleSubmit, errors, onSubmit, navigate } = useCreateUserController();
  // const {isdarkmode} = useNavbarController();
  return (
    <div className={`flex items-center justify-center w-full h-screen max-h-[calc(100vh-56px)] `}>
      <div className="w-[310px] form sm:w-[800px] p-10  flex flex-col m-auto justify-center items-center  rounded-lg">
        <h1 className="text-3xl">Create User</h1>
        <form className="flex flex-col items-center justify-center gap-y-3 " onSubmit={handleSubmit(onSubmit)}>
          <span className="flex flex-col gap-y-2">
            <label htmlFor="username">Username</label>
            <input className="border w-60 sm:w-96 border-black px-4 py-1 text-black rounded h-10" type="text" name="username" id="username" {...register("UserName", { required: true }, { pattern: /^[A-Za-z\s]+$/ })} />
            {errors.UserName && <span className="text-red-500 text-[12px]">*This field is required</span>}
          </span>
          <span className="flex flex-col gap-y-2">
            <label htmlFor="email">Email</label>
            <input className="border w-60 sm:w-96 border-black px-4 text-black py-1 rounded h-10" type="email" name="email" id="email" {...register("Email", { required: true }, { pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/i })} />
            {errors.Email && <span className="text-red-500 text-[12px]">*This field is required</span>}
          </span>
          <span className="flex flex-col gap-y-2">
            <label htmlFor="phone">Phone</label>
            <input className="borderw-60 sm:w-96 border-black text-black px-4 py-1 rounded h-10" type="tel" name="phone" id="phone" {...register("Phone", { required: true }, { pattern: /^[0-9]{10}$/ })} />
            {errors.Phone && <span className="text-red-500 text-[12px]">*This field is required</span>}
          </span>
          <div className="flex gap-x-4 mt-2">
            <Button type="submit" color="primary" variant="contained">
              Create
            </Button>
            <Button type="submit" style={{ backgroundColor: theme.palette.primary.danger }} variant="contained" onClick={() => navigate("/dashboard")}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
