import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import "react-toastify/dist/ReactToastify.css";
export default function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <main className="min-h-[calc(100vh-120px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
