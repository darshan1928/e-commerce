import React, { useState } from "react";
import loginIcons from "../assest/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section id="login">
      <div className="mx-auto container p-4">
        <div className="bg-white p-5  w-full max-w-md mx-auto">
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcons} alt="login-icons" />
          </div>
          <form className="pt-6 flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Email :</label>
              <div className="bg-slate-100 p-2">
                <input
                  name="email"
                  value={data.email}
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full h-full bg-transparent "
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <div>
              <label>Password :</label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  name="password"
                  value={data.password}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((pre) => !pre)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
              <Link
                className="w-fit ml-auto block hover:underline hover:text-red-600"
                to={"/forgot-password"}
              >
                Forget Password ?
              </Link>
            </div>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 px-6 py-2 w-full text-white max-w-[150px] rounded-full hover:scale-105 transition-all mx-auto block mt-4"
            >
              LOGIN
            </button>
          </form>
          <p className="my-5">
            Dont you have an account ?{" "}
            <Link
              className="text-red-600 hover:text-red-700 hover:underline "
              to={"/sign-up"}
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
