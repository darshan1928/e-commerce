import React, { useEffect, useState } from "react";
import summaryApi from "../common/summaryApi";
import moment from "moment";
import { MdModeEdit } from "react-icons/md";
import ChangeUserRole from "../components/ChangeUserRole";
const AllUsers = () => {
  const [allUsers, setAllUsers] = useState(null);
  const [openUpdateRole, setOpenUpdateRole] = useState(false);
  const [updateUserDetails, setUpdateUserDetails] = useState({
    name: "",
    email: "",
    role: "",
    _id: "",
  });
  const fetchAllUsers = async () => {
    const response = await fetch(`${summaryApi.allUsers.api}`, {
      method: `${summaryApi.allUsers.method}`,
      credentials: "include",
    });

    const responseJson = await response.json();
    if (responseJson.success) {
      setAllUsers(responseJson.data);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div className="bg-white pb-4">
      <table className="w-full userTable">
        <tr className=" bg-black text-white">
          <th>Sr.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Created Date</th>
          <th>Action</th>
        </tr>
        <tbody>
          {allUsers?.map((users, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{users?.name}</td>
                <td>{users?.email}</td>
                <td>{users?.role}</td>
                <td>{moment(users?.createdAt).format("ll")}</td>
                <td>
                  <button
                    className="bg-green-100 cursor-pointer hover:bg-green-500 hover:text-white rounded-full  p-2 "
                    onClick={() => {
                      setUpdateUserDetails(users);
                      setOpenUpdateRole(true);
                    }}
                  >
                    <MdModeEdit />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        {openUpdateRole && (
          <ChangeUserRole
            name={updateUserDetails.name}
            email={updateUserDetails.email}
            onClose={() => setOpenUpdateRole(false)}
            role={updateUserDetails.role}
            userId={updateUserDetails._id}
            callFunc={fetchAllUsers}
          />
        )}
      </table>
    </div>
  );
};

export default AllUsers;
