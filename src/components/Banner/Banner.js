import React from "react";
import banner2 from "../../banner2.jpg";
import banner3 from "../../banner3.jpg";
import banner4 from "../../banner4.jpg";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div className="banner">
        <h2 className="banner__text">
          Quit smoking today, for a brighter tomorrow.
        </h2>
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
              <h3>Quit</h3>
              <p>For your loved ones</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="banner__img" src={banner4} alt="Second slide" />

            <Carousel.Caption>
              <h3>Say No</h3>
              <p>Smoking kills, Please stop if you want to live</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div class="banner__second">
        <h3 className="banner__textSecond">
          Join our Program today and see the difference in your life.
        </h3>
        <h3 className="banner__textSecond">
          Remember you are not alone in this journey.
        </h3>
        <h3 className="banner__textSecond">
          In our community you will find great support and interaction with
          others.
        </h3>
        <Link to="/register" className="dashboard__communityBtn">
          Join Now
        </Link>
      </div>
    </div>
  );
};

export default Banner;
