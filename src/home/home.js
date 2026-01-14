import HomeSection1 from "./home-section1"
import HomeSection2 from "./home-section2"
import HomeSection3 from "./home-section3"
import HomeSection4 from "./home-section4"
import HomeSection5 from "./home-section5"

import "./home.css"
import "./home-section2.css"
import "./home-section3.css"
import "./home-section4.css"

function Home({getStartedToggle}) {
    return (
        <div className="home">
            <HomeSection1 />
            <div className="home-section-divider"></div>
            
            <HomeSection2 />
            <div className="home-section-divider"></div>

            <HomeSection3 />
            <div className="home-section-divider"></div>

            <HomeSection4 getStartedToggle={getStartedToggle}/>
            <div className="home-section-divider"></div>

            <HomeSection5 getStartedToggle={getStartedToggle}/>
        </div>
    );
}

export default Home;
