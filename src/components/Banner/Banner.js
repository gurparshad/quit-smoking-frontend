import React from "react";
import banner2 from "../../banner2.jpg";
import banner from "../../banner.jpeg";
import banner3 from "../../banner3.jpg";
import banner4 from "../../banner4.jpg";
import "./Banner.css";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="banner">
      <h2 className="banner__text">Kick-Start Your Healthy Lifestyle Today</h2>
      <Carousel autoPlay={true} interval={5000}>
        <Carousel.Item>
          <img className="banner__img" src={banner3} alt="Second slide" />

          <Carousel.Caption>
            <h3>Quit Smoking</h3>
            <p>Quit this habit today, for you and your loved ones</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="banner__img" src={banner2} alt="First slide" />
          <Carousel.Caption>
            <h3>Exercise</h3>
            <p>Go for a run, divert your mind</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="banner__img" src={banner4} alt="Second slide" />

          <Carousel.Caption>
            <h3>Say No</h3>
            <p>Smoking kills, Please stop if you want to live</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="banner__img" src={banner} alt="Third slide" />

          <Carousel.Caption>
            <h3>Eat Healthy</h3>
            <p>There are so many good things to eat.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
