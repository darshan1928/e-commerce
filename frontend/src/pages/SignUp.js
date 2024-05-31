import React, { useState } from "react";
import loginIcons from "../assest/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import imageToBase64 from "../helpers/imageToBase64";
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePic: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUploadPic = async (e) => {
    const file = e.target.files[0];
    const imagePic = await imageToBase64(file);
    setData((pre) => {
      return {
        ...pre,
        profilePic: imagePic,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section id="signup">
      <div className="mx-auto container p-4">
        <div className="bg-white p-5  w-full max-w-md mx-auto">
          <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
            <div>
              <img src={data.profilePic || loginIcons} alt="login-icons" />
            </div>
            <form>
              <label>
                <div className="text-xs bg-opacity-80 bg-slate-200 text-center pb-4 pt-2 cursor-pointer absolute bottom-0 w-full ">
                  Upload Photo
                </div>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleUploadPic}
                />
              </label>
            </form>
          </div>
          <form className="pt-6 flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Name :</label>
              <div className="bg-slate-100 p-2">
                <input
                  name="name"
                  value={data.name}
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full h-full bg-transparent "
                  required
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <div className="grid">
              <label>Email :</label>
              <div className="bg-slate-100 p-2">
                <input
                  name="email"
                  value={data.email}
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full h-full bg-transparent "
                  required
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
                  required
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowPassword((pre) => !pre)}
                >
                  <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
            </div>
            <div>
              <label> Confirm Password :</label>
              <div className="bg-slate-100 p-2 flex">
                <input
                  name="confirmPassword"
                  value={data.confirmPassword}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Enter Confirm Password"
                  onChange={handleOnChange}
                  className="w-full h-full outline-none bg-transparent"
                  required
                />
                <div
                  className="cursor-pointer text-xl"
                  onClick={() => setShowConfirmPassword((pre) => !pre)}
                >
                  <span>
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 px-6 py-2 w-full text-white max-w-[150px] rounded-full hover:scale-105 transition-all mx-auto block mt-4"
            >
              LOGIN
            </button>
          </form>
          <p className="my-5">
            Already have an account ?{" "}
            <Link
              className="text-red-600 hover:text-red-700 hover:underline "
              to={"/login"}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
