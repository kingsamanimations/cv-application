import './App.css';
import { useState } from "react";

// Handling each piece Information functions
function handlePerson(e, callback) {
    callback((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
    });
}

function handleEdu(e, callback) {
    const { name, value } = e.target;
    const dataset = e.target.parentElement.dataset;
    const index =  Number(dataset.id);

    callback((prev) => {
        const newData = [...prev];

        // If the object does not exist, create it.
        if (!newData[index]) {
            newData[index] = {
                diploma: "",
                establishment: "",
            };
        }

        // Only the relevant property is modified.
        newData[index] = {
            ...newData[index],
            [name]: value,
        };

        return newData;
    });
}

function handleExperience(e, callback) {
    const { name, value } = e.target;
    const index =  Number(e.target.parentElement.dataset.id);

    callback((prev) => {
        const newData = [...prev];

        // If the object does not exist, create it.
        if (!newData[index]) {
            newData[index] = {
                enterprise: "",
                job: "",
                responsibility: "",
            };
        }

        // Only the relevant property is modified.
        newData[index] = {
            ...newData[index],
            [name]: value,
        };

        return newData;
    });
}

function handleSkill(e, callback) {
    const { value, dataset } = e.target;
    const index =  Number(dataset.id);

    callback((prev) => {
        const newData = [...prev];

        newData[index] = value;

        return newData;
    });
}

function Form({setInfo, setEdu, setExperience, experience, details, setDetails}) {
    const [deForm, setDeform] = useState(1);
    const [competence, setCompetence] = useState(1);

    // Form format (With HTML)
    return (
        <div className="form">
            <section className="form-section">
                <h2>Personal Information</h2>
                <input type="text" placeholder='Name' name='name' onChange={(e) => {
                    handlePerson(e, setInfo);
                }}/>

                <input type="text" placeholder='Surname' name='surname' onChange={(e) => {
                    handlePerson(e, setInfo);
                }}/>

                <input type="email" placeholder='Email' name='email' onChange={(e) => {
                    handlePerson(e, setInfo);
                }}/>

                <input type="text" placeholder='Occupation' name='occupation' onChange={(e) => {
                    handlePerson(e, setInfo);
                }}/>
            </section>

            <section className="form-section">
                <h2>Education</h2>
                {Array.from({ length: deForm }).map((_, index) => (
                    <div className="education-group" key={index} data-id={index}>

                        <input type="text" placeholder='Diploma' name='diploma' onChange={(e) => {
                            handleEdu(e, setEdu);
                        }}/>

                        <input type="text" placeholder='Establishment' name='establishment' onChange={(e) => {
                            handleEdu(e, setEdu);
                        }}/>
                    </div>
                ))}
                <button className="form-add" 
                    onClick={() => {
                        setDeform((prev) => prev + 1);
                    }}
                >
                    Add More Information
                </button>
            </section>

            <section className="form-section">
                <h2>Professional Experience</h2>
                {experience.map((_, index) => (
                    <div className="education-group" key={index} data-id={index}>

                        <input type="text" placeholder='Job' name='job' onChange={(e) => {
                            handleExperience(e, setExperience);
                        }}/>

                        <input type="text" placeholder='Enterprise' name='enterprise' onChange={(e) => {
                            handleExperience(e, setExperience);
                        }}/>

                        <textarea placeholder='Responsibilities' name='responsibility' onChange={(e) => {
                            handleExperience(e, setExperience);
                        }}/>
                    </div>
                ))}
                <button className="form-add"
                    onClick={() => {
                        setExperience((prev) => [...prev, 
                            {
                                enterprise: "",
                                job: "",
                                responsibility: "",
                            },
                        ]);
                    }}
                >
                    Add More Experiences
                </button>
            </section>

            <section className="form-section">
                <h2>Skills</h2>
                <div className="competence-group">
                    {details.map((comp, index) => (
                        <input 
                            key = {index} 
                            data-id = {index}
                            type = "text"
                            placeholder = 'Skill'
                            value = {comp}
                            onChange={(e) => handleSkill(e, setDetails)}
                        />
                    ))}
                </div>
                <button className="form-add" 
                    onClick={() => {
                        setDetails((prev) => [...prev, ""]);
                    }}
                >
                    Add More Skills
                </button>
            </section>
        </div>
    )
}

export default Form;