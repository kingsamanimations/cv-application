import './App.css';
import { useState } from "react";

function Preview({info, edu, experience, details}) {
    const {name, surname, email, occupation} = info;

    return (
        <div className="preview">
            <div className="personal-info">
                <h1>{name} {surname} </h1>

                <p className="personal-email">{email}</p>

                <p className="preview-title">{occupation}</p>
            </div>

            <section className="section education">
                <h3>Education</h3>

                <div className="timeline">
                    {edu.map((formation, index) => (
                        <div className="timeline-item"  key={index}>
                            <h4>{formation.diploma}</h4>

                            <p className="institution">{formation.establishment}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section experience">
                <h3>Experience</h3>

                <div className="timeline">
                    {experience.map((exp, index) => (
                        <article className="timeline-item"  key={index}>
                            <h4>{exp.job}</h4>

                            <p className="company">{exp.enterprise}</p>

                            <p className="responsibility">{exp.responsibility}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="section skill">
                <h3>Skills</h3>

                <ul>
                    {details.map((com, index) => (
                        <li key={index}>{com}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
}


export default Preview;