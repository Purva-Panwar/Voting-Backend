import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useSelector } from "react-redux";
import { HiOutlineBars3 } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import {
  Activity,
  BarChart,
  BarChart2Icon,
  Clipboard,
  Grid,
  LogIn,
  LogOutIcon,
  PieChart,
  User,
} from "lucide-react";
import Register from "./Register";

function Sidebar({ selectedTab, setSelectedTab }) {
  const [isOpen, setIsOpen] = useState(false); // toggle sidebar on mobile
  const handleOnclick = (item) => {
    setSelectedTab(item);
    setIsOpen(false); // Close sidebar after click in mobile
  };
  const token = useSelector((state) => state?.vote?.currentVoter?.token);

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <AiOutlineClose size={30} /> : <HiOutlineBars3 size={30} />}
      </div>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <span className="sidebar-title">Online Voting</span>
        </div>

        <ul className="sidebar-menu">
          <div className="sidebar-user">
            <NavLink to="/profile" className="profile-initial">
              <img
                src="https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?ga=GA1.1.346386233.1742042256&semt=ais_hybrid"
                alt="User"
              />
            </NavLink>
          </div>

          <li
            className={selectedTab === "Home" ? "active" : ""}
            onClick={() => handleOnclick("Home")}
          >
            <Link to="/dashboard" className="sidebar-link">
              <Grid />
              Dashboard
            </Link>
          </li>

          <li
            className={selectedTab === "Elections" ? "active" : ""}
            onClick={() => handleOnclick("Elections")}
          >
            <Link to="/elections" className="sidebar-link">
              <Clipboard />
              Elections
            </Link>
          </li>

          <li
            className={selectedTab === "Contact" ? "active" : ""}
            onClick={() => handleOnclick("Contact")}
          >
            <Link to="/results" className="sidebar-link">
              <PieChart />
              Results
            </Link>
          </li>

          <li
            className={selectedTab === "HowItWorks" ? "active" : ""}
            onClick={() => handleOnclick("HowItWorks")}
          >
            <Link to="/works" className="sidebar-link">
              <Activity />
              How it Works
            </Link>
          </li>
          <li
            className={selectedTab === "Logout" ? "active" : ""}
            onClick={() => handleOnclick("Logout")}
          >
            <Link to="/logout" className="sidebar-link">
              <LogOutIcon />
              Logout
            </Link>
          </li>

          <li
            className={selectedTab === "Profile" ? "active" : ""}
            onClick={() => handleOnclick("Profile")}
          >
            <Link to="/profile" className="sidebar-link">
              <User />
              See my Profile
            </Link>
          </li>

          {/* {token ? (
            <li
              className={selectedTab === "Logout" ? "active" : ""}
              onClick={() => handleOnclick("Logout")}
            >
              <Link to="/logout" className="sidebar-link">
                <LogOutIcon />
                Logout
              </Link>
              
              <Link to="/profile" className="sidebar-link">
                <User />
                See my Profile
              </Link>
            </li>
          ) : (
            <>
              <li
                className={selectedTab === "Login" ? "active" : ""}
                onClick={() => handleOnclick("Login")}
              >
                <Link to="/login" className="sidebar-link">
                  <LogIn />
                  Login
                </Link>
              </li>

              <li
                className={selectedTab === "Register" ? "active" : ""}
                onClick={() => handleOnclick("Register")}
              >
                <Link to="/register" className="sidebar-link">
                  <Register />
                  Register
                </Link>
              </li>
            </>
          )} */}
        </ul>

        {/* Social Links */}
        <div className="logo-section">
          <a
            href="https://www.instagram.com/purvi.rajput17/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              style={{ color: "#E4405F" }}
            />
          </a>
          <a
            href="https://github.com/Purva-Panwar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              style={{ color: "#333" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/purva-panwar-797931293"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              style={{ color: "#0077B5" }}
            />
          </a>
          <a
            href="https://youtube.com/@purvapanwar4273"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              size="2x"
              style={{ color: "#FF0000" }}
            />
          </a>
        </div>
      </div>

      {/* Sidebar Styles */}
      <style>
        <style>
          {`
    * {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .mobile-toggle {
      display: none;
      position: fixed;
      top: 20px;
      left: 20px;
      z-index: 2000;
      background: #ffffff;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      cursor: pointer;
    }

    .sidebar {
      margin-top: 100px;
      width: 340px;
      background: #f7f9fc;
      color: #1f2937;
      padding: 20px;
      height: 82vh;
      border-radius: 20px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.05);
      display: flex;
      flex-direction: column;
      position: fixed;
      overflow-y: auto;
      transition: all 0.3s ease-in-out;
    }

    .sidebar-header {
      margin-bottom: 24px;
      text-align: center;
    }

    .sidebar-title {
      font-size: 1.8rem;
      font-weight: 600;
      color: #111827;
    }

    .sidebar-menu {
      list-style: none;
      padding: 0;
      flex-grow: 1;
    }

    .sidebar-menu li {
      margin: 8px 0;
    }

    .sidebar-link {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 16px;
      border-radius: 10px;
      text-decoration: none;
      color: #374151;
      font-size: 1rem;
      font-weight: 500;
      transition: background 0.3s ease, color 0.3s ease;
    }

    .sidebar-link:hover,
    .sidebar-menu li.active .sidebar-link {
      background: #dbeafe;
      color: #1e40af;
    }

    .sidebar-user {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
    }

    .sidebar-user img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      border: 2px solid #e5e7eb;
    }

    .logo-section {
      display: flex;
      justify-content: space-evenly;
      margin-top: 20px;
      padding: 0 8px;
    }

    .logo-section a {
      transition: transform 0.2s ease;
    }

    .logo-section a:hover {
      transform: scale(1.1);
    }

    /* Responsive Styles */
    @media (max-width: 768px) {
      .mobile-toggle {
        display: block;
      }

      .sidebar {
        width: 75%;
        max-width: 300px;
        background: #ffffff;
        height: 100vh;
        top: 0;
        left: -100%;
        border-radius: 0;
        z-index: 1500;
        box-shadow: 2px 0 10px rgba(0,0,0,0.1);
      }

      .sidebar.open {
        left: 0;
      }
    }

    @media (max-width: 400px) {
      .sidebar {
        width: 100%;
        padding: 16px;
      }

      .sidebar-title {
        font-size: 1.5rem;
      }

      .sidebar-link {
        padding: 10px;
        font-size: 0.95rem;
      }

      .logo-section {
        justify-content: space-around;
      }
    }
  `}
        </style>
      </style>
    </>
  );
}

export default Sidebar;

// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faInstagram,
//   faGithub,
//   faLinkedin,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons";
// import { useSelector } from "react-redux";
// import { HiOutlineBars3 } from "react-icons/hi2";
// import { AiOutlineClose } from "react-icons/ai";

// function Sidebar({ selectedTab, setSelectedTab }) {
//   const [isOpen, setIsOpen] = useState(false); // toggle sidebar on mobile
//   const handleOnclick = (item) => {
//     setSelectedTab(item);
//     setIsOpen(false); // Close sidebar after click in mobile
//   };
//   const token = useSelector((state) => state?.vote?.currentVoter?.token);

//   return (
//     <>
//       {/* Mobile Toggle Button */}
//       <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? <AiOutlineClose size={30} /> : <HiOutlineBars3 size={30} />}
//       </div>

//       <div className={`sidebar ${isOpen ? "open" : ""}`}>
//         <div className="sidebar-header">
//           <span className="sidebar-title">Online Voting</span>
//         </div>

//         <ul className="sidebar-menu">
//           <div className="sidebar-user">
//             <NavLink to="/profile" className="profile-initial">
//               <img
//                 src="https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?ga=GA1.1.346386233.1742042256&semt=ais_hybrid"
//                 alt="User"
//               />
//             </NavLink>
//           </div>

//           <li
//             className={selectedTab === "Home" ? "active" : ""}
//             onClick={() => handleOnclick("Home")}
//           >
//             <Link to="/" className="sidebar-link">
//               Home
//             </Link>
//           </li>

//           <li
//             className={selectedTab === "About" ? "active" : ""}
//             onClick={() => handleOnclick("About")}
//           >
//             <Link to="/elections" className="sidebar-link">
//               Elections
//             </Link>
//           </li>

//           <li
//             className={selectedTab === "Contact" ? "active" : ""}
//             onClick={() => handleOnclick("Contact")}
//           >
//             <Link to="/results" className="sidebar-link">
//               Results
//             </Link>
//           </li>

//           <li
//             className={selectedTab === "HowItWorks" ? "active" : ""}
//             onClick={() => handleOnclick("HowItWorks")}
//           >
//             <Link to="/works" className="sidebar-link">
//               How it Works
//             </Link>
//           </li>

//           {token ? (
//             <li
//               className={selectedTab === "Logout" ? "active" : ""}
//               onClick={() => handleOnclick("Logout")}
//             >
//               <Link to="/logout" className="sidebar-link">
//                 Logout
//               </Link>
//             </li>
//           ) : (
//             <>
//               <li
//                 className={selectedTab === "Login" ? "active" : ""}
//                 onClick={() => handleOnclick("Login")}
//               >
//                 <Link to="/login" className="sidebar-link">
//                   Login
//                 </Link>
//               </li>

//               <li
//                 className={selectedTab === "Register" ? "active" : ""}
//                 onClick={() => handleOnclick("Register")}
//               >
//                 <Link to="/register" className="sidebar-link">
//                   Register
//                 </Link>
//               </li>
//             </>
//           )}
//         </ul>

//         {/* Social Links */}
//         <div className="logo-section">
//           <a
//             href="https://www.instagram.com/purvi.rajput17/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FontAwesomeIcon
//               icon={faInstagram}
//               size="2x"
//               style={{ color: "#E4405F" }}
//             />
//           </a>
//           <a
//             href="https://github.com/Purva-Panwar"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FontAwesomeIcon
//               icon={faGithub}
//               size="2x"
//               style={{ color: "#333" }}
//             />
//           </a>
//           <a
//             href="https://www.linkedin.com/in/purva-panwar-797931293"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FontAwesomeIcon
//               icon={faLinkedin}
//               size="2x"
//               style={{ color: "#0077B5" }}
//             />
//           </a>
//           <a
//             href="https://youtube.com/@purvapanwar4273"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FontAwesomeIcon
//               icon={faYoutube}
//               size="2x"
//               style={{ color: "#FF0000" }}
//             />
//           </a>
//         </div>
//       </div>

//       {/* Sidebar Styles */}
//       <style>
//         {`
//           .mobile-toggle {
//             display: none;
//             position: fixed;
//             top: 20px;
//             left: 20px;
//             z-index: 2000;
//             background: white;
//             border-radius: 50%;
//             padding: 8px;
//             box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
//           }
//           .sidebar {
//             margin-top: 100px;
//             width: 20%;
//             min-width: 220px;
//             background: rgb(241, 241, 241);
//             color: black;
//             padding: 20px;
//             height: 80vh;
//             border-radius: 20px;
//             box-shadow: 4px 2px 10px rgba(0,0,0,0.1);
//             display: flex;
//             flex-direction: column;
//             position: fixed;
//             overflow-y: auto;
//             transition: all 0.3s ease;
//           }
//           .sidebar-header {
//             margin-bottom: 20px;
//             text-align: center;
//           }
//           .sidebar-title {
//             font-size: 1.8rem;
//             font-weight: bold;
//           }
//           .sidebar-menu {
//             list-style: none;
//             padding: 0;
//             flex-grow: 1;
//           }
//           .sidebar-menu li {
//             margin: 10px 0;
//           }
//           .sidebar-link {
//             display: block;
//             padding: 12px 15px;
//             border-radius: 8px;
//             text-decoration: none;
//             color: black;
//             font-weight: 500;
//             transition: background 0.3s;
//           }
//           .sidebar-link:hover, .sidebar-menu li.active .sidebar-link {
//             background: rgb(190, 203, 239);
//           }
//           .sidebar-user {
//             display: flex;
//             justify-content: center;
//             margin-bottom: 20px;
//           }
//           .sidebar-user img {
//             width: 60px;
//             height: 60px;
//             border-radius: 50%;
//           }
//           .logo-section {
//             display: flex;
//             justify-content: space-around;
//             margin-top: 20px;
//           }
//           /* Responsive Styles */
//           @media (max-width: 768px) {
//             .mobile-toggle {
//               display: block;
//             }
//             .sidebar {
//               width: 70%;
//               max-width: 300px;
//               background: white;
//               height: 100vh;
//               top: 0;
//               left: -100%;
//               border-radius: 0px;
//               z-index: 1500;
//             }
//             .sidebar.open {
//               left: 0;
//             }
//           }

//           @media (max-width: 200px) {
//             .sidebar {
//               width: 95%;
//               padding: 10px;
//             }
//             .sidebar-title {
//               font-size: 1.2rem;
//             }
//             .sidebar-link {
//               padding: 8px 10px;
//               font-size: 0.9rem;
//             }
//           }
//         `}
//       </style>
//     </>
//   );
// }

// export default Sidebar;

// // import React from "react";
// // import { Link, NavLink } from "react-router-dom";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import {
// //   faInstagram,
// //   faGithub,
// //   faLinkedin,
// //   faTelegram,
// //   faYoutube,
// // } from "@fortawesome/free-brands-svg-icons";
// // import { useSelector } from "react-redux";
// // import { HiOutlineBars3 } from "react-icons/hi2";
// // import { AiOutlineClose } from "react-icons/ai";

// // function Sidebar({ selectedTab, setSelectedTab }) {
// //   const handleOnclick = (item) => {
// //     setSelectedTab(item);
// //   };
// //   const token = useSelector((state) => state?.vote?.currentVoter?.token);
// //   return (
// //     <div className="sidebar">
// //       <div className="sidebar-header">
// //         <span className="sidebar-title">Online Voting</span>
// //       </div>

// //       <ul className="sidebar-menu">
// //         <div className="sidebar-user">
// //           <span className="sidebar-username">
// //             <div className="profile-contain ">
// //               <NavLink to="/profile" className="profile-initial ">
// //                 <img
// //                   src="https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?ga=GA1.1.346386233.1742042256&semt=ais_hybrid"
// //                   alt=""
// //                 />
// //               </NavLink>
// //             </div>
// //           </span>
// //         </div>

// //         <li
// //           className={selectedTab === "Home" ? "active" : ""}
// //           onClick={() => handleOnclick("Home")}
// //         >
// //           <Link to="/" className="sidebar-link">
// //             Home
// //           </Link>
// //         </li>
// //         <li
// //           className={selectedTab === "About" ? "active" : ""}
// //           onClick={() => handleOnclick("About")}
// //         >
// //           <Link to="/elections" className="sidebar-link">
// //             Elections
// //           </Link>
// //         </li>
// //         <li
// //           className={selectedTab === "Contact" ? "active" : ""}
// //           onClick={() => handleOnclick("Contact")}
// //         >
// //           <Link to="/results" className="sidebar-link">
// //             Result
// //           </Link>
// //         </li>
// //         <li
// //           className={selectedTab === "HowItWorks" ? "active" : ""}
// //           onClick={() => handleOnclick("HowItWorks")}
// //         >
// //           <Link to="/works" className="sidebar-link">
// //             How it Works
// //           </Link>
// //         </li>
// //         {token ? (
// //           <li
// //             className={selectedTab === "Logout" ? "active" : ""}
// //             onClick={() => handleOnclick("Logout")}
// //           >
// //             <Link to="/logout" className="sidebar-link">
// //               Logout
// //             </Link>
// //           </li>
// //         ) : (
// //           <>
// //             <li
// //               className={selectedTab === "Login" ? "active" : ""}
// //               onClick={() => handleOnclick("Login")}
// //             >
// //               <Link to="/login" className="sidebar-link">
// //                 Login
// //               </Link>
// //             </li>
// //           </>
// //         )}
// //         {!token && (
// //           <li
// //             className={selectedTab === "Register" ? "active" : ""}
// //             onClick={() => handleOnclick("Register")}
// //           >
// //             <Link to="/register" className="sidebar-link">
// //               Register
// //             </Link>
// //           </li>
// //         )}
// //       </ul>
// //       <div className="flex logo space-x-4 logo">
// //         <a
// //           href="https://www.instagram.com/purvi.rajput17/?utm_source=qr&r=nametag"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <FontAwesomeIcon
// //             icon={faInstagram}
// //             size="3x"
// //             style={{ color: "#E4405F" }}
// //           />
// //         </a>
// //         <br />
// //         <a
// //           href="https://github.com/Purva-Panwar"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <FontAwesomeIcon
// //             icon={faGithub}
// //             size="3x"
// //             style={{ color: "#333" }}
// //           />
// //         </a>
// //         <br />
// //         <a
// //           href="https://www.linkedin.com/in/purva-panwar-797931293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <FontAwesomeIcon
// //             icon={faLinkedin}
// //             size="3x"
// //             style={{ color: "#0077B5" }}
// //           />
// //         </a>
// //         <br />
// //         <a
// //           href="https://youtube.com/@purvapanwar4273?si=VFG410iNRKscqVvc"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <FontAwesomeIcon
// //             icon={faYoutube}
// //             size="3x"
// //             style={{ color: "#0088CC" }}
// //           />
// //         </a>
// //         <br />
// //       </div>
// //       <style>
// //         {`
// //           .sidebar {
// //           margin:20px;
// //             margin-top:120px;
// //             width: 20%;
// //             border-radius:20px;
// //             height:80%;
// //             min-width: 200px;
// //             background-color:rgb(231, 228, 228);
// //             color:black;
// //             padding:10px 20px;
// //             display: flex;
// //             flex-direction: column;
// //             // height: calc(100vh - 160px); /* dynamic height */
// //             position: fixed;
// //             box-shadow: 4px 2px 10px rgba(3, 0, 16, 0.1);
// //             overflow-y: auto;
// //             // margin:10px;
// //           }

// //           .sidebar-header {
// //             margin-bottom: 10px;
// //           }

// //           .sidebar-title {
// //             font-size: 1.5rem;
// //             font-weight: bold;
// //           }

// //           .sidebar-menu {
// //             list-style: none;
// //             padding: 0;
// //             margin: 10px;
// //             flex-grow: 1;
// //           }

// //           .sidebar-menu li {
// //             margin-bottom: 10px;
// //             border-radius: 4px;
// //             transition: background 0.3s;
// //           }

// //           .sidebar-link {
// //             display: block;
// //             padding: 12px;
// //             color:black;
// //             text-decoration: none;
// //             border-radius: 4px;
// //             width: 100%;
// //           }

// //           .sidebar-menu li:hover .sidebar-link,
// //           .sidebar-menu li.active .sidebar-link {
// //             background-color:rgb(190, 203, 239);
// //           }

// //           .sidebar-user {
// //             display: flex;
// //             align-items: center;
// //             margin-top: auto;
// //             gap: 10px;
// //             padding-bottom: 20px;
// //             border-bottom: 1px solid #444;
// //           }

// //           .sidebar-avatar {
// //             width: 32px;
// //             height: 32px;
// //             border-radius: 50%;
// //           }

// //           .sidebar-username {
// //             font-weight: 600;
// //           }

// //           /* -------- Responsive Style -------- */
// //           @media (max-width: 768px) {
// //             .sidebar {
// //               position: relative;
// //               width: 100%;
// //               height: auto;
// //               flex-direction: row;
// //               justify-content: space-around;
// //               padding: 10px;
// //             }
// //             .sidebar-menu {
// //               display: flex;
// //               flex-direction: row;
// //               flex-wrap: wrap;
// //               gap: 10px;
// //             }
// //             .sidebar-user {
// //               display: none; /* hide user info on mobile */
// //             }
// //           }
// //         `}
// //       </style>
// //     </div>
// //   );
// // }

// // export default Sidebar;

// // // import React from "react";
// // // // import "./Sidebar.css";

// // // function Sidebar({ selectedTab, setSelectedTab }) {
// // //   const handleOnclick = (item) => {
// // //     setSelectedTab(item);
// // //   };

// // //   return (
// // //     <div className="sidebar">
// // //       <div className="sidebar-header">
// // //         <span className="sidebar-title">Online Voting</span>
// // //       </div>
// // //       <ul className="sidebar-menu">
// // //         <li
// // //           className={selectedTab === "Home" ? "active" : ""}
// // //           onClick={() => handleOnclick("")}
// // //         >
// // //           Home
// // //         </li>
// // //         <li
// // //           className={selectedTab === "Create Post" ? "active" : ""}
// // //           onClick={() => handleOnclick("Create Post")}
// // //         >
// // //           About
// // //         </li>
// // //         <li onClick={() => handleOnclick("Orders")}>Contact us</li>
// // //         <li onClick={() => handleOnclick("Products")}>How its works</li>
// // //         <li onClick={() => handleOnclick("Customers")}>Logout</li>
// // //         <div className="sidebar-user">
// // //           <img
// // //             src="https://github.com/mdo.png"
// // //             alt="User"
// // //             className="sidebar-avatar"
// // //           />
// // //           <span className="sidebar-username">mdo</span>
// // //         </div>
// // //       </ul>

// // //       <style>
// // //         {`
// // //             .sidebar {
// // //             margin-top:90px;
// // //   width: 20%;
// // //        background-color: rgb(14, 14, 90);
// // //   color: white;
// // //   padding: 20px;
// // //   display: flex;
// // //   flex-direction: column;
// // //   height:60%;
// // //   position:fixed;
// // //   box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
// // // }

// // // .sidebar-header {
// // //   margin-bottom: 10px;
// // // }

// // // .sidebar-title {
// // //   font-size: 1.5rem;
// // //   font-weight: bold;
// // // }

// // // .sidebar-menu {
// // //   list-style: none;
// // //   padding: 0;
// // //   margin: 0;
// // //   flex-grow: 1;
// // // }

// // // .sidebar-menu li {
// // //   padding: 12px;
// // //   margin-bottom: 10px;
// // //   cursor: pointer;
// // //   border-radius: 4px;
// // //   transition: background 0.3s;
// // // }

// // // .sidebar-menu li:hover,
// // // .sidebar-menu li.active {
// // //   background-color: #333;
// // // }

// // // .sidebar-user {
// // //   display: flex;
// // //   align-items: center;
// // //   margin-top: auto;
// // //   gap: 10px;
// // //   padding-top: 20px;
// // //   border-top: 1px solid #444;
// // // }

// // // .sidebar-avatar {
// // //   width: 32px;
// // //   height: 32px;
// // //   border-radius: 50%;
// // // }

// // // .sidebar-username {
// // //   font-weight: 600;
// // // }
// // // `}
// // //       </style>
// // //     </div>
// // //   );
// // // }

// // // export default Sidebar;
