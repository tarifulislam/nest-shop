import './homeBanner.css'
import banner1 from "../../../assets/img/banner-1.png"
import banner2 from "../../../assets/img/banner-2.png"
import banner3 from "../../../assets/img/banner-3.png"

const HomeBanner = () => {
    return (
        <div className="bannerSection">
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <div className='cart-box'>
                            <img src={banner1} alt="" className='w-100'/>
                            <div className='cart-box-data'>
                                <h3>Every Fresh & <br /> Clean With Our <br /> Product</h3>
                                <button className=' btn btn-primary'>Shop Now</button>
                            </div>
                        </div>

                    </div>
                    <div className='col-sm-4'>
                        <div className='cart-box'>
                            <img src={banner2} alt="" className='w-100'/>
                            <div className='cart-box-data'>
                                <h3>Make your Breakfast <br />Healthy and Easy</h3>
                                <button className=' btn btn-primary'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='cart-box'>
                            <img src={banner3} alt="" className='w-100'/>
                            <div className='cart-box-data'>
                                <h3>The Best Organic <br /> Product Online</h3>
                                <button className=' btn btn-primary'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomeBanner;


// <div className=" container-fluid">
// <div className="row">
//     <div className="col-sm-12">
//         <div className="box-a"></div>
//             <h2>hello</h2>
//     </div>

// </div>
// </div>