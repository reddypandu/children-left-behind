import React from 'react'
import abimg from '../../images/about1.png'
import abimgg from '../../images/about4.png'
import abimggg from '../../images/about5.png'
import VideoModal from '../ModalVideo'
import ms6 from '../../images/icons/2.png'
import ms7 from '../../images/icons/1.png'
import './style.css'

const About = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    return(
        <div className="wpo-about-area icons section-padding">
            
                 <img src={ms6} alt="" className='icon-left'/>
                    <img src={ms7} alt="" className='icon-right'/>
                   
             
            <div className="container">
                
                <div className="row pb-4">
                    <div className="col-12">
                          <div className="wpo-section-title">
                              <span>OUR KEY INITIATIVES</span>
                              <h2>Enabling Children by Creating Pathways to Opportunity</h2>
                              <p>From essential care in India to international opportunities, learn how our unique programs are changing lives.</p>
                          </div>
                      </div>
                      <div className='row py-4'>

                     
                    <div className="col-lg-7 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-section-title">
                                {/* <span>What We Do?</span> */}
                                <h2>Sponsor a child for their welfare</h2>
                            </div>
                            <p>Sponsoring a child through Children Left Behind is the biggest contribution one can make and it requires very little. Won’t you help us make a difference in a child’s life?</p>
                            {/* <p>Thing embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, </p> */}
                            <div className="btns">
                                <a href="/donate" className="theme-btn" onClick={ClickHandler}>Learn More</a>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 colsm-12">
                        <div className="wpo-about-img-3">
                            <img src={abimg} className='img w-100' alt=""/>
                        </div>
                    </div>
                     </div>
                    </div>
                    <div className='row py-4'>
                    <div className="col-lg-5 col-md-12 colsm-12">
                        <div className="wpo-about-img-3">
                            <img src={abimggg} className='imgg w-100' alt=""/>
                        </div>
                    </div>
                      <div className="col-lg-7 col-md-12 colsm-12">
                        <div className="wpo-about-text text-right">
                            <div className="wpo-section-title ">
                                {/* <span>What We Do?</span> */}
                                <h2>Educating every child with disabilities</h2>
                            </div>
                            <p>We are actively involved in improving the lives and education of children with intellectual and physical disabilities in developing countries.</p>
                            {/* <p>Thing embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, </p> */}
                            <div className="btns">
                                <a href="/donate" className="theme-btn" onClick={ClickHandler}>Learn More</a>
                                
                            </div>
                        </div>
                    </div>
                </div>
                    <div className='row py-4'>
                    
                      <div className="col-lg-7 col-md-12 colsm-12">
                        <div className="wpo-about-text">
                            <div className="wpo-section-title">
                                {/* <span>What We Do?</span> */}
                                <h2>Educating every child with disabilities</h2>
                            </div>
                            <p>We are actively involved in improving the lives and education of children with intellectual and physical disabilities in developing countries.</p>
                            {/* <p>Thing embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, </p> */}
                            <div className="btns">
                                <a href="/donate" className="theme-btn" onClick={ClickHandler}>Learn More</a>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 colsm-12">
                        <div className="wpo-about-img-3">
                            <img src={abimgg} className='imggg w-100' alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;