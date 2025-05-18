import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoIosMoon } from "react-icons/io";
import { IoMdSunny } from "react-icons/io";
import { HiOutlineBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import axios from "axios";
import "../store/vote-slice";
import {
  Home,
  Info,
  LogOut,
  Phone,
  Clipboard,
  PieChart,
  LogIn,
  Layers,
  Mail,
} from "lucide-react";
import Features from "../pages/Features";
const Navbar = () => {
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(
    window.innerWidth < 600 ? false : true
  );

  const [isAccountVerified, setIsAccountVerified] = useState(false);

  const voterId = useSelector((state) => state?.vote?.currentVoter?.id);
  const token = useSelector((state) => state?.vote?.currentVoter?.token);

  const closeNavMenu = () => {
    if (window.innerWidth < 600) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  };

  const sendVerificationOtp = async (voterId, token) => {
    if (!voterId) {
      console.error("Voter email is missing.");
      alert("Your email is missing. Please log in again.");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/voters/send-otp`,
        { voterId },
        {
          withCredentials: true,
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.success) {
        console.log(response.data.message);
        navigate("/email-verify");
      }
    } catch (error) {
      console.error(
        "Error sending OTP:",
        error.response?.data?.message || error.message
      );
    }
  };

  useEffect(() => {
    const fetchVerificationStatus = async () => {
      try {
        if (!token || !voterId) {
          console.log("Token or Voter ID not found");
          return;
        }

        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/voters/${voterId}`,
          {
            withCredentials: true,
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setIsAccountVerified(response.data.isAccountVerified);
      } catch (error) {
        console.error("Error fetching verification status:", error);
      }
    };

    fetchVerificationStatus();
  }, [token, voterId]); // ✅ Include voterId in dependencies

  return (
    <nav>
      <div className="container nav_container">
        <div>
          <Link to="/" className="nav_logo">
            {/* <h1>E-VoteHub</h1> */}
            <img
              src="https://cdn-icons-png.flaticon.com/128/8487/8487642.png"
              alt=""
            />
            e-Votehub
          </Link>
        </div>

        <div>
          {/* {token && isAccountVerified && showNav && ( */}
          {showNav && (
            <menu>
              <div className="link">
                <NavLink to="/" onClick={closeNavMenu}>
                  <Home /> <br /> <i class="fa-solid fa-house"></i>Home
                </NavLink>
              </div>
              <NavLink to="/about" onClick={closeNavMenu}>
                <Info />
                <br />
                About
              </NavLink>
              <NavLink to="/contact" onClick={closeNavMenu}>
                <Phone />
                <br />
                Contact
              </NavLink>
              <NavLink to="/features" onClick={closeNavMenu}>
                <Layers />
                <br />
                Features
              </NavLink>

              {token ? (
                <>
                  {!isAccountVerified && token && (
                    <>
                      <NavLink
                        to="/email-verify"
                        onClick={(e) => {
                          e.preventDefault();
                          sendVerificationOtp(voterId, token);

                          // setShowNav(false);
                        }}
                      >
                        <Mail />
                        <br />
                        Verify Email
                      </NavLink>
                    </>
                  )}
                  <NavLink to="/logout" onClick={closeNavMenu}>
                    <LogOut />
                    <br />
                    Logout
                  </NavLink>
                  <div className="profile-contain ">
                    <NavLink
                      to="/profile"
                      onClick={closeNavMenu}
                      className="profile-initial "
                    >
                      <img
                        src="https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?ga=GA1.1.346386233.1742042256&semt=ais_hybrid"
                        alt=""
                      />
                    </NavLink>
                  </div>
                </>
              ) : (
                <>
                  {/* <NavLink to="/elections" onClick={closeNavMenu}>
                    <Clipboard />
                    <br />
                    Election
                  </NavLink>
                  <NavLink to="/results" onClick={closeNavMenu}>
                    <PieChart />
                    <br />
                    Result
                  </NavLink> */}
                  <NavLink to="/login" onClick={closeNavMenu}>
                    <LogIn />
                    <br />
                    Login
                  </NavLink>
                  {/* <NavLink to="/register" onClick={closeNavMenu}>
                    Register
                  </NavLink> */}
                </>
              )}

              {/* ✅ Only show Verify Email button if voterEmail exists and is not verified */}
            </menu>
          )}

          {/* <button
            className="theme_toggle-btn"
            onClick={
              changeThemeHandler
              //   () => {
              //   const newTheme =
              //     localStorage.getItem("voting-app-theme") === "dark"
              //       ? ""
              //       : "dark";
              //   localStorage.setItem("voting-app-theme", newTheme);
              //   setDarkTheme(newTheme);
              // }
            }
          >
            {darkTheme ? <IoMdSunny /> : <IoIosMoon />}
          </button> */}

          <button
            className="nav_toggle-btn"
            onClick={() => setShowNav(!showNav)}
          >
            {showNav ? <AiOutlineClose /> : <HiOutlineBars3 />}
          </button>
        </div>
      </div>

      <style>
        {`
        .verify-btn-nav{
        background-color:orange;
        padding:7px 10px;
         border-radius: 7px;
        }
        .profile-contain {
          position: relative;
          display: inline-block;
          margin-left: 10px;
          cursor: pointer;
           background-color: rgb(14, 14, 90);
       
          border:none;
         
          border-radius: 50%;
        }

        .profile-initial {
          width: 50px;
          height: 50px;
         
          color: white;
          font-size: 30px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }
        .profile-initial img{
           border-radius: 50%;
           }
           @media (max-width: 768px){
           .profile-contain{
           width:20px;
           height:20px;
           margin:25px;
           }
           .profile-initial {
           width:20px;
           height:20px;
           }
               .profile-initial img{
                width:50px;
           height:50px;
           
               }
           }
               
      
      `}
      </style>
    </nav>
  );
};

export default Navbar;
