import "./Header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="header-inner">
                <a className="logo-container" href="/" aria-label="Bite home">
                    <span className="brand-name">bite<span>.</span></span>
                </a>

                <nav className="nav-items" aria-label="Main navigation">
                    <a className="nav-link" href="#restaurants">Discover</a>
                    <a className="nav-link nav-link--about" href="/about">Our story</a>
                    <a className="nav-link nav-link--partners" href="#restaurants">For restaurants</a>
                    <a className="nav-link" href="/contact">Contact</a>
                    <a className="nav-link" href="/about">About</a>
                    <a className="header-action" href="#restaurants">Start exploring</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;