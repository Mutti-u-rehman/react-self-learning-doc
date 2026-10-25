const Header = () => {
    return (
        <header className="header">
            <a className="logo-container" href="/" aria-label="Bite — home">
                <span className="logo" aria-hidden="true">B</span>
                <span className="brand-name">bite<span>.</span></span>
            </a>

            <nav className="nav-items" aria-label="Main navigation">
                <a href="#restaurants">Explore</a>
                <a href="#about">About</a>
                <a className="cart-link" href="#cart">Cart <span>0</span></a>
            </nav>
        </header>
    );
}

export default Header;