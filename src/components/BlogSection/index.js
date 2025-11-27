import React from "react";
import blog1 from "../../images/blog/img-1.jpg";
import blog2 from "../../images/blog/img-2.jpg";
import blog3 from "../../images/blog/img-3.jpg";
import { Link } from "react-router-dom";
import "./style.css";

const TestimonialCards = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className="testimonial-area section-padding">
      <div className="container">

        {/* Heading */}
        <div className="row">
          <div className="col-12">
            <span className="section-tag">TESTIMONIALS</span>
            <h2 className="section-title">
              Hear from our beloved community
            </h2>
            <p className="section-subtitle">
              our children and partners love us for our constant support
              and strive for better future
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="row mt-4">

          {/* Card 1 */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="testimonial-card">
              <img src={blog1} alt="" className="testimonial-img" />

              <div className="testimonial-content">
                <p className="testimonial-text text-white">
                  Quis neque, eu et ipsum amet, vel et. Varius integer enim
                  pellentesque ornare pharetra faucibus arcu. Mauris blandit egestas nibh.
                </p>

                <div className="testimonial-user">
                  <img src={blog1} className="user-img" alt="" />
                  <div>
                    <h5>Loki Bright</h5>
                    <span>Founder, Bitcoin (BTC)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="testimonial-card">
              <img src={blog2} alt="" className="testimonial-img" />

              <div className="testimonial-content">
                <p className="testimonial-text text-white">
                  Quis neque, eu et ipsum amet, vel et. Varius integer enim
                  pellentesque ornare pharetra faucibus arcu. Mauris blandit egestas nibh.
                </p>

                <div className="testimonial-user">
                  <img src={blog2} className="user-img" alt="" />
                  <div>
                    <h5>Stephen Summers</h5>
                    <span>Product Manager, Meta</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="testimonial-card">
              <img src={blog3} alt="" className="testimonial-img" />

              <div className="testimonial-content">
                <p className="testimonial-text text-white">
                  Quis neque, eu et ipsum amet, vel et. Varius integer enim
                  pellentesque ornare pharetra faucibus arcu. Mauris blandit egestas nibh.
                </p>

                <div className="testimonial-user">
                  <img src={blog3} className="user-img" alt="" />
                  <div>
                    <h5>Gwenethe Macy</h5>
                    <span>UI Designer, Booking.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default TestimonialCards;
