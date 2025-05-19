import React from "react";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top py-0" style={{ backgroundColor: "rgba(212, 208, 216, 0.6)" }}>
            <div className="container-fluid">
                <a className="navbar-brand nav-link" href="#hero">
                    <h3 className="nav-item">Lucrecia Parodi</h3>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i class="fa-solid fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact Me</a>
                        </li>
                        <li className="nav-item mb-1">
                            <a
                                href="https://app.enhancv.com/share/7db6ed84/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
                                className="btn btn-outline-light resume"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
