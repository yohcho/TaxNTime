import img1 from "../assets/img2.JPEG"

import "./home-section1.css"

function HomeSection1() {
    return (
        <div className="home-section1">
            <img src={img1} alt='background' />
            <div className="home-section1-textbox">
                <h1>
                    Our Mission
                </h1>
                <p className="home-section1-textbox-p1">
                    To empower construction businesses with precise, strategic tax solutions that strengthen financial performance, ensure compliance, and drive sustainable growth.
                </p>
            </div>
        </div>
    );
}

export default HomeSection1;
