
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { useParams } from "react-router-dom";
import useUpdateController from "../view-controllers/UpdateController";


const UpdateUser = () => {
  const { id } = useParams();
 
  const {
    Image,
    prevImage,
    register,
    handleSubmit,
    errors,
    handleInputChange,
    onSubmit,} = useUpdateController(id);


  return (
    <div className={`flex items-center justify-center w-full h-screen`}>
      <div className="w-[800px] p-10 form flex flex-col m-auto justify-center border border-black items-center  rounded-lg">
        <h1 className="text-3xl mb-6">Update Info</h1>
        <div className="flex gap-x-6 flex-col sm:flex-row">
          <form
            className="flex flex-col items-center justify-center gap-y-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col justify-start items-start w-full gap-y-4">
              <span className="border rounded-full p-1">
                {prevImage === null ? (
                  Image.includes("https") ? (
                    <img
                      src={Image}
                      className="sm:w-[80px] h-[80px] rounded-full"
                      alt=""
                    />
                  ) : (
                    <img
                      src={`../../public/Images/${Image}`}
                      alt=""
                      className="sm:w-[80px] h-[80px] rounded-full"
                    />
                  )
                ) : (
                  <img
                    src={prevImage}
                    alt=""
                    className="sm:w-[80px] h-[80px] rounded-full"
                  />
                )}
              </span>

              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
                onChange={handleInputChange}
              >
                Upload image
                <input
                  type="file"
                  style={{
                    clip: 'rect(0 0 0 0)',
                    clipPath: 'inset(50%)',
                    height: 1,
                    overflow: 'hidden',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    whiteSpace: 'nowrap',
                    width: 1,
                  }}
                />
              </Button>
            </div>
            <span className="flex flex-col gap-y-2">
              <label htmlFor="username">Username</label>
              <input
                className="border w-64 sm:w-96 border-black px-4 py-1 h-10 rounded"
                type="text"
                name="username"
                id="username"
                {...register("UserName", {
                  required: true,
                })}
              />
              {errors.UserName && (
                <span className="text-red-500 text-[12px]">
                  *This field is required
                </span>
              )}
            </span>
            <span className="flex flex-col gap-y-2">
              <label htmlFor="email">Email</label>
              <input
                className="border w-64 sm:w-96 border-black px-4 py-1 h-10 rounded"
                type="email"
                name="email"
                id="email"
                {...register("Email", {
                  required: true,
                  pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/i,
                })}
              />
              {errors.Email && (
                <span className="text-red-500 text-[12px]">
                  *This field is required
                </span>
              )}
            </span>
            <span className="flex flex-col gap-y-2">
              <label htmlFor="phone">Phone</label>
              <input
                className="border w-64 sm:w-96 border-black px-4 py-1 h-10 rounded"
                type="tel"
                name="phone"
                id="phone"
                {...register("Phone", {
                  required: true,
                  pattern: /^[0-9]{10}$/,
                })}
              />
              {errors.Phone && (
                <span className="text-red-500 text-[12px]">
                  *This field is required
                </span>
              )}
            </span>

            <Button variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
