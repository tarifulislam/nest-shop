
import CatSlider from './CatSlider/CatSlider';
import DailyProduct from './DailyProduct/DailyProduct';
import HomeBanner from './HomeBanner/HomeBanner';
import HomeProducts from './HomeProducts/HomeProducts';
import NewsLetter from './NewsLetter/NewsLetter';
import HomeSlider from './Slider/HomeSlider';
import TopProductContainer from './TopProductContainer/TopProductContainer';
import './home.css'

const Home = () => {
    return (
        <div className=' conteiner-fluid '>
            <HomeSlider></HomeSlider>
            <CatSlider></CatSlider>
            <HomeBanner></HomeBanner>
            <HomeProducts></HomeProducts>
            <DailyProduct></DailyProduct>
            <TopProductContainer></TopProductContainer>
            <NewsLetter></NewsLetter>

         
        </div>

        
    );
};

export default Home;