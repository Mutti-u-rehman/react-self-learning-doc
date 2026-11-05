import "./AboutUs.scss";

const values = [
    {
        number: "01",
        title: "Good food first",
        description: "We celebrate memorable dishes, thoughtful kitchens, and the people who make every meal special.",
    },
    {
        number: "02",
        title: "Local by nature",
        description: "We help people discover independent restaurants and neighborhood favorites in their city.",
    },
    {
        number: "03",
        title: "Made for sharing",
        description: "Great food creates connections, and we are building a friendlier way to find and share them.",
    },
];

const AboutUs = () => {
    return (
        <main className="about-us">
            <section className="about-us__hero">
                <div className="about-us__hero-copy">
                    <p className="about-us__eyebrow">OUR STORY</p>
                    <h1>We make finding your next favorite bite feel effortless.</h1>
                    <p>
                        Bite began with one simple idea: discovering a great local restaurant
                        should be as enjoyable as eating there.
                    </p>
                </div>
                <div className="about-us__hero-art" aria-hidden="true">
                    <span className="about-us__dish about-us__dish--large">🍜</span>
                    <span className="about-us__dish about-us__dish--small">🥗</span>
                    <span className="about-us__spark">✦</span>
                </div>
            </section>

            <section className="about-us__story">
                <div>
                    <p className="about-us__eyebrow">WHY BITE</p>
                    <h2>Built around curiosity, community, and really good food.</h2>
                </div>
                <div className="about-us__story-copy">
                    <p>
                        We bring together the places that deserve to be known, from hidden gems
                        to beloved neighborhood classics. Every recommendation is made to help
                        you spend less time searching and more time enjoying.
                    </p>
                    <p>
                        Our mission is simple: help local restaurants thrive while giving food
                        lovers honest, useful ways to discover what is worth trying next.
                    </p>
                </div>
            </section>

            <section className="about-us__values">
                <div className="about-us__section-heading">
                    <p className="about-us__eyebrow">WHAT GUIDES US</p>
                    <h2>Values on every plate</h2>
                </div>
                <div className="about-us__value-grid">
                    {values.map((value) => (
                        <article className="about-us__value" key={value.number}>
                            <span>{value.number}</span>
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="about-us__cta">
                <div>
                    <p className="about-us__eyebrow">READY TO EXPLORE?</p>
                    <h2>Your next great meal is closer than you think.</h2>
                </div>
                <a href="/#restaurants">Discover restaurants</a>
            </section>
        </main>
    );
};

export default AboutUs;
