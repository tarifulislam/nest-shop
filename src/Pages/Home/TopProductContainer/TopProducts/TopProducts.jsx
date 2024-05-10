import "./topProducts.css"
import thumb1 from "../../../../assets/img/thumbnail-1.jpg"
import thumb2 from "../../../../assets/img/thumbnail-2.jpg"
import thumb3 from "../../../../assets/img/thumbnail-3.jpg"
import thumb4 from "../../../../assets/img/thumbnail-4.jpg"
import thumb5 from "../../../../assets/img/thumbnail-5.jpg"
import { Link } from "react-router-dom"
import { Rating } from "@mui/material"

const TopProducts = ({title}) => {
    return (
        <div className="topSelling-box">
            <h3>{title}</h3>

            <div className="tItems  d-flex align-items-center">
                <div className="topImg">
                    <img src={thumb1} alt=""  className="w-100"/>
                </div>
                <div className="topInfo px-3">
                    <Link to="/"><h4>Nestle Original Coffee-Mate Coffee Creamer</h4></Link>
                    <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                    <div className=" d-flex align-items-center">
                        <span className="topNewPrice ">$28.22</span>
                        <span className="topOldPrice">$48.22</span>
                    </div>
                </div>
            </div>

            <div className="tItems  d-flex align-items-center">
                <div className="topImg">
                    <img src={thumb2} alt=""  className="w-100"/>
                </div>
                <div className="topInfo px-3">
                    <Link to="/"><h4>Nestle Original Coffee-Mate Coffee Creamer</h4></Link>
                    <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                    <div className=" d-flex align-items-center">
                        <span className="topNewPrice ">$28.22</span>
                        <span className="topOldPrice">$48.22</span>
                    </div>
                </div>
            </div>

            <div className="tItems  d-flex align-items-center">
                <div className="topImg">
                    <img src={thumb3} alt=""  className="w-100"/>
                </div>
                <div className="topInfo px-3">
                    <Link to="/"><h4>Nestle Original Coffee-Mate Coffee Creamer</h4></Link>
                    <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                    <div className=" d-flex align-items-center">
                        <span className="topNewPrice ">$28.22</span>
                        <span className="topOldPrice">$48.22</span>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default TopProducts;