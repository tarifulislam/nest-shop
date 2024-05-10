import banner4 from "../../../assets/img/banner-4.png"
import cat1 from "../../../assets/img/cat-1.png"
import Products from "../HomeProducts/Products/Products";
import "./dailyProduct.css"
import Slider from "react-slick";
const DailyProduct = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4 ,
        slidesToScroll: 1,
        fade : false,
        arrows: true,
      };

    return (
        <div className="dailySellProduct">
            <div className=" container-fluid">
                <div className=' d-flex justify-content-between align-items-center'>
                        <h2 className='mb-0 mt-0'>Daily Best Sells</h2>
                        <ul className='list list-inline filter-tab mt-0'>
                            <li className='list-inline-item'> 
                                <a href="#">Featured</a>
                            </li>
                            <li className='list-inline-item'> 
                                <a href="#">Popular</a>
                            </li>
                            <li className='list-inline-item'> 
                                <a href="#">New added</a>
                            </li>
                        </ul>
                    </div>
                    <div className="row my-3">

                            <div className="col-md-3 dailyBanner">
                                <img src={banner4} alt="" className="w-100 dailyBannerImg" />
                                <div className="dailyBanner-info">
                                    <h2>Bring nature <br /> into your <br /> home </h2>
                                    <button>Shop Now</button>
                                </div>
                            </div>
                            <div className="col-md-9">
                            <Slider {...settings} className="daily-slider-main">
                                <Products></Products>
                                <Products></Products>
                                <Products></Products>
                                <Products></Products>
                                <Products></Products>
                                <Products></Products>
                                <Products></Products>
                            </Slider>
                            </div>
   
                   

                        </div>
                    </div>

            </div>
        
    );
};

export default DailyProduct;