import ig_logo from "../../assets/instagram_logo.png"
import li_logo from "../../assets/linkedin_logo.png"
import phone_logo from "../../assets/phone_logo.png"
import email_logo from "../../assets/email_logo.png"

import "./footer.css"

function Footer() {
    return (
        <div className="wrapper">
            <div className="footer-desktop">
                <div className="footer-desktop-section">
                    <div className="footer-desktop-section-indiv">
                        <h1>Tax N'Time</h1>
                        <p>The Only Tax Solution You’ll Ever Need — Stress-Free, Reliable, and Complete</p>
                    </div>
                    <div className="footer-desktop-section-indiv">
                        <h1>Get in touch</h1>
                        <div><img src={email_logo} alt="phone logo"/> hasanilongwork@gmail.com</div>
                        <div><img src={phone_logo} alt="phone logo"/> 347-383-7215</div>
                    </div>
                    <div className="footer-desktop-section-indiv">
                        <h1>Connect</h1>
                        <a href="https://www.linkedin.com/in/hasani-long-750151202/">LinkedIn</a>
                        <a href="https://www.instagram.com/taxntime0/?igsh=OTY3eXpyODZ1dzZx">Instagram</a>
                    </div>
                    {/* <div className="footer-desktop-section-indiv">
                        <h1>Office</h1>
                        <p>1234 Something Dr.</p>
                        <p>New York, NY, 10003</p>
                    </div> */}
                </div>
                <div className="footer-desktop-divider">Easter Egg :) Tax N'Time is Awesome</div>
                <p>Copyright @ 2025 Tax N'Time</p>
            </div>
            <div className="footer-mobile">
                <div className="footer-mobile-section">
                    <div className="footer-mobile-section-header">
                        <h1>Tax N'Time</h1>
                        <p>The Only Tax Solution You’ll Ever Need — Stress-Free, Reliable, and Complete</p>
                    </div>
                    <div className="footer-mobile-section-content">
                        <div className="footer-mobile-section-content-indiv">
                            <h1>Get in touch</h1>
                            <div><img src={email_logo} alt="phone logo"/> hasanilongwork@gmail.com</div>
                            <div><img src={phone_logo} alt="phone logo"/> 347-383-7215</div>
                        </div>
                        {/* <div className="footer-mobile-section-indiv">
                            <h1>Office</h1>
                            <p>1234 Something Dr.</p>
                            <p>New York, NY, 10003</p>
                        </div> */}
                    </div>
                    <div className="footer-mobile-section-socials">
                        <img 
                            onClick={() => window.open("https://www.instagram.com/taxntime0/?igsh=OTY3eXpyODZ1dzZx", "_blank", "noopener,noreferrer")}
                            src={ig_logo} alt="ig_logo"/>
                        <img 
                            onClick={() => window.open("https://www.linkedin.com/in/hasani-long-750151202/", "_blank", "noopener,noreferrer")}
                            src={li_logo} alt="li_logo"/>
                    </div>
                    <div className="footer-mobile-divider">Easter Egg :) Tax N'Time is Awesome</div>
                    <p>Copyright @ 2025 Tax N'Time</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
