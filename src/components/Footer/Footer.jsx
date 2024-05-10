import "./footer.css"
import icon1 from "../../assets/img/icon-1.svg"
import icon2 from "../../assets/img/icon-2.svg"
import icon3 from "../../assets/img/icon-3.svg"
import icon4 from "../../assets/img/icon-4.svg"
import logo from "../../assets/img/logo.svg"
import { Link } from 'react-router-dom';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import ManageHistoryOutlinedIcon from '@mui/icons-material/ManageHistoryOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';

import InstagramIcon from '@mui/icons-material/Instagram';

import PinterestIcon from '@mui/icons-material/Pinterest';

import YouTubeIcon from '@mui/icons-material/YouTube';

import google from "../../assets/img/google-play.jpg"
import apple from "../../assets/img/app-store.jpg"
import payment from "../../assets/img/payment-method.png"

const Footer = () => {
    return (
        <div className="footerWrapper">
            <div className="footerBoxes">
                <div className=" container-fluid">
                    <div className="row">
                        
                        <div className="col">
                            <div className="box d-flex align-items-center w-100">
                                <span> <img src={icon1} alt="" /> </span>
                                <div className="info">
                                    <h4>Best prices & offers</h4>
                                    <p>Orders $50 or more</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="box d-flex align-items-center w-100">
                                <span> <img src={icon2} alt="" /> </span>
                                <div className="info">
                                    <h4>Free delivery</h4>
                                    <p>Orders $50 or more</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="box d-flex align-items-center w-100">
                                <span> <img src={icon3} alt="" /> </span>
                                <div className="info">
                                    <h4>Wide assortment</h4>
                                    <p>Orders $50 or more</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="box d-flex align-items-center w-100">
                                <span> <img src={icon4} alt="" /> </span>
                                <div className="info">
                                    <h4>Easy returns</h4>
                                    <p>Orders $50 or more</p>
                                </div>
                            </div>
                        </div>
           
                    </div>
                </div>
            </div>

            <footer>
                <div className="container-fluid">
                    <div className=" row">
                        <div className="col-md-3 part1">
                            <Link><img src={logo} alt="" /></Link>
                            <br />
                            <br />
                            <p> Awesome grocery store website template</p>
                            <p> <LocationOnOutlinedIcon/> <strong> Address:</strong> 5171 W Campbell Ave</p>
                            <p> <HeadsetMicOutlinedIcon/> <strong>Call Us:</strong>(+91) - 540-025-124553</p>
                            <p> <ManageHistoryOutlinedIcon/> <strong>Email:</strong>sale@Nest.com</p>
                            <p> <SendOutlinedIcon/> <strong> Hours:</strong>10:00 - 18:00, Mon - Sat</p>
                        </div>

                        <div className="col-md-6 part2">
                           <div className="row">
                                <div className="col">
                                   <h3>Company</h3>
                                    <ul>
                                        <li><Link to="/">About Us</Link></li>
                                        <li><Link to="/">Delivery Information</Link></li>
                                        <li><Link to="/">Privacy Policy</Link></li>
                                        <li><Link to="/">Terms & Condition</Link></li>
                                        <li><Link to="/">Contract Us</Link></li>
                                        <li><Link to="/">Support Center</Link></li>
                                        <li><Link to="/">Careers</Link></li>
                                    </ul>
                                </div>
                                <div className="col">
                                   <h3>Account</h3>
                                    <ul>
                                        <li><Link to="/">Sign In</Link></li>
                                        <li><Link to="/">Delivery Information</Link></li>
                                        <li><Link to="/">Privacy Policy</Link></li>
                                        <li><Link to="/">Terms & Condition</Link></li>
                                        <li><Link to="/">Contract Us</Link></li>
                                        <li><Link to="/">Support Center</Link></li>
                                        <li><Link to="/">Careers</Link></li>
                                    </ul>
                                </div>
                                <div className="col">
                                   <h3>Corporate</h3>
                                    <ul>
                                        <li><Link to="/">Become a Vendor</Link></li>
                                        <li><Link to="/">Delivery Information</Link></li>
                                        <li><Link to="/">Privacy Policy</Link></li>
                                        <li><Link to="/">Terms & Condition</Link></li>
                                        <li><Link to="/">Contract Us</Link></li>
                                        <li><Link to="/">Support Center</Link></li>
                                        <li><Link to="/">Careers</Link></li>
                                    </ul>
                                </div>
                                <div className="col">
                                   <h3>Popular</h3>
                                    <ul>
                                        <li><Link to="/">Milk & Flavoured Milk</Link></li>
                                        <li><Link to="/">Delivery Information</Link></li>
                                        <li><Link to="/">Privacy Policy</Link></li>
                                        <li><Link to="/">Terms & Condition</Link></li>
                                        <li><Link to="/">Contract Us</Link></li>
                                        <li><Link to="/">Support Center</Link></li>
                                        <li><Link to="/">Careers</Link></li>
                                    </ul>
                                </div>

                           </div>
                        </div>

                        <div className="col-md-3 part3"> 
                            <h3>Install App</h3>
                            <p>From App Store or Google Play</p>
                            <div className=" d-flex">
                                <Link to="/"> <img src={google} alt="" width={150}/></Link>
                                <Link to="/"> <img src={apple} alt="" width={150} className="mx-2" /></Link>
                            </div>
                            <br />
                            <p>Secured Payment Gateways</p>
                            <br />
                            <img src={payment} alt="" />
                        </div>
                    </div>
                    <hr />

                    <div className="row lastFoot">
                        <div className="col-md-3">
                            <p>© 2022, Nest - HTML Ecommerce Template All rights reserved</p>
                        </div>
                        <div className="col-md-6">
                            <div className=" d-flex justify-content-center  align-items-center gap-5 ">
                                <div className="phonNo d-flex align-items-center ml-auto">
                                    <span><PhoneInTalkOutlinedIcon/></span>
                                    <div className="foot-info ml-3">
                                        <h3 className=" mb-0">1900 - 888</h3>
                                        <p className=" mb-0">24/7 Support Center</p>
                                    </div>
                                </div>
                                <div className="phonNo d-flex align-items-center  ml-auto">
                                    <span><PhoneInTalkOutlinedIcon/></span>
                                    <div className="foot-info ml-3">
                                        <h3 className=" mb-0">1900 - 888</h3>
                                        <p className=" mb-0">24/7 Support Center</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 footSocial d-flex justify-content-end">
                            <div className=" d-flex align-items-center">
                                <h5>Follow Us</h5>
                                <ul className="list list-inline">
                                    <li className=" list-inline-item">
                                        <Link to=""><FacebookOutlinedIcon/></Link>
                                    </li>
                                    <li className=" list-inline-item">
                                        <Link to=""><TwitterIcon/></Link>
                                    </li>
                                    <li className=" list-inline-item">
                                        <Link to=""><InstagramIcon/></Link>
                                    </li>
                                    <li className=" list-inline-item">
                                        <Link to=""><PinterestIcon/></Link>
                                    </li>
                                    <li className=" list-inline-item">
                                        <Link to=""><YouTubeIcon/></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;