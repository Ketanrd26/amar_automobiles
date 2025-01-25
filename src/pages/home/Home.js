import React from "react";
import Herosection from "../../comps/herosection/Herosection";
import "./Home.scss";
import body_part from "../../assests/body_parts.png";
import spare_part from "../../assests/carborate_part.webp";
const Home = () => {
  return (
    <>
      <Herosection />

      <div class="grid_section parent">
        <div class="grid_section_cont cont">
          <div class="left">
            <div class="left_side">
              <h2>
                Body parts <br /> for any vehicle
              </h2>
              <div class="btn">
                <div class="text">Shop Now</div>
              </div>
            </div>

            <div class="right_side">
              <img src={body_part} alt="" />
            </div>
          </div>
          <div class="right">
            <div class="left_side">
              <h2>unleash your true potential</h2>
            </div>
            <div class="right_side">
              <img src={spare_part} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div class="about_parent parent">
        <div class="overlay bg-img-cover"></div>
        <div class="content cont">
          <div class="left"></div>
          <div class="right">
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              eaque.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              officia culpa! Deleniti iure dolore aliquam quaerat quia nemo
              alias illum recusandae, inventore, eveniet, porro maiores! Quos
              possimus enim unde hic. Delectus maxime impedit, eveniet ipsum
              quibusdam necessitatibus debitis autem, consequuntur sint facilis,
              cum aspernatur nisi totam officiis dolorem quos dolores.
            </p>
            <div class="btn btn2">
                <div class="text">
                    Know More
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
