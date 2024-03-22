import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isBodyClassAdded, setIsBodyClassAdded] = useState(false);

  const handleClick = () => {
    setIsBodyClassAdded(!isBodyClassAdded);
  };

  // Conditionally add a class to the body tag
  React.useEffect(() => {
    if (isBodyClassAdded) {
      document.body.classList.add("toggle-sidebar");
    } else {
      document.body.classList.remove("toggle-sidebar");
    }
  }, [isBodyClassAdded]);

  return (
    <>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        {/* <div className="d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <img
              src="assets/img/Image.jpg"
              alt=""
              style={{ height: "50px", width: "auto" }}
            />
          </a>
          <i
            onClick={handleClick}
            className="bi bi-list toggle-sidebar-btn Sidenavbtn"
          ></i>
        </div> */}

        <div className="d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center">
            <img
              src="assets/img/Image.jpg"
              alt=""
              style={{ height: "50px", width: "auto" }}
            />
          </Link>
          <i
            onClick={handleClick}
            className="bi bi-list toggle-sidebar-btn Sidenavbtn"
          ></i>
        </div>

        <div className="search-bar">
          <form
            className="search-form d-flex align-items-center"
            method="POST"
            action="#"
          >
            <input
              type="text"
              name="query"
              placeholder="Search"
              title="Enter search keyword"
            />
            <button type="submit" title="Search">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item d-block d-lg-none">
              <a className="nav-link nav-icon search-bar-toggle " href="#">
                <i className="bi bi-search"></i>
              </a>
            </li>

            <li className="nav-item dropdown pe-3">
              <a
                className="nav-link nav-profile d-flex align-items-center pe-0"
                href="#"
                data-bs-toggle="dropdown"
              >
                <img
                  src="assets/img/profile-img.jpg"
                  alt="Profile"
                  className="rounded-circle"
                />
                <span className="d-none d-md-block dropdown-toggle ps-2">
                  K. Anderson
                </span>
              </a>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item d-flex align-items-center"
                    href="#"
                  >
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Sign Out</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
