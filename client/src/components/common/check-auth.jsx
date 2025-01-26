import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function CheckAuth({ children, isAuthenticated, user }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Allow public access to shop routes except account
    if (location.pathname.includes("/shop") && !location.pathname.includes("/account")) {
      return;
    }

    // Require authentication for admin routes
    if (location.pathname.includes("/admin")) {
      if (!isAuthenticated) {
        navigate("/auth/login");
      } else if (user?.role !== "admin") {
        navigate("/unauth-page");
      }
      return;
    }

    // Handle auth routes
    if (location.pathname.includes("/auth")) {
      if (isAuthenticated) {
        user?.role === "admin"
          ? navigate("/admin/dashboard")
          : navigate("/shop/home");
      }
      return;
    }

    // Root path handling
    if (location.pathname === "/") {
      if (!isAuthenticated) {
        navigate("/shop/home");
      } else {
        user?.role === "admin"
          ? navigate("/admin/dashboard")
          : navigate("/shop/home");
      }
    }
  }, [isAuthenticated, user, location.pathname]);

  return children;
}

export default CheckAuth;
