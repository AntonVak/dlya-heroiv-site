import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./slider.module.css";
import NavMenu from "./NavMenu";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className={styles.slider}>
      <NavMenu />
        <Slider {...settings}>
          <div>
            <img src="/src/components/common/img/Slider JPG_1.png" alt="" />
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}