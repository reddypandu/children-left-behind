
import React from "react";
import heroImg from "../images/icons/supporting-disability.png";
import Header from "../components/header";
import "../App";
import img from "../images/icons/Frame 232.png";
import Footer from "../components/footer";
import BlogSection from "../components/BlogSection";
import CtaSection from "../components/cta";
import Needs from "../components/needs";
import img1 from "../images/icons/Frame 235.svg";
import { useNavigate } from "react-router-dom";
import user from "../images/icons/Vector.svg";
import love from "../images/icons/heart.svg";
import ind from "../images/icons/Frame 242.png";
import emp from "../images/icons/Frame 242-1.png";
import Slider from "react-slick";
import img2 from "../images/icons/Vector.png";

function GetInvolved() {
  const navigate = useNavigate();

  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: true,
    variableWidth: true,
  };

  const tags = ["Sponsoring a Child", "Sending a Child to School"];

  const categories = [
    { name: "Sponsorship", special: true },
    { name: "Corporate Partnerships", link: "/education" },
    { name: "Donation", link: "/tripofindia" },
    { name: "Legacy Giving", link: "/tripofindia" },
    { name: "Volunteering", link: "/childtraffic" },
    { name: "Awareness Programs", link: "/nurturingplaytime" },
  ];

  return (
    <>
      
      {/* 🌟 HERO SECTION */}
      <div className="program-hero">
        <div className="program-image-box">
          <img src={img1} alt="hero" className="program-image" />
        </div>

        <div className="program-content">
          <h1 style={{ color: "#1C191E" }} className="program-title">
            Creating child friendly
            <br /> world, with you!
          </h1>
          <p className="program-desc">
            The solution is now for a bright promising future for
            <br /> these children! Join us to learn about innovative ways
            <br /> supporting education and health care in communities
            <br /> in India.
          </p>
        </div>
      </div>
      <br />
      <br />

      <div className="container text-center what">
        <p className="whatwe">Ways you can be involved</p>
        <h2
          className="mx-auto"
          style={{
            maxWidth: "900px",
            color: "#1C191E",
            fontWeight: "600",
            fontSize: "36px",
            lineHeight: "44px",
            letterSpacing: "2%",
          }}
        >
          Enabling Children by Creating Pathways to <br />
          Opportunity
        </h2>
        <p>
          There are endless ways that you can raise funds to support children in
          <br /> desperate need. From essential care in India to international
          opportunities,
          <br /> learn how our unique programs are changing lives.
        </p>
        <br />

        <div className="stats-container">
          <button className="icon-btn">
            <img src={user} alt="icon" className="img-icon" />
            <span className="text">10,000+ Supporters</span>
          </button>

          <button className="icon-btn">
            <img src={love} alt="icon" className="img-icon" />
            <span className="text">5,000+ Children Helped</span>
          </button>
        </div>
      </div>

      {/* 🌟 CONTENT SECTION */}
      <section className="content-section">
        <div className="container">
          <p className="description">
            Ways you can join in the solution:
            <br />
            – Donate to an educational outreach
            <br />
            – Sponsor a student or volunteer’s mission trip to India
            <br />
            – Join us as we share some of the realities in our nation and abroad;
            provide your email and we will notify you of our upcoming information
            meetings
            <br />
            – Improve the lives of children with disabilities around the world
          </p>
          <br />
          <p className="description">
            Children Left Behind can be supported by Individuals, corporations,
            Churches, community groups, friends and well wishers. We accept monetary
            and other donations that will enhance the children education programs and
            humanitarian missions. All gifts are tax deductible.
            <br />
            <br />
            On behalf of the children we serve, Thank you
          </p>
          <br />
          <br />

          <section className="involved-section">
            <div className="involved-container">
              <h2 className="involved-title">Who Can Get Involved</h2>

              <div className="involved-right">
                <div className="involved-item">
                  <img src={ind} alt="Individual" />
                  <p>Individual</p>
                </div>

                <div className="involved-item">
                  <img src={emp} alt="Corporate Employer" />
                  <p>Corporate Employer</p>
                </div>
              </div>
            </div>
          </section>

          <section className="category-section container">
            {/* DESKTOP VIEW (no carousel) */}
            <div className="category-desktop">
              <div
                className="category-list"
                style={{
                  display: "flex",
                  gap: "40px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {categories.map((item, i) => (
                  <span
                    key={i}
                    onClick={() => !item.special && navigate(item.link)}
                    className={`cat-item ${item.special ? "special" : ""}`}
                    style={{
                      fontFamily: "Work Sans",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontSize: "16px",
                      lineHeight: "18px",
                      textAlign: "center",
                      cursor: "pointer",
                      color: "#1C191E",
                    }}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>

            {/* MOBILE VIEW (carousel) */}
            <div className="category-mobile">
              <Slider {...settings}>
                {categories.map((item, i) => (
                  <div key={i} style={{ width: "auto" }}>
                    <span
                      onClick={() => !item.special && navigate(item.link)}
                      className={`cat-item ${item.special ? "special" : ""}`}
                    >
                      {item.name}
                    </span>
                  </div>
                ))}
              </Slider>
            </div>
          </section>
          <br />

          <h2
            style={{
              fontWeight: "600",
              fontSize: "32px",
              lineHeight: "40px",
              letterSpacing: "2%",
            }}
            className="sub-title"
          >
            Helping a Child
          </h2>

          <div className="d-flex flex-wrap mt-4 gap-2">
            {tags.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 small d-flex align-items-center"
                style={{
                  fontSize: "12px",
                  border: "2px solid #7D7188 ",
                  borderRadius: "5px",
                  gap: "6px",
                  color: "#7D7188",
                }}
              >
                <img
                  src={img2}
                  alt="check"
                  style={{ width: "14px", height: "14px", objectFit: "contain" }}
                />
                {item}
              </span>
            ))}
          </div>
          <br />

          <div>
            <button
              style={{
                gap: "6px",
                padding: "10px 16px",
                borderRadius: "8px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#832AD1",
                backgroundColor: "#F8F0FF",
                cursor: "pointer",
                opacity: 1,
                fontFamily: "Work Sans",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "18px",
                textAlign: "center",
                color: "#832AD1",
              }}
            >
              Sponsor now
            </button>
          </div>
          <br />

          <p className="description">
            We are seeing how the promise and hope for a better future through
            education is becoming a reality as we work with at-risk children in the
            United States and developing world nations. We believe in the value of
            education to “open doors” for a new way of life for children and youth
            all around the globe.
            <br />
            Every day men, women, and children are trafficked for sex, or forced into
            labor and/or begging worldwide. Their hearts are crying out for rescue
            from poverty, abuse and bondage. Children Left Behind is committed to
            respond to their cry and be an advocate for this very real need.
            <br />
            <br />
            You too, can be a part of the transformation that education provides in a
            child’s life by giving them a fresh start and a confident hope for a
            better future! Join us in being a part of the solution.
            <br />
            <br />
            For a monthly donation of $35 you can send a child to school for a year.
            The profile of a child who will go to school because of you will be sent
            to you within two weeks.
            <br />
            <br />
            COST
            <br />
            $35 a month goes a long way in many parts of the world, including India.
            Just $35 a month or $500 a year provides a child in need with food,
            shelter, clothing, healthcare, education and a chance for your sponsored
            child to succeed. While your contribution may be measured in dollars, your
            impact on a child’s life is priceless.
            <br />
            <br />
            <br />
            The profound and long-term life-changing difference your donation and
            support makes to a child and their family cannot be overstated. Individuals
            and companies can help children by supporting or partnering with Children
            Left Behind.
          </p><br/><br/>
           <h2
            style={{
              fontWeight: "600",
              fontSize: "32px",
              lineHeight: "40px",
              letterSpacing: "2%",
            }}
            className="sub-title"
          >
            Helping a Child
          </h2><br/>
           <h3 className="corporate-des">
            We are seeing how the promise and hope for a better future through
            education is becoming a reality as we work with at-risk children in the
            United States and developing world nations. We believe in the value of
            education to “open doors” for a new way of life for children and youth
            all around the globe.
            <br /></h3>

         

          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={img} alt="banner" style={{ width: "100%" }} />
          </div>
        </div>

        <CtaSection ctaclass={"wpo-cta-area-2"} />
        <Needs />
      </section>

      <Footer />
    </>
  );
}

export default GetInvolved;
