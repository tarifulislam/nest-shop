import './CatSlider.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import cat1 from "../../../assets/img/cat-1.png"
import cat2 from "../../../assets/img/cat-2.png"
import cat3 from "../../../assets/img/cat-3.png"
import cat4 from "../../../assets/img/cat-4.png"
import cat5 from "../../../assets/img/cat-5.png"

import cat11 from "../../../assets/img/cat-11.png"
import cat12 from "../../../assets/img/cat-12.png"
import cat13 from "../../../assets/img/cat-13.png"
import cat14 from "../../../assets/img/cat-14.png"
import cat15 from "../../../assets/img/cat-15.png"
import cat9 from "../../../assets/img/cat-9.png"

// import { useState } from 'react';
// const [itemBg, setItemBg] = useState([
//     '#fffceb',
//     '#ecffec',
//     '#feefea',
//     '#fff3ff',
//     '#f2fce4',
//     '#feefea',
//     '#fffceb',
//     '#feefea',
//     '#fff3eb',
//     '#fff3ff',
//     '#f2fce4',
//     '#feefea',
//     '#fffceb',
//     '#feefea',
//     '#ecffec',
// ])

const CatSlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        fade : false,
        arrows: true,
      };

    return (
        <>
            <div className='catSliderSection'>
                <div className=' container-fluid'>
                    <h2>Featured Categories</h2>
                    <Slider {...settings} className="cat-slider-main">
                        <div className='item'>
                            <div className='info'>
                                <img src={cat1} alt="" />
                                <h5>Cake & Milk</h5>
                                <p>26 Items</p>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='info'>
                                <img src={cat2} alt="" />
                                <h5>Cake & Milk</h5>
                                <p>26 Items</p>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='info'>
                                <img src={cat3} alt="" />
                                <h5>Cake & Milk</h5>
                                <p>26 Items</p>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='info'>
                                <img src={cat4} alt="" />
                                <h5>Cake & Milk</h5>
                                <p>26 Items</p>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='info'>
                                <img src={cat5} alt="" />
                                <h5>Cake & Milk</h5>
                                <p>26 Items</p>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='info'>
                                <img src={cat9} alt="" />
                                <h5>Cake & Milk</h5>
                                <p>26 Items</p>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='info'>
                                <img src={cat11} alt="" />
                                <h5>Cake & Milk</h5>
                                <p>26 Items</p>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='info'>
                                <img src={cat12} alt="" />
                                <h5>Cake & Milk</h5>
                                <p>26 Items</p>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='info'>
                                <img src={cat13} alt="" />
                                <h5>Cake & Milk</h5>
                                <p>26 Items</p>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='info'>
                                <img src={cat14} alt="" />
                                <h5>Cake & Milk</h5>
                                <p>26 Items</p>
                            </div>
                        </div>
                       
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default CatSlider;