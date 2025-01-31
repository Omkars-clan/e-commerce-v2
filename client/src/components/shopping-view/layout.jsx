import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";
import Footer from "./footer";

function ShoppingLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* common header */}
      <ShoppingHeader />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default ShoppingLayout;
