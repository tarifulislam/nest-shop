import './HomeProducts.css'
import Products from './Products/Products';
const HomeProducts = () => {
    return (
        <div className='homeAllProducts'>
            <div className=' container-fluid'>
                <div className=' d-flex justify-content-between align-items-center'>
                    <h2 className='mb-0 mt-0'>Popular Products</h2>
                    <ul className='list list-inline filter-tab mb-0'>
                        <li className='list-inline-item'> 
                            <a href="#">All</a>
                        </li>
                        <li className='list-inline-item'> 
                            <a href="#">Milks & Dairies</a>
                        </li>
                        <li className='list-inline-item'> 
                            <a href="#">Pet Foods</a>
                        </li>
                        <li className='list-inline-item'> 
                            <a href="#">Meats</a>
                        </li>
                        <li className='list-inline-item'> 
                            <a href="#">Vagetables</a>
                        </li>
                        <li className='list-inline-item'> 
                            <a href="#">Fruits</a>
                        </li>
                    </ul>
                </div>

                <div className='row  products-row'>
                    <div className="item">
                        <Products></Products>
                    </div>
                    <div className="item">
                        <Products></Products>
                    </div>
                    <div className="item">
                        <Products></Products>
                    </div>
                    <div className="item">
                        <Products></Products>
                    </div>
                    <div className="item">
                        <Products></Products>
                    </div>
                    <div className="item">
                        <Products></Products>
                    </div>
                    <div className="item">
                        <Products></Products>
                    </div>
                    <div className="item">
                        <Products></Products>
                    </div>
                    <div className="item">
                        <Products></Products>
                    </div>
                    <div className="item">
                        <Products></Products>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default HomeProducts;