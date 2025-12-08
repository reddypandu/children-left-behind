import React from 'react'
import "./style.css"
import imgHero from "../../images/about/About.png"

const AboutHero = () => {
    return (
        <section className="about-hero-section">
            <div className="about-hero-container">
                
                <div className="about-text">
                    <h2>Together, let’s build a better future</h2>
                    <p>
                        Driven by our core values and visionary leadership, we are dedicated 
                        to creating a brighter future for children. As a committed non-profit 
                        organization, we strive to turn our ambitious vision into reality.
                    </p>
                </div>

                <div className="about-hero-img">
                    <img src={imgHero} alt="about-hero" />
                </div>

            </div>
        </section>
    )
}

export default AboutHero
