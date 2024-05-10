import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./homeSlider.css"
import Button from '@mui/material/Button';
import slider1 from "../../../assets/img/slider-1.png"
import slider2 from "../../../assets/img/slider-2.png"
import SendIcon from '@mui/icons-material/Send';
import MailBox from "../../../components/MailBox/MailBox";
const HomeSlider = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade : true,
        arrows: true,
      };

    return (
       <section className="homSlider">
            <div className=" container-fluid position-relative">
                <Slider {...settings} className="home-slider-main">
                <div className="item">
                    <img src={slider1} className="w-100" alt="" />
                    <div className="info">
                        <h2 className=" display-2 mb-4">Don't miss amazing <br /> grocery deals</h2>
                        <p>Sign up for the daily newsletter</p>
                    </div>
                </div>
                <div className="item">
                    <img src={slider2} className="w-100" alt="" />
                    <div className="info">
                        <h2 className=" display-2 mb-4"> Fresh Vagetables  <br /> Big discount</h2>
                        <p>Sign up for the daily newsletter</p>
                    </div>
                </div>
           
                </Slider>
                <MailBox></MailBox>
            </div>
       </section>
    );
};

export default HomeSlider;


// npm install react-slick --save
// npm install slick-carousel