import Slider from "react-slick";
import "./style.css";

// Images
import Img1 from "../../images/about1.png";
import Img2 from "../../images/about4.png";
import Img3 from "../../images/about5.png";
import Img4 from "../../images/about6.png";

const TiltCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,        // LOOP ON
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,       // AUTO PLAY ON
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: false,
    cssEase: "ease-in-out",
  };

  return (
    <div className="tilt-wrapper">
      <Slider {...settings}>
        <div>
          <div className="tilt-card rotate-1">
            <img src={Img1} alt="" />
          </div>
        </div>

        <div>
          <div className="tilt-card rotate-2">
            <img src={Img2} alt="" />
          </div>
        </div>

        <div>
          <div className="tilt-card rotate-3">
            <img src={Img3} alt="" />
          </div>
        </div>

        <div>
          <div className="tilt-card rotate-4">
            <img src={Img4} alt="" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default TiltCarousel;
