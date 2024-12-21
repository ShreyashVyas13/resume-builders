import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthMiddleware = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      toast.error("You must be logged in to access this page.");
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
};

export default AuthMiddleware;
