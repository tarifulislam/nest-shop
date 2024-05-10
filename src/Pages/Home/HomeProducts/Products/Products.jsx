import './products.css'
import Rating from '@mui/material/Rating';
import image1 from "../../../../assets/img/product-1-1.jpg"
import { Button } from '@mui/material';
import { Link,  } from 'react-router-dom';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout'; 
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
// import Tooltip from '@mui/material/Tooltip';
{/* <Tooltip title="Add" placement="top">    </Tooltip> */}
const Products = () => {
    return (
        <div className="product-thumb">
            <span className='product-badge'>Hot</span>
   
                <div className='image-wraper'>
                    <img className='w-100' src={image1} alt="" />
                    <div className="pro-overlay">
                        <ul className='list list-inline mb-0'>

                            <li className='list-inline-item'>
                                <a className=' cursor' tooltip="Favourite"> <FavoriteBorderIcon/></a>
                            </li>
            
                            <li className='list-inline-item'>
                                 <a  className=' cursor' tooltip="Compaire"> <CompareArrowsIcon/></a>
                            </li>
                            <li className='list-inline-item'>
                                 <a className=' cursor ' tooltip="Quick View"> <RemoveRedEyeIcon/></a>
                            </li>
                        </ul>
                    </div>
                </div>
            
            <div className='info'>
                <span className=' d-block cate-name'>Snack</span>
                <h4 className='title'> <Link>Seeds of Change Organic Quinoa, Brown, & Red Rice</Link></h4>
                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                <span className=' d-block '>By <Link> <span className='brand-name'> NestFood </span> </Link> </span>
                <div className=' d-flex align-items-center  justify-content-between'>
                    <div className='d-flex align-items-center'>
                        <span className='product-new-price'>$28.25</span>
                        <span className='product-old-price'>$38.25</span>
                    </div>
                    <Button className=''> <ShoppingCartCheckoutIcon/> add</Button>
                </div>
            </div>
        </div>
    );
};

export default Products;

