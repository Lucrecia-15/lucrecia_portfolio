import React from "react";

export const About = () => {
    return (
        <section
            id="about"
            className="container d-flex flex-column justify-content-center align-items-center text-center px-3 px-md-5 py-5"
            style={{ minHeight: "100vh", paddingTop: "5rem" }}
        >
            <h2 className="mb-4">About Me</h2>
            <p className="lh-base lh-md-lg">
                I hold a degree in Production and Audiovisual Direction, with a strong focus on the artistic side of projects.
                My passion for detail, aesthetics, and structured design naturally led me to the world of web development.
                I enjoy combining creativity and technology, especially in frontend development and web layout.
                For me, building a website is like creating a piece of art: imagining the design, crafting it carefully, and then bringing it to life through code.
                I’m eager to keep learning and look forward to collaborating on projects where design and functionality meet.
                Currently, I’m open to on-site opportunities in Valencia or remote work.
            </p>
        </section>
    );
};
