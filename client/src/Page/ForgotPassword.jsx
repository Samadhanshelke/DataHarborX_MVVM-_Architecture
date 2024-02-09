
import { MdErrorOutline } from "react-icons/md";

import useForgotPasswordController from "../view-controllers/ForgotPasswordController";

const ForgotPassword = () => {
  const viewModel = useForgotPasswordController();

  return (
    <div className={` h-screen max-h-[calc(100vh-56px)] flex justify-center items-center`}>
      <div className="w-[310px] form sm:w-fit flex flex-col m-auto justify-center items-center gap-y-2 border border-black rounded px-4 py-6">
        <span className="text-4xl text-green-600">
          <MdErrorOutline />
        </span>
        <h1 className="text-2xl">Forgot Password</h1>
        <p className={`  text-[14px] mb-2`}>
          Enter your email and we will send you a link to reset your password.
        </p>
        <form
          className="flex flex-col gap-y-4 items-center justify-center"
          onSubmit={viewModel.handleForgotPassword}
        >
          <input
            type="email"
            className="border w-[250px] border-black focus:outline-none rounded p-1"
            value={viewModel.email}
            onChange={(e) => viewModel.setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded  w-fit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
