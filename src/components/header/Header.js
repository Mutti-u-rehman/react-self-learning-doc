import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="header-inner">
                <a className="logo-container" href="/" aria-label="Bite home">
                    <span className="brand-name">bite<span>.</span></span>
                </a>

                <nav className="nav-items" aria-label="Main navigation">
                    <Link className="nav-link" to="/restaurants">Discover</Link>
                    <Link className="nav-link" to="/about">Our story</Link>
                    <Link className="nav-link" to="/for-restaurants">For restaurants</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>
                    <Link className="nav-link" to="/about">About</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;