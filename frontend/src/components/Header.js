import React, { useState } from "react";
import Logo from "./Logo";
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import summaryApi from "../common/summaryApi";
import { toast } from "react-toastify";
import { setUserDetails } from "../redux/slice/userSlice.";
import ROLE from "../common/role";
export const Header = () => {
  const [menuDisplay, setMenuDisplay] = useState(false);
  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    const response = await fetch(`${summaryApi.logoutUser.api}`, {
      method: `${summaryApi.logoutUser.method}`,
      credentials: "include",
    });

    const data = await response.json();
    if (data?.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
    }
    if (data?.error) {
      toast.error(data.message);
    }
  };

  return (
    <header className="h-16 shadow-md">
      <div className="h-full container max-auto flex items-center px-4 justify-between">
        <div>
          <Link to={"/"}>
            <Logo w={90} h={50} />
          </Link>
        </div>
        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2 ">
          <input
            type="text"
            placeholder="Search Product Here...."
            className="w-full outline-none "
          />
          <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white">
            <GrSearch />
          </div>
        </div>
        <div className="flex items-center gap-7">
          <div className="relative  flex justify-center">
            {" "}
            {user?._id && (
              <div
                className="cursor-pointer relative  flex justify-center text-3xl "
                onClick={() => setMenuDisplay((pre) => !pre)}
              >
                {user?.profilePic ? (
                  <img
                    alt={user?.name}
                    className="w-10 h-10 rounded-full"
                    src={user?.profilePic}
                  />
                ) : (
                  <FaRegCircleUser />
                )}
              </div>
            )}
            {menuDisplay && (
              <div className="absolute  bg-white bottom-0 top-11 h-fit p-2  shadow-lg rounded ">
                <nav>
                  {user.role === ROLE.ADMIN && (
                    <Link
                      to={"/admin-panel/all-products"}
                      className="whitespace-nowrap hidden md:block hover:bg-slate-100 p-2"
                      onClick={() => setMenuDisplay((pre) => !pre)}
                    >
                      Admin Panel
                    </Link>
                  )}
                </nav>
              </div>
            )}
          </div>
          <div className="text-2xl relative">
            <span>
              <FaShoppingCart />
            </span>
            <div className="bg-red-600 text-white  w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
              <p className="text-sm">0</p>
            </div>
          </div>
          <div>
            {user?._id ? (
              <button
                onClick={handleLogout}
                className="px-3 py-1 rounded-full bg-red-600 text-white  hover:bg-red-700"
              >
                Logout
              </button>
            ) : (
              <Link
                to={"/login"}
                className="px-3 py-1 rounded-full bg-red-600 text-white  hover:bg-red-700"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
