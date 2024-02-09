
import { Button } from "@mui/material";
import Select from 'react-select';
import { useSignupController } from "../../view-controllers/signupController";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    stateOptions,
    cityOptions,
    handleStateChange,
    handleCityChange,
  } = useSignupController();

  return (
    <form
      className="w-full lg:w-11/12 m-auto flex flex-col justify-start items-start my-4  gap-y-6 "
      onSubmit={handleSubmit(onSubmit)}
    >
    <div className='flex gap-x-10  sm:items-start flex-col lg:flex-row justify-between'>
        <div className="flex flex-col gap-y-4">
            <span className='flex flex-col gap-y-2'>
              <label htmlFor="text">Name</label>
              <input className='border w-60 sm:w-96 border-black px-4 py-1 rounded h-10' type="text" name="name" id="name"  {...register("Name", {pattern: /^[A-Za-z\s]+$/ })}/>
              {errors.Name && <span className="text-red-700 text-[12px]">*Please Fill Properly</span>}
          </span>
          <span className='flex flex-col gap-y-2'>
              <label htmlFor="email">Email</label>
              <input className='border w-60 sm:w-96 border-black px-4 py-1 rounded h-10' type="email" name="email" id="email"  {...register("Email",{ pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })} />
              {errors.Email && <span className="text-red-500 text-[12px]">*Email must ve valid</span>}

          </span>

          <span className='flex flex-col gap-y-2'>
              <label htmlFor="password">Password</label>
              <input className='border w-60 sm:w-96 border-black px-4 py-1 rounded h-10' type="password" name="password" id="password"  {...register("Password", {  maxLength: 8 })} />
              {errors.Password && <span className="text-red-500 text-[12px]">*Password must be atleast six character long</span>}

          </span>
          <span className='flex flex-col gap-y-2'>
              <label htmlFor="phone">Phone</label>
              <input className='border w-60 sm:w-96 border-black px-4 py-1 rounded h-10' type="tel" name="phone" id="phone"  {...register("Phone", { pattern: /^[0-9]{10}$/ })} />
              {errors.Phone && <span className="text-red-500 text-[12px]">*Enter a valid number</span>}
          </span>
        </div>
        <div className="flex flex-col  gap-y-7 mt-7">

         <span>
              <label htmlFor="Gender">Gender</label>
              <div className="flex gap-x-2">
                <label className="flex gap-x-1">
                
                  <input type="radio" {...register("Gender")} value="male" />
                  Male
                </label>
                <label className="flex gap-x-1">
                  <input type="radio" {...register("Gender")} value="female" />
                  Female
                </label>
                <label className="flex gap-x-1">
                  <input type="radio" {...register("Gender")} value="other" />
                  Other
                </label>
              </div>
              {errors.Gender && <span>This field is required</span>}
          </span>

      <span>
        <label>How did you hear about this?</label>
        <div className="flex items-center gap-x-3 flex-wrap">
          <label className="flex items-center gap-x-1">
            <input type="checkbox" {...register("hearAbout")} value="LinkedIn" />
            LinkedIn
          </label>
          <label className="flex items-center gap-x-1">
            <input type="checkbox" {...register("hearAbout")} value="Friends" />
            Friends
          </label>
          <label className="flex items-center gap-x-1">
            <input type="checkbox" {...register("hearAbout")} value="Job Portal" />
            Job Portal
          </label>
          <label className="flex items-center gap-x-1">
            <input type="checkbox" {...register("hearAbout")} value="Others" />
            Others
          </label>
        </div>
        {errors.hearAbout && <span>This field is required</span>}
      </span>

      <div>
        <label htmlFor="City">City:</label>
        <Select
          id="City"
          {...register("City")}
          options={cityOptions}
          placeholder="Select a city"
          onChange={handleCityChange}
          className="border border-black rounded w-60 sm:w-96"
        />
        {errors.City && <span>This field is required</span>}
      </div>

      <div>
        <label htmlFor="State">State:</label>
        <Select
          id="State"
          {...register("State")}
          options={stateOptions}
          placeholder="Select a state"
          onChange={handleStateChange}
          className="border border-black rounded w-60 sm:w-96"
        />
        {errors.State && <span>This field is required</span>}
      </div>

        </div>
    </div>
       <span className="flex lg:w-full w-full items-center justify-center my-2">
              <Button variant="contained" size="large" type="submit">
                SignUp
              </Button>

       </span>
    </form>
  );
};

export default SignupForm;
