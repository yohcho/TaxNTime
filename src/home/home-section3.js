import headshot from "../assets/headshot.jpeg"

import "./home-section3.css"

function HomeSection3() {
    return (
        <div className="home-section3">
            <h1>Meet The CEO</h1>
            <div className="home-section3-card">
                <img src={headshot} alt='headshot' />
                <div className="home-section3-card-desc">
                    <p>
                        Hasani began his career overseeing financial operations on billion-dollar high-rise projects in New York City,
                        managing invoicing, requisitions, MEP/HVAC packages, and closeout cycles. His hands-on experience provides a
                        deep understanding of construction cash flow and unique insight into where contractors lose profit and overpay
                        taxes.
                    </p>
                    <p>
                        He holds a Bachelor’s in Construction Management & Engineering from CUNY New York City College of Technology,
                        is an Annual Filing Season Program participant working toward his Enrolled Agent licensure, and is proficient
                        in construction job cost tracking and invoice management—combining industry expertise with tax and financial
                        strategy to optimize results for construction businesses.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default HomeSection3;
