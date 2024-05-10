import "./newsLetter.css"
import banner9 from "../../../assets/img/banner-9.png"
import MailBox from "../../../components/MailBox/MailBox";

const NewsLetter = () => {
    return (
        <div className="newsLetterSection">
            <div className=" container-fluid">
                <div className="news-box d-flex">
                    <div className="news-info ">
                        <h3>Stay home & get your daily <br /> needs from our shop</h3>
                        <h4>Start You'r Daily Shopping with <span>Nest Mart</span></h4>
                        <br />
                        <br />
                        <MailBox></MailBox>
                    </div>
                    <div className="news-img">
                        <img src={banner9} alt=""  className="w-100"/>
                    </div>
      
                </div>

            </div>
            
        </div>
    );
};

export default NewsLetter;