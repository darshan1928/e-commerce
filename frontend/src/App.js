import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import summaryApi from "./common/summaryApi";
import Context from "./context/index";
export default function App() {
  const fetchUserDetails = async () => {
    const userResponse = await fetch(`${summaryApi.currentUser.api}`, {
      method: `${summaryApi.currentUser.method}`,
      credentials: "include",
    });

    const dataApi = await userResponse.json();
    console.log("dataApi==", dataApi);
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <>
    <Context.Provider value ={{fetchUserDetails
      //fetching user details
    }} >
      <ToastContainer />
      <Header />
      <main className="min-h-[calc(100vh-120px)]">
        <Outlet />
      </main>
      <Footer />
      </Context.Provider>
    </>
  );
}
