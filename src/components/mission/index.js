import React from "react";
import Slider from "react-slick";

import img1 from "../../images/about6.png";
import img2 from "../../images/about4.png";
import img3 from "../../images/about5.png";

import { Link } from "react-router-dom";
import "./style.css";

const Mission = (props) => {
  // Slick Settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className={`wpo-mission-area ${props.subclass}`}>
      <div className="container pt-5 mt-5">
        {/* Section Title */}
        <div className="row">
          <div className="col-12">
            <div className="wpo-section-title">
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#91278f",
                }}
              >
                OUR PARTNERING ORGS
              </span>
              <h2
                style={{
                  fontSize: "36px",
                  fontWeight: "600",
                  lineHeight: "44px",
                  letterSpacing: "2%",
                }}
              >
                Partners That Trusted Us to Amplify Impacts
              </h2>
              <p style={{ color: "#37323C" }}>
                We have strategic partners, leaders from the private, public,
                and NGO sectors, supporting children’s programs internationally.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="wpo-mission-wrap">
          <div className="row align-items-center">
            {/* LEFT SIDE - Partner Links */}
            <div className="col-lg-6">
              <div className="partner-links">
                <h3>
                  <Link to="/childcenter">Children Guidance Center</Link>
                </h3>
                <h3>
                  <Link to="/cards">
                    Community & Rural Development Society (CARDS)
                  </Link>
                </h3>
                <h3>
                  <Link to="/asha">Aasha Jyothi Welfare</Link>
                </h3>
                <h3>
                  <Link to="/pavani">Pavani Special School</Link>
                </h3>
              </div>
            </div>

            {/* RIGHT SIDE - Image Carousel */}
            <div className="col-lg-6">
              <Slider {...settings}>
                <div>
                  <img style={{ borderRadius: "12px" }} src={img1} className="carousel-img w-100" alt="" />
                </div>
                <div>
                  <img style={{ borderRadius: "12px" }} src={img2} className="carousel-img w-100" alt="" />
                </div>
                <div>
                  <img style={{ borderRadius: "12px" }} src={img3} className="carousel-img w-100" alt="" />
                </div>
              </Slider>
            </div>

            {/* Bottom Description */}
            <div className="col-12">
              <div className="wpo-mission-item">
                <p>
                  The Child Guidance Center encompasses 14 boarding schools* for children with disabilities, providing lodging <br/> and meals as well as medical care and education appropriate to the ability of each student. A 15th boarding <br/>school is currently under construction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
