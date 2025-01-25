import React, { useState } from "react";
import "./AfterHeader.scss";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { product } from "../../data";
const AfterHeader = () => {
  const [searchInput, setSearchInput] = useState("");
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
            <input
              type="search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search For Products"
            />
            {searchInput !== "" && (
              <div class="list">
                {product
                  .filter(
                    (item) =>
                      item.product_name
                        .toLowerCase()
                        .includes(searchInput.toLowerCase()) ||
                      item.Vehicle_name.toLowerCase().includes(
                        searchInput.toLowerCase()
                      )
                  )
                  .map((item, index) => (
                    <div class="item">
                      <img src={item.product_image} alt="" />
                      <div class="right_section">
                        <h2>{item.product_name}</h2>
                        <h5>{item.Vehicle_name}</h5>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            )}
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
