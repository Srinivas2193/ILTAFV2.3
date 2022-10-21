import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import LogBot from "./../../assets/Images/Login/cyber-bg.png";
import Logo from "./../../assets/Logos/ideyalabsLogo.png";
import "./Login.css";

export const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  let navigate = useNavigate();

  // onSubmit localStorage Part
  const handleSubmit = (event) => {
    event.preventDefault();

    let lsData = localStorage.getItem("userDataList");
    let parseData;
    if (lsData) {
      parseData = JSON.parse(lsData);
    } else {
      parseData = [];
    }
    if (parseData !== null && !parseData.length > 0) {
    } else {
      let i = 0;
      // let userStatus = "";
      try {
        while (i <= parseData.length) {
          if (
            parseData[i].email === userName &&
            parseData[i].password === userPassword
          ) {
            parseData[i].loginStatus = true;
            // userStatus = true;
            // localStorage.setItem("userDataList", JSON.stringify(parseData));
            // setIsLoggedIn(false);
            props.loginPageCall(parseData[i].loginStatus ? parseData[i].loginStatus:'');

            // setIsLoggedIn(!isLoggedIn);
            // props.onSubmit(isLoggedIn)
            // console.log(userStatus);
            navigate("/home");

            // document.getElementById("navBar").style.display = "flex";
            break;
          } else {
            document.getElementById("navBar").style.display = "none";
          }
          i += 1;
        }
      } catch (err) {
        // console.log("error occured: ",err);
        document.getElementsByClassName("errMessage")[0].style.visibility =
          "visible";
        setTimeout(() => {
          document.getElementsByClassName("errMessage")[0].style.visibility =
            "hidden";
        }, 2500);
      }
    }
  };

  return (
    <>
      <div className="flex flex-row justify-between bg-gradient-to-r from-slate-200 via-orange-300 to-blue-300 ">
        <div>
          <h1
            className="p-2 text-5xl font-bold text-gray-500"
            style={{ fontStyle: "font-family: 'Lato', sans-serif;" }}
          >
            {" "}
            <span style={{ color: "#eb7524", marginRight: "3%" }}>Quality</span>
            <span style={{ color: "#285d93" }}>Assurance</span>
          </h1>
        </div>
        <div>
          <img src={Logo} alt="logo" className="h-20 p-2 " />
        </div>
      </div>
      <div className="flex flex-row items-center place-content-evenly min-h-[777px]">
        <div>
          <img className="logimIng" src={LogBot} alt="logon" />
        </div>
        <div className="formContainer">
          {/* <!-- component --> */}
          <div className="flex flex-col items-center justify-center mt-24 sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
              <div className="absolute inset-0 transform -skew-y-6 shadow-2xl bg-gradient-to-r from-blue-300 to-blue-600 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
              <div className="relative px-4 py-10 bg-white shadow-2xl sm:rounded-3xl sm:p-20">
                <div className="max-w-md mx-auto">
                  <div>
                    <h1 className="text-3xl font-semibold text-center bg-blue-500 border-2 border-blue-500 rounded-md w-max text-slate-100">
                      Login
                    </h1>
                  </div>
                  <div className="errMessage">
                    <p>Incorrect credentials, Please check and try again!</p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="divide-y divide-gray-200">
                      <div className="py-6 space-y-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                        <div className="relative">
                          <input
                            type="text"
                            name="userName"
                            id="userName"
                            className="w-full h-10 text-gray-900 placeholder-transparent bg-white border-2 border-blue-500 rounded-md peer hover:border-orange-300 focus:outline-none focus:border-4"
                            placeholder="Email address"
                            onChange={(e) => {
                              setUserName(e.target.value);
                            }}
                          />
                          <label
                            for="email"
                            className="absolute left-2.5 -top-2.5 px-0.5 text-gray-600 bg-white text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2.5 transition-all peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:text-orange-500"
                          >
                            Email Address
                          </label>
                        </div>
                        <div className="relative">
                          <input
                            id="password"
                            name="password"
                            type="password"
                            className="w-full h-10 text-gray-900 placeholder-transparent bg-white border-2 border-gray-200 border-blue-500 rounded-md peer hover:border-orange-300 focus:outline-none focus:border-4"
                            placeholder="Password"
                            onChange={(e) => setUserPassword(e.target.value)}
                          />
                          <label
                            for="password"
                            className="absolute left-2.5 -top-2.5 px-0.5 text-gray-600 bg-white text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2.5 transition-all peer-focus:-top-2.5 peer-focus:text-gray-600 peer-focus:text-sm peer-focus:text-orange-500"
                          >
                            Password
                          </label>
                        </div>
                        <div className="relative">
                          <div className="flex flex-row justify-between">
                            
                          <button
                            type="submit"
                            className="px-2 py-1 font-semibold text-white bg-blue-500 rounded-md hover:bg-orange-500"
                          >
                            Submit
                          </button>
                          <div className="font-semibold text-blue-500 cursor-pointer hover:underline hover:text-orange-500">
                          <Link to={`/signup/forgot-password`}>Forgot Password?</Link>

                          </div>
                              </div>
                          
                          
                        </div>
                        <div className="relative">
                          <span className="mt-6 text-blue-400 text-1xl">
                            If You Don't Have An Account&nbsp;
                            <Link
                              className="text-white-500 hover:text-orange-600 hover:underline"
                              to="/signup"
                            >
                              <b>Signup</b>
                            </Link>
                          </span>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Login;
