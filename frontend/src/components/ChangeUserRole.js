import React, { useState } from "react";
import ROLE from "../common/role";
import { IoMdClose } from "react-icons/io";
import summaryApi from "../common/summaryApi";
import { toast } from "react-toastify";
const ChangeUserRole = ({ role, userId, email, name, onClose, callFunc }) => {
  const [userRole, setUserRole] = useState(role);
  const handleOnchange = (e) => {
    setUserRole(e.target.value);
  };
  const handleChangeRole = async () => {
    const response = await fetch(summaryApi.updateUser.api, {
      method: `${summaryApi.updateUser.method}`,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        role: userRole,
      }),
    });

    const responseJson = await response.json();
    if (responseJson.success) {
      toast.success(responseJson.message);
      onClose();
      callFunc();
    }
  };
  return (
    <div className="fixed w-full h-full z-10 flex justify-center items-center bg-slate-200 bg-opacity-50">
      <div className="bg-white mx-auto shadow-md  p-4 max-w-sm w-full">
        <button onClick={onClose} className="block ml-auto">
          <IoMdClose />
        </button>
        <h1 className="pb-4 text-lg font-medium">ChangeUserRole</h1>{" "}
        <p>Name :{name}</p>
        <p>Email : {email}</p>
        <div className="flex items-center justify-between my-4">
          <p>Role : </p>
          <select
            value={userRole}
            onChange={handleOnchange}
            className="border px-4 py-1"
          >
            {Object.values(ROLE).map((role, index) => {
              return (
                <option value={role} key={index}>
                  {role}
                </option>
              );
            })}
          </select>
        </div>
        <button
          onClick={handleChangeRole}
          className="w-fit mx-auto block   rounded-full py-1 px-3 bg-red-600 text-white hover:bg-red-700"
        >
          Change Role
        </button>
      </div>
    </div>
  );
};

export default ChangeUserRole;
