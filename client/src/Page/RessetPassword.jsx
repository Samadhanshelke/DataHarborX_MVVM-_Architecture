
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

import useResetPasswordController from "../view-controllers/ResetPasswordController";

const ResetPassword = () => {
  const {eye,
    setEye,
    register,
    handleSubmit,
    errors,
    onSubmit} = useResetPasswordController();
  

  return (
    <div className={` flex w-[500px] flex-col h-screen form border-2  items-center justify-center m-auto`}>
      <h1 className={` text-2xl sm:text-3xl mb-4`}>Change Password</h1>
      <form className="flex flex-col gap-y-6" onSubmit={handleSubmit(onSubmit)}>
        <span className="flex flex-col gap-y-2 ">
          <label htmlFor="email">Email</label>
          <input
            className="border w-60 sm:w-96 border-black px-4 py-1 rounded"
            type="email"
            name="email"
            id="email"
            {...register("Email", { required: true })}
          />
          {errors.Email && (
            <span className="text-red-500 text-[12px]"> *This field is required </span>
          )}
        </span>
        <span className="flex flex-col gap-y-2 relative">
          <label htmlFor="password">Password</label>
          <input
            className="border w-60 sm:w-96 border-black px-4 py-1 rounded"
            type={eye ? "text" : "password"}
            name="password"
            id="password"
            {...register("Password", { required: true })}
          />
          {errors.Password && (
            <span className="text-red-500 text-[12px]"> *This field is required </span>
          )}
          {eye ? (
            <IoEyeOffOutline
              className="absolute right-2 top-10"
              onClick={() => {
                setEye(!eye);
              }}
            />
          ) : (
            <IoEyeOutline
              className="absolute right-2 top-10"
              onClick={() => setEye(!eye)}
            />
          )}
        </span>
        <span className="flex flex-col gap-y-2 relative">
          <label htmlFor="confirm-password">Password</label>
          <input
            className="border w-60 sm:w-96 border-black px-4 py-1 rounded"
            type={eye ? "text" : "password"}
            name="confirm-password"
            id="confirm-password"
            {...register("Confirm_Password", { required: true })}
          />
          {errors.Confirm_Password && (
            <span className="text-red-500 text-[12px]">*This field is required</span>
          )}
          {eye ? (
            <IoEyeOffOutline
              className="absolute right-2 top-10"
              onClick={() => setEye(!eye)}
            />
          ) : (
            <IoEyeOutline
              className="absolute right-2 top-10"
              onClick={() => setEye(!eye)}
            />
          )}
        </span>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-400  text-white px-2 py-2 rounded"
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
