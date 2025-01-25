import React from "react";
import "./Header.scss";
import logo from "../../assests/tp_logo.png";
import { Link } from "react-router-dom";

import { HiOutlineBars3 } from "react-icons/hi2";
const Header = () => {
  const navs = [
    {
      nav_path: "/",
      nav_name: "Home",
    },
    {
      nav_path: "/",
      nav_name: "About",
    },
    {
      nav_path: "/",
      nav_name: "Products",
    },
    {
      nav_path: "/",
      nav_name: "Blogs",
    },
    {
      nav_path: "/",
      nav_name: "Contact",
    },
  ];
  return (
    <>
      <div class="header_parent parent">
        <div class="header_cont cont">
          <div class="left_side_content">
            <div class="hamburger">
              <HiOutlineBars3 />
            </div>
            <div class="logo">
              <img src={logo} alt="" />
            </div>
            <div class="navlinks">
              {navs.map((item, index) => (
                <Link>{item.nav_name}</Link>
              ))}
            </div>
          </div>
          <div class="right_side_content">
            <a class="contact_num">
              <div class="icon bg-img-cover"></div>
              <p>+911234567890</p>
            </a>
            <div class="bike_move ">
              <div class="bike_image bg-img-contain"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
