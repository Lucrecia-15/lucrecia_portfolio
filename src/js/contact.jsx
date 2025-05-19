import React, { useState } from "react";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill in all fields.");
            return;
        }

        const mailtoLink = `mailto:parodilucrecia@gmail.com?subject=Contact from ${encodeURIComponent(
            formData.name
        )}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;

        window.location.href = mailtoLink;
    };

    return (
        <section id="contact" className="container py-5">
            <h2 className="text-center mb-4 mt-3">Contact Me</h2>
            <p className="text-center mb-4">
                Feel free to reach out by phone at <strong>+34 611 891 848 </strong>
                Or send me a message on WhatsApp.
                <a
                    href="https://wa.me/34611891848"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wapp btn btn-outline-success d-flex align-items-center gap-2 mt-3"
                    style={{ maxWidth: "200px", margin: "0 auto" }}
                >
                    <i className="fab fa-whatsapp"></i> Chat on WhatsApp
                </a>
            </p>
            <form
                onSubmit={handleSubmit}
                className="mx-auto"
                style={{ maxWidth: "500px" }}
                noValidate
            >
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control bg-white text-dark"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control bg-white text-dark"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="form-control bg-white text-dark"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn_purple btn btn-outline-light px-5">
                        Send
                    </button>
                </div>
            </form>
        </section>
    );
};
