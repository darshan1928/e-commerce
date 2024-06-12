const backendDomin = "http://localhost:8080";

const summaryApi = {
  signUp: {
    api: `${backendDomin}/api/signup`,
    method: "post",
  },
  signIn: {
    api: `${backendDomin}/api/signin`,
    method: "post",
  },
  currentUser: {
    api: `${backendDomin}/api/user-details`,
    method: "get",
  },
  logoutUser: {
    api: `${backendDomin}/api/user-logout`,
    method: "get",
  },
  adminPanel: {
    api: `${backendDomin}/api/admin-panel`,
    method: "get",
  },
  allUsers: {
    api: `${backendDomin}/api/all-users`,
    method: "get",
  },
  allProducts: {
    api: `${backendDomin}/api/all-products`,
    method: "get",
  },
  updateUser: {
    api: `${backendDomin}/api/update-user`,
    method: "post",
  },
};

export default summaryApi;
