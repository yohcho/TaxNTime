import construction_logo from "../assets/construction_logo.png"
import tax_logo from "../assets/tax_logo.png"
import scalable_logo from "../assets/scalable_icon.png"
import profit_logo from "../assets/profit_logo.png"

import "./home-section4.css"

function HomeSection4() {
    return (
        <div className="home-section4">
            <h1>Why Tax'N Time?</h1>
            <div className="home-section4-content">
                <div className="home-section4-content-indiv">
                    <div className="home-section4-content-indiv-header">
                        <img src={construction_logo} alt="tax_logo" />
                        <h1>Construction-First Industry Expertise</h1>
                    </div>
                    <p>We come from the jobsite, not just the desk. With a degree in Construction Management & Engineering and experience inside billion-dollar builds, we understand invoicing, retainage, allowances, job costs, and closeouts the way contractors actually live them.</p>
                </div>
                <div className="home-section4-content-indiv">
                    <div className="home-section4-content-indiv-header">
                        <img src={tax_logo} alt="tax_logo" />
                        <h1>Efficient Job Costing & Tax Strategy</h1>
                    </div>
                    <p>We focus on efficient Job Cost tracking, Invoice management, &amp; Change Order Tracking. This enables us to combine job site reality with clean data to produce optimal tax strategies while keeping you fully compliant while legally minimizing taxes, improving cash flow, and protecting profit.</p>
                </div>
                <div className="home-section4-content-indiv">
                    <div className="home-section4-content-indiv-header">
                        <img src={scalable_logo} alt="tax_logo" />
                        <h1>Scalable Support Without Overselling</h1>
                    </div>
                    <p>From basic compliance to Premium Oversight, our tiered services meet you where your business is today. As you grow, we provide the controls, reporting, and planning you need — without pushing services you don’t.</p>
                </div>
                <div className="home-section4-content-indiv">
                    <div className="home-section4-content-indiv-header">
                        <img src={profit_logo} alt="profit_logo" />
                        <h1>Profit & Cash Flow Focused Strategy</h1>
                    </div>
                    <p>We don’t just file returns — we protect your margins. By combining job cost visibility, and proactive tax planning, we help contractors stop profit leaks, improve cash flow, and keep more of what they earn throughout the year — not just at tax time.</p>
                </div>
            </div>
        </div>
    );
}

export default HomeSection4;
