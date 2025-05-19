import React from "react";

export const Skills = () => {
  const skills = [
    { icon: "fab fa-html5 text-danger", label: "HTML" },
    { icon: "fab fa-css3-alt text-primary", label: "CSS" },
    { icon: "fab fa-js text-warning", label: "JavaScript" },
    { icon: "fab fa-react text-info", label: "React" },
    { icon: "fab fa-bootstrap text-purple", label: "Bootstrap" },
    { icon: "fab fa-js text-primary", label: "TypeScript" },
    { icon: "fab fa-python text-secondary", label: "Python" },
    { icon: "fas fa-fire text-danger", label: "Flask" },
    { icon: "fas fa-plug text-success", label: "APIrest" },
    { icon: "fas fa-database text-info", label: "PostgreSQL" },
    { icon: "fas fa-database text-success", label: "MySQL" },
    { icon: "fab fa-git-alt text-danger", label: "Git" },
    { icon: "fab fa-github text-dark", label: "GitHub" },
    { icon: "fas fa-code text-primary", label: "VSCode" },
    { icon: "fas fa-paper-plane text-danger", label: "Postman" },
    { icon: "fas fa-vial text-success", label: "Insomnia" },
    { icon: "fas fa-paint-brush text-pink", label: "Figma" },
    { icon: "fas fa-pencil-ruler text-secondary", label: "Excalidraw" },
    { icon: "fas fa-palette text-warning", label: "Canva" },
  ];

  return (
    <section id="skills" className="container py-5 mb-5 mt-5">
      <h2 className="text-center mb-5 mt-5">Skills & Technologies</h2>
      <h6 className="technologies text-center mb-5">These are some of the technologies I have worked with:</h6>
      <div className="row justify-content-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="col d-flex align-items-center mb-5"
            style={{ gap: "5px", maxWidth: "200x" }}
          >
            <i className={`${skill.icon} fs-4`} style={{ width: "25px" }}></i>
            <span className="skills fs-5">{skill.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
