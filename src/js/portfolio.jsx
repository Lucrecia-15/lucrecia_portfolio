
import React, { useState } from "react";
import RetroVinyl from "../img/retrovinyl.jpg";
import ToDo from "../img/to-do1.jpg";
import Contactlist from "../img/contactlist.png";
import Forms from "../img/forms.jpg";
import Poker from "../img/poker.jpg";
import StarWars from "../img/starwars.png";
import Portafolio from "../img/portfolio.jpg";

export const projects = [
    {
        title: "Portfolio Project",
        description: "React portfolio: About, Skills, Resume & Projects. Bootstrap + CSS.",
        imgUrl: Portafolio,
        repoUrl: "https://github.com/Lucrecia-15/RetroVinyl",
    },
    {
        title: "RetroVinyl",
        description: "Full-stack music website: Flask, React, JWT, Stripe, CRUD for albums and users.",
        imgUrl: RetroVinyl,
        repoUrl: "https://github.com/Lucrecia-15/RetroVinyl",
    },
    {
        title: "Star Wars",
        description: "Single-page app built with React and Flux, using SWAPI to display Star Wars.",
        imgUrl: StarWars,
        repoUrl: "https://github.com/Lucrecia-15/Star_Wars_Lucrecia-15",
    },
    {
        title: "To-Do",
        description: "To-do app built with React, using a REST API for task management (add, delete, fetch).",
        imgUrl: ToDo,
        repoUrl: "https://github.com/Lucrecia-15/Todolist_Lucrecia-15",
    },
    {
        title: "Card Dealer",
        description: "Random playing card generator using HTML, CSS and JavaScript.",
        imgUrl: Poker,
        repoUrl: "https://github.com/Lucrecia-15/Poker_Cards_Lucrecia-15",
    },
    {
        title: "Form Payment",
        description: "Example of a payment form with validation and styling",
        imgUrl: Forms,
        repoUrl: "https://github.com/Lucrecia-15/Forms_Example_LucreciaParodi",
    },
    {
        title: "Contact List",
        description: "React app using Flux and external API to manage contacts.",
        imgUrl: Contactlist,
        repoUrl: "https://github.com/Lucrecia-15/ContactList_context_Lucrecia-15",
    },
];

export const Portfolio = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openImageModal = (imgUrl, title) => {
        setSelectedImage({ url: imgUrl, title: title });
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    return (
        <section id="portfolio" className="container py-5 mt-5">
            <h2 className="text-center mb-5 mt-5">Portfolio</h2>
            <div className="row justify-content-center g-5">
                {projects.map(({ title, description, imgUrl, repoUrl }, index) => (
                    <div className="col-sm-10 col-md-5 col-lg-5 col-xl-3" key={index}>
                        <div className="card h-100 bg-dark">
                            <div
                                className="card-img-container position-relative"
                                onClick={() => openImageModal(imgUrl, title)}
                                style={{ cursor: "pointer" }}
                            >
                                <div style={{
                                    paddingTop: "75%", /* 4:3 Aspect Ratio */
                                    position: "relative"
                                }}>
                                    <img
                                        src={imgUrl}
                                        alt={title}
                                        className="card-img-top"
                                        style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            objectPosition: "center"
                                        }}
                                    />
                                    <div className="image-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                                        style={{
                                            background: "rgba(0,0,0,0.3)",
                                            opacity: 0,
                                            transition: "opacity 0.3s ease",
                                            ":hover": { opacity: 1 }
                                        }}>
                                        <span className="text-white">
                                            <i className="fas fa-search-plus"></i> Ver imagen
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text flex-grow-1">{description}</p>
                                <div className="mt-auto">
                                    <a
                                        href={repoUrl}
                                        className="btn_purple btn btn-outline-light me-2"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal para ver la imagen */}
            {selectedImage && (
                <div className="modal show" style={{ display: "block" }}>
                    <div className="modal-dialog modal-xl modal-dialog-centered">
                        <div className="modal-content bg-dark">
                            <div className="modal-header border-0">
                                <h5 className="modal-title">{selectedImage.title}</h5>
                                <button
                                    type="button"
                                    className="btn-close btn-close-white"
                                    onClick={closeImageModal}
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body p-0 d-flex justify-content-center">
                                <img
                                    src={selectedImage.url}
                                    alt={selectedImage.title}
                                    style={{
                                        maxWidth: "100%",
                                        maxHeight: "80vh",
                                        objectFit: "contain"
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};
