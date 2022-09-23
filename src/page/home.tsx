import Footer from "../components/footer/footer";
import Slider from "../components/slider/slider";
import Achievements from "../components/achievements/achieve";
import Insights from "../components/Insights/Insights";
import Navbar from "../components/navbar/navbar";
function Home(){
    return(
            <div>
                <Navbar/>
                <Slider/>
                <Achievements/>
                <Insights/>
                <Footer/>
            </div>
    );
}
export default Home;