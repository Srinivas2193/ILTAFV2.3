import React from "react";
import { Outlet, Navigate, Link } from "react-router-dom";
import Logo from "./../../assets/Logos/ideyalabsLogo.png";
import Footer from './../../Pages/Footer/Footer';

const ProtectedRoute = ({ status }) => {
  const LoggedIn = status;

  if (!LoggedIn) {
    return <Navigate to={`/login`} />;
  }
  return(
  <>
    <div className="flex flex-row justify-between bg-gradient-to-r from-slate-200 via-orange-300 to-blue-300">
      <div>
        <h1
          className="p-2 text-5xl font-bold text-gray-500"
          style={{ fontStyle: "font-family: 'Lato', sans-serif;" }}
        >
          <Link to='/home'>
          <span style={{ color: "#eb7524", marginRight: "3%" }}>Quality</span>
          <span style={{ color: "#285d93" }}>Assurance</span>
          </Link>
        </h1>
      </div>
      <div>
        <img src={Logo} alt="logo" className="h-20 p-2 " />
      </div>
    </div>
    <div className="min-h-[777px]">
    <Outlet />;
    </div>
    <div>
      <Footer />
    </div>
  </>);
};

export default ProtectedRoute;
