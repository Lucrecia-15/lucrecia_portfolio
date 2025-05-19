import React from "react";
import { Links } from "./redirect_links";

export default function Hero() {
  return (
    
    <section id="hero" className="container d-flex flex-column justify-content-center align-items-center text-center pt-5">
      <h1 className="display-4 mt-5 b-2">Hi! I'm</h1>
      <h1 className="nametext text-primary fw-bold mt-4">Lucrecia Parodi</h1>
      <h2 className="h4 mt-4">Full Stack Developer</h2>
      <p className="mt-4 px-3 px-md-5">
        I love building clean, responsive, and accessible web interfaces. <br />
        I'm looking for opportunities to grow, learn, and collaborate on real projects. <br />
        Available for on-site roles in Valencia or remote positions.
      </p>
      <div className="mt-4">
        <a
          href="https://wa.me/34611891848"
          className="btn_purple btn btn-outline-light px-4"
        >
          Contact Me
        </a>
      </div>
      <Links/>
    </section>
  );
}
