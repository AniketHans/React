import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useState } from "react";
import authService from "../appwrite/auth";
import { login as storeLogin } from "../store/authSlice";
import { Logo, Input, Button } from "../components";
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm(); //Here we are destructuring register and handleSubmit from useForm()
  /**
   * handleSubmit is an event.
   * handleSubmit is a method where you pass youe method of how you want to handle the submit.
   * When the form gets submitted, the handleSubmit event is triggered.
   *
   * All the input fields uses the register. You dont have to manage the state of input fields. The register will automatically pick
   * the values will taken at the time of calling the handle submit.
   * We need to expand register {...register} everytime to prevent overridding of values when used in multiple places.
   * register(<field>,options), here the field denotes the name of the field for which we are taking the value. It is like a key value pair
   * The options are used to put contraints on the field to accept a specific pattern for value.
   * Note: the <field> name should be unique.
   */
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(storeLogin({ userData }));
          navigate("/"); //We are programmatically navigating to home without having to click any link or button.
        }
      }
    } catch (e) {
      console.log(e);
      setError(e.message);
    }
  };
  return (
    <div className="w-full flex items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Email:"
              placeholder="Enter the email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password:"
              placeholder="Enter the password"
              type="password"
              {...register("password", {
                required: true,
              })}
            />
            <Button type="submit" className="w-full">
              SignIn
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
