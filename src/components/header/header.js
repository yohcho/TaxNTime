import logo from "../../assets/logo.png"
import "./header.css"

function Header({getStartedToggle}) {
    return (
        <div className="header">
            <img className="header-logo" src={logo} alt="logo" />

            <div
                onClick={() => getStartedToggle.current.scrollIntoView({ behavior: "smooth", block: "center" })}
                className={`header-menu-item header-menu-itemactive`}
            >
                Get Started
            </div>
        </div>
    );
}

export default Header;
