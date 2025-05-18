import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import axios from "axios";

const RootLayout = () => {
  const voterId = useSelector((state) => state?.vote?.currentVoter?.id);
  // const token = useSelector((state) => state?.vote?.currentVoter?.token);
  const [selectedTab, setSelectedTab] = useState("Home");
  const [isVoterRegistered, setIsVoterRegistered] = useState(false);
  const token = useSelector((state) => state?.vote?.currentVoter?.token);
  useEffect(() => {
    // Check voter registration status from localStorage (or your logic)
    const registered = localStorage.getItem("voterRegistered");
    if (registered === "true") {
      setIsVoterRegistered(true);
    }
  }, []);

  const [isAccountVerified, setIsAccountVerified] = useState(false);
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
  }, [token, voterId]);

  return (
    <>
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content */}
      <div style={{ display: "flex", minHeight: "calc(100vh - 160px)" }}>
        {/* Conditionally show Sidebar if voter is registered */}
        {token && (
          <aside style={{ width: "20%", margin: "0 20px" }}>
            <Sidebar
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          </aside>
        )}

        {/* Page Content Area */}
        <main
          style={{
            flex: 1,
            
            // marginTop: "5px",

            // width: isVoterRegistered && "100%", // Expand if no sidebar
          }}
        >
          <Outlet />
          {!token && <Footer />}
        </main>
      </div>
    </>
  );
};

export default RootLayout;

// import React, { useState } from "react";
// import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Sidebar from "./Sidebar";
// import Footer from "./Footer";

// const RootLayout = () => {
//   const [selectedTab, setSelectedTab] = useState("Home");

//   return (
//     <>
//       {/* Top Navigation */}
//       <Navbar />

//       {/* Main content area: sidebar + outlet */}
//       <div style={{ display: "flex", minHeight: "calc(100vh - 160px)" }}>
//         {/* Sidebar on the left */}
//         <main style={{ width: "20%", margin: "0 20px" }}>
//           <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
//         </main>

//         {/* Outlet (page content) on the right */}
//         <main
//           style={{ flex: 1, padding: "1rem", width: "75%", marginTop: "70px" }}
//         >
//           <Outlet />
//           <Footer />
//         </main>
//       </div>

//       {/* Bottom Footer */}
//     </>
//   );
// };

// export default RootLayout;

// // import React, { useState } from "react";
// // import { Outlet } from "react-router-dom";
// // import Navbar from "../components/Navbar";
// // // import Sidebar from "./Sidebar";
// // import Footer from "./Footer";
// // import Sidebar from "./Sidebar";

// // const RootLayout = () => {
// //   const [setectedTab, setSelectedTab] = useState("Home");
// //   return (
// //     <>

// //       <Navbar />
// //       <Sidebar selectedTab={setectedTab} setSelectedTab={setSelectedTab} />
// //       <Outlet />
// //       <Footer />
// //     </>
// //   );
// // };

// // export default RootLayout;
