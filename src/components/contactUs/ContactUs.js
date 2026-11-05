import { useState } from "react";
import "./ContactUs.scss";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((currentData) => ({ ...currentData, [name]: value }));
        setSubmitted(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <main className="contact-us">
            <section className="contact-us__intro">
                <p className="contact-us__eyebrow">GET IN TOUCH</p>
                <h1>We'd love to hear from you.</h1>
                <p>
                    Have a question, feedback, or a restaurant you think we should know about?
                    Send us a message and our team will get back to you.
                </p>
            </section>

            <section className="contact-us__content" aria-label="Contact Bite">
                <div className="contact-us__details">
                    <h2>Contact information</h2>
                    <p>Reach out through any of the options below.</p>
                    <address>
                        <a href="mailto:hello@bite.example">
                            <span>Email</span>
                            hello@bite.example
                        </a>
                        <a href="tel:+1234567890">
                            <span>Phone</span>
                            +1 (234) 567-890
                        </a>
                        <p>
                            <span>Hours</span>
                            Monday – Friday, 9am – 6pm
                        </p>
                    </address>
                </div>

                <form className="contact-us__form" onSubmit={handleSubmit}>
                    {submitted && (
                        <p className="contact-us__success" role="status">
                            Thanks! Your message has been sent.
                        </p>
                    )}

                    <div className="contact-us__field-row">
                        <label>
                            Name
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                            />
                        </label>
                        <label>
                            Email
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                required
                            />
                        </label>
                    </div>

                    <label>
                        Subject
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="How can we help?"
                            required
                        />
                    </label>

                    <label>
                        Message
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us a little more..."
                            rows="6"
                            required
                        />
                    </label>

                    <button type="submit">Send message</button>
                </form>
            </section>
        </main>
    );
};

export default ContactUs;
