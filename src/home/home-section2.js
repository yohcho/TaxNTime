import checkmark from "../assets/checkmark.png"

import "./home-section2.css"

function HomeSection2() {
    return (
        <div className="home-section2">
            <h1>Our Services</h1>
            <div className="home-section2-slides">
                <div className="home-section2-slides-indiv">
                    <div className="home-section2-slides-indiv-header">
                        <h1>Standard: Basic Compliance</h1>
                        <p>For contractors who just need the essentials handled reliably.</p>
                    </div>
                    <ul className="home-section2-slides-indiv-content">
                        <li><p>Invoice Management & Tracking</p><img src={checkmark} alt="checkmark" /></li>
                        <li><p>Year-end business tax return filing</p><img src={checkmark} alt="checkmark" /></li>
                        <li><p>Estimated tax calculation support</p><img src={checkmark} alt="checkmark" /></li>
                        <li><p>Basic contractor write-off guidance</p><img src={checkmark} alt="checkmark" /></li>
                    </ul>
                </div>
                <div className="home-section2-slides-indiv">
                    <div className="home-section2-slides-indiv-header">
                        <h1>Premium: Growth Advisory</h1>
                        <p>For contractors who are growing and need real financial direction.</p>
                    </div>
                    <ul className="home-section2-slides-indiv-content">
                        <li><p>Everything from the Basic Compliance Package</p><img src={checkmark} alt="checkmark" /></li>
                        <li><p>Change Order Tracking Per Job</p><img src={checkmark} alt="checkmark" /></li>
                        <li><p>Job cost tracking & key project indicators</p><img src={checkmark} alt="checkmark" /></li>
                        <li><p>Quarterly tax planning meetings</p><img src={checkmark} alt="checkmark" /></li>
                        <li><p>Cash flow guidance</p><img src={checkmark} alt="checkmark" /></li>
                        <li><p>Invoice structure review (retainage, allowance breakdowns)</p><img src={checkmark} alt="checkmark" /></li>
                        <li><p>Cost Code Organization</p><img src={checkmark} alt="checkmark" /></li>
                    </ul>
                </div>
                <div className="home-section2-slides-indiv">
                    <div className="home-section2-slides-indiv-header">
                        <h1>Professional: Premium Oversight</h1>
                        <p>For established builders who need tax-first financial management.</p>
                    </div>
                    <ul className="home-section2-slides-indiv-content">
                        <li><p>Everything from the Basic Compliance and Growth Advisory Packages</p><img src={checkmark} alt="checkmark" /></li>
                        <li><p>Monthly tax strategy sessions</p><img src={checkmark} alt="checkmark" /></li>
                        <li><p>Contract review for tax implications</p><img src={checkmark} alt="checkmark" /></li>
                        <li><p>Audit prep & compliance support</p><img src={checkmark} alt="checkmark" /></li>
                        <li><p>Entity structuring + trust consultation</p><img src={checkmark} alt="checkmark" /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HomeSection2;
