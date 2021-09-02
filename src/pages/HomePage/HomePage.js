import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Slider/Slider";
import Menu from "../../components/Menu/Menu";
import Suggestion from "../../components/Suggestion/Suggestion";
import Category from "../../components/Category/Category";
import FlashSale from "../../components/FlashSale/FlashSale";
import SkinnyBanner from "../../components/SkinnyBanner/SkinnyBanner";
import ShoppeMall from "../../components/ShoppeMall/ShoppeMall";
import Trending from "../../components/Trending/Trending";
import TopSearch from "../../components/TopSearch/TopSearch";
import SuggestionToday from "../../components/SuggestionToday/SuggestionToday";

function HomePage() {
    return (
        <div>
            <Header/>
            <div className="body mt-120">
                <div className="container">
                <Slider/>
                <Menu/>
                <Suggestion/>
                <Category/>
                <FlashSale/> 
                <SkinnyBanner/>   
                <ShoppeMall/>
                <Trending/>
                <TopSearch/>
                <SuggestionToday/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}   

export default HomePage;