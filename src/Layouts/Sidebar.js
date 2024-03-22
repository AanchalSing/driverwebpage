import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    // Extract the current pathname from the location object
    const pathname = location.pathname;
    // Update the activePage state with the current pathname
    setActivePage(pathname);
  }, [location.pathname]); // Update activePage whenever location.pathname changes

  return (
    <>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          {/* <li className="nav-item">
            <a className="nav-link" href="index.html">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>
          </li> */}
          <li className="nav-item">
            <NavLink
              to="/dashboard"
              className={`nav-link ${
                activePage === "/dashboard" ? "active" : ""
              }`}
            >
              <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center"></div>
              <span className="nav-link-text ms-1">Dashboard</span>
            </NavLink>
          </li>
          <hr className="horizontal dark mt-0" />
          <li className="nav-item">
            <NavLink
              to="/registration"
              className={`nav-link ${
                activePage === "/registration" ? "active" : ""
              }`}
            >
              <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center"></div>
              <span className="nav-link-text ms-1">Registration</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/firstlevel"
              className={`nav-link ${
                activePage === "/firstlevel" ? "active" : ""
              }`}
            >
              <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center"></div>
              <span className="nav-link-text ms-1">First Level Approval</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/viewpage"
              className={`nav-link ${
                activePage === "/viewpage" ? "active" : ""
              }`}
            >
              <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center me-2 d-flex align-items-center justify-content-center"></div>
              <span className="nav-link-text ms-1">View Page</span>
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
