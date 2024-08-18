import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import data from "../data/index.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faDatabase, faPaintbrush, faCode } from '@fortawesome/free-solid-svg-icons';

// Map icon class names to Font Awesome icons
const iconMap = {
    "fa-solid fa-laptop-code": faLaptopCode,
    "fa-solid fa-database": faDatabase,
    "fa-solid fa-paintbrush": faPaintbrush,
    "fa-solid fa-code": faCode
};

class Skills extends Component {
    render() {
        return (
            <section className="skills--section" id="mySkills">
                <div className="portfolio--container">
                    <p className="section--title">My Skills</p>
                    <h2 className="skills--section--heading">My Expertise</h2>
                </div>
                <div className="skills--section--container">
                    {data?.skills?.map((item, index) => (
                        <div key={index} className="skills--section--card">
                            <div className="skills--section--img">
                                <FontAwesomeIcon icon={iconMap[item.icon]} size="3x" />
                            </div>
                            <div className="skills--section--card--content">
                                <h3 className="skills--section--title">{item.title}</h3>
                                <p className="skills--section--description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

export default Skills;
