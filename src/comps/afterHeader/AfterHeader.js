import React from "react";
import "./AfterHeader.scss";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
const AfterHeader = () => {
  return (
    <>
      <div class="afterheader_parent parent">
        <div class="afterheader_cont cont">
          <div class="drop_down">
            <div class="drop_down_input">
              <div class="icon">
                <HiOutlineBars3 />
              </div>
              <p>Filter Products</p>
            </div>
          </div>
          <div class="sear_input">
            <div class="icon">
            <IoSearch />
            </div>
            <input type="search" placeholder="Search For Products" />
          </div>
          <div class="drop_down drop_info">
            <div class="drop_down_input">
              <div class="icon"></div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AfterHeader;
