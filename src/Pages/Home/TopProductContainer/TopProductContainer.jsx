import TopProducts from "./TopProducts/TopProducts";
import "./topProductContainer.css"
const TopProductContainer = () => {
    return (
        <div className="topProductSection">
            <div className=" container-fluid">
                <div className="row">
                    <div className="col">
                        <TopProducts title="Top Selling"></TopProducts>
                    </div>

                    <div className="col">
                        <TopProducts title="Trending Products"></TopProducts>
                    </div>

                    <div className="col">
                         <TopProducts title="Recently added"></TopProducts>
                    </div>
                    
                    <div className="col">
                         <TopProducts title="Top Rated"></TopProducts>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default TopProductContainer;