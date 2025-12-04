import React from "react";
import heroImg from "../images/icons/supporting-disability.png";
import Header from "../components/header";
// import "../css";
import "../App"
import img from "../images/icons/Frame 232.png"
import Footer from "../components/footer";
import BlogSection from "../components/BlogSection"
import CtaSection from "../components/cta";
import Needs from "../components/needs";
import img1 from "../images/icons/Frame 235.svg"
import { useNavigate } from "react-router-dom";
import user from "../images/icons/Vector.svg"
import love from "../images/icons/heart.svg"
function GetInvolved() {
    const navigate = useNavigate();
    return (
        <>
            {/* 🌟 HERO SECTION */}
            <div className="program-hero">

                {/* RIGHT IMAGE on Desktop — FIRST on Mobile */}
                <div className="program-image-box">
                    <img src={img1} alt="hero" className="program-image" />
                </div>

                {/* LEFT CONTENT on Desktop — BELOW on Mobile */}
                <div className="program-content">
                    <h1 style={{ color: '#1C191E' }} className="program-title">
                        Creating child friendly<br />  world, with you!
                    </h1>

                    <p className="program-desc">
                        The solution is now for a bright promising future for<br /> these children! Join us to learn about innovative ways<br /> supporting education and health care in communities<br /> in India.
                    </p>

                </div>

            </div><br /><br />

            <div className="container text-center what">
                <p className="whatwe">Ways you can be involved</p>


                <h2 className="mx-auto" style={{ maxWidth: "900px", color: '#1C191E', fontWeight: '600', fontSize: '36px', lineHeight: '44px', letterSpacing: '2%' }}>
                    Enabling Children by Creating Pathways to <br />Opportunity
                </h2>
                <p>
                    There are endless ways that you can raise funds to support children in <br /> desperate need. From essential care in India to international opportunities,<br /> learn how our unique programs are changing lives.
                </p> <br />
                {/* <button className="icon-btn">
                    <img src={user} alt="icon" className="img-icon" />
                    <span className="text">10,000+ Supporters</span>
                </button><br/>
                 <button className="icon-btn">
                    <img src={love} alt="icon" className="img-icon" />
                    <span className="text">5,000+ Children Helped</span>
                </button> */}
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
                        Ways you can join in the solution:<br />
                        – Donate to an educational outreach<br />
                        – Sponsor a student or volunteer’s mission trip to India<br />
                        – Join us as we share some of the realities in our nation and abroad; provide your email and we will notify you of our upcoming
                        information meetings<br />
                        – Improve the lives of children with disabilities around the world
                    </p><br></br>
                    <p className="description">
                        Children Left Behind can be supported by Individuals, corporations, Churches, community groups, friends and well wishers. We accept monetary and other donations that will enhance the children education programs and humanitarian missions. All gifts are tax deductible.<br/><br/>

                        On behalf of the children we serve, Thank you
                    </p>
                    <img style={{ width: '100%' }} src={img} />


                </div> <br></br>
                <BlogSection />
                <CtaSection ctaclass={'wpo-cta-area-2'} />
                <Needs />

            </section>
        </>
    );
}

export default GetInvolved;