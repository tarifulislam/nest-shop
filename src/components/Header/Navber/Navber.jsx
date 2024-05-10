import './navber.css'
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HeadsetIcon from '@mui/icons-material/Headset';
import GridViewIcon from '@mui/icons-material/GridView';
import { Link } from 'react-router-dom';

const Navber = () => {
    
    return (
        <div className='naav d-flex align-items-center'>
            <div className='conteiner-fluid w-100'>
                <div className='row position-relative'>
                    <div className='col-sm-2 part1 d-flex align-items-center'>
                        <Button className='bg-success text-white catTab'><GridViewIcon/> &nbsp; Brows All Categories <KeyboardArrowDownIcon/></Button>
                    </div>
                    <div className=' col-sm-8 part2  position-static'>
                        <nav>
                            <ul className='list list-inline mb-0'>
                                <li className='list-inline-item'>
                                    <Button><Link to="/">Home</Link></Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link to="/">About</Link></Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link to="/">Shop</Link></Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link to="/">Ventors</Link></Button>
                                    <div className='dropSubMenu'>
                                        <ul className='p-0'>
                                            <li>
                                                 <Button><Link to="/about">About US</Link></Button>
                                            </li>
                                            <li>
                                                 <Button><Link to="/">Contract</Link></Button>
                                            </li>
                                            <li>
                                                 <Button><Link to="/">My Accound</Link></Button>
                                            </li>
                                            <li>
                                                 <Button><Link to="/">Login</Link></Button>
                                            </li>
                                            <li>
                                                 <Button><Link to="/">Register</Link></Button>
                                            </li>
                                            <li>
                                                 <Button><Link to="/">Forgot Password</Link></Button>
                                            </li>
                                            <li>
                                                 <Button><Link to="/">Reset Password</Link></Button>
                                            </li>
                                            <li>
                                                 <Button><Link to="/">Privacy Policy</Link></Button>
                                            </li>
                                            <li>
                                                 <Button><Link to="/">Terms of Service</Link></Button>
                                            </li>
                                            <li>
                                                 <Button><Link to="/">404 Pages</Link></Button>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li className='list-inline-item position-static'>
                                    <Button><Link to="/">Mega Menu <KeyboardArrowDownIcon/></Link></Button>
                                    <div className='dropSubMenu dropSubMenuMega w-100'>
                                        <div className='row'>
                                            <div className='col'>
                                                <h2 className='text-g'>Fruits & Vagetables</h2>
                                                   <ul className='p-0 mt-4 mb-0'>
                                                       <li><Link to="/">Milk & Flavoured Milk</Link></li>
                                                       <li><Link to="/">Butter and Margarine</Link></li>
                                                       <li><Link to="/">Eggs Substitutes</Link></li>
                                                       <li><Link to="/">Marmalades</Link></li>
                                                       <li><Link to="/">Sour Cream</Link></li>
                                                       <li><Link to="/">Cheese</Link></li>
                                                   </ul>
                                            </div>
                                            <div className='col'>
                                                <h2 className='text-g'>Breakfast & Dairy</h2>
                                                <ul className='p-0 mt-4 mb-0'>
                                                       <li><Link to="/">Breakfast Sausage</Link></li>
                                                       <li><Link to="/">Fresh Vegetables</Link></li>
                                                       <li><Link to="/">Chicken</Link></li>
                                                       <li><Link to="/">Cuts & Sprouts</Link></li>
                                                       <li><Link to="/">Exotic Fruits & Veggies</Link></li>
                                                       <li><Link to="/">Packaged Produce</Link></li>
                                                   </ul>
                                            </div>
                                            <div className='col'>
                                                <h2 className='text-g'>Meat & Seafood</h2>
                                                <ul className='p-0 mt-4 mb-0'>
                                                       <li><Link to="/">Meat & Poultry</Link></li>
                                                       <li><Link to="/">Dinner Sausage</Link></li>
                                                       <li><Link to="/">Herbs & Seasonings</Link></li>
                                                       <li><Link to="/">Sliced Deli Meat</Link></li>
                                                       <li><Link to="/">Wild Caught Fillets</Link></li>
                                                       <li><Link to="/">Crab and Shellfish</Link></li>
                                                   </ul>
                                            </div>
                                            <div className='col'>
                                                <img className=' w-100' src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-menu.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link to="/">Blogs</Link></Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link to="/">Pages <KeyboardArrowDownIcon/></Link></Button>
                                    <div className='dropSubMenu'>
                                        <ul className='p-0'>
                                            <li>
                                                 <Button><Link to="/about">About US</Link></Button>
                                            </li>
                                            <li>
                                                 <Button><Link to="/">Contract</Link></Button>
                                            </li>
                                            <li>
                                                 <Button><Link to="/">My Accound</Link></Button>
                                            </li>
                                            <li>
                                                 <Button><Link to="/">Login</Link></Button>
                                            </li>
                                            <li>
                                                 <Button><Link to="/">Register</Link></Button>
                                            </li>
                                            <li>
                                                 <Button><Link to="/">Forgot Password</Link></Button>
                                            </li>
                                            <li>
                                                 <Button><Link to="/">Reset Password</Link></Button>
                                            </li>
                                            <li>
                                                 <Button><Link to="/">Privacy Policy</Link></Button>
                                            </li>
                                            <li>
                                                 <Button><Link to="/">Terms of Service</Link></Button>
                                            </li>
                                            <li>
                                                 <Button><Link to="/">404 Pages</Link></Button>
                                            </li>
                                        </ul>
                                    </div>

                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link to="/">Contract</Link></Button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className=' col-sm-2 part3 d-flex align-items-center justify-content-end'>
                        <div className='phNo d-flex align-items-center '>
                            <span className=' mx-3'><HeadsetIcon/></span>
                            <div className='info '>
                                <h3 className='text-g mb-0'>1900 - 888</h3>
                                <p className='mb-0'>24/7 Support Center</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;