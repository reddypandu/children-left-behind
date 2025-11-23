import React from 'react'
import ms1 from '../../images/mission/icon1.png'
import ms2 from '../../images/mission/icon2.png'
import ms3 from '../../images/mission/icon3.png'
import ms4 from '../../images/mission/icon4.png'
import './style.css'

const Mission = (props) => {
    return(
        <div className={`wpo-mission-area ${props.subclass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-section-title">
                            <span>Our partnering orgs</span>
                            <h2>Partners That Trusted Us to Amplify Impacts</h2>
                            <p>We have strategic partners, leaders from the private, public, and non-governmental organization (NGO) sectors, and subject matter experts in a variety of areas within children’s programs internationally.  </p>
                        </div>
                    </div>
                </div>
                <div className="wpo-mission-wrap">
                    <div className="row">
                         <div className='col-lg-6'>
     <div className="wpo-mission-content">
                                    <h2>Clean Water</h2>
                                    <p>Lorem ipsum dolor amet cosectetur adipiscing, sed do eiusmod.</p>
                                </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                                <div className="wpo-mission-icon-5">
                                    <img src={ms1} alt=""/>
                                </div>
                           
                            </div>
                        </div>
                       
                      
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12 custom-grid">
                            <div className="wpo-mission-item">
                               
                                <div className="wpo-mission-content">
                                    <p>The Child Guidance Center encompasses 14 boarding schools* for children with disabilities, providing lodging and meals as well as medical care and education appropriate to the ability of each student. A 15th boarding school is currently under construction.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission;