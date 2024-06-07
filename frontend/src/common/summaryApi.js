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
};

export default summaryApi;
