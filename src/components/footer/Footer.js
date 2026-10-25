import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer" id="about">
            <div className="footer-inner">
                <a className="footer-brand" href="/" aria-label="Bite — home">bite<span>.</span></a>
                <p>Good food brings us together. Find something delicious today.</p>
                <small>© 2026 Bite. Made for the love of good food.</small>
            </div>
        </footer>
    );
};

export default Footer;