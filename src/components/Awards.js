import React, { Component } from 'react';
import data from "../data/index.json";
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTrophy } from '@fortawesome/free-solid-svg-icons';

class Awards extends Component {
    render() {
        return (
            <section className="testimonial--section" id="award" style={{background: "none"}}>
                <div className="portfolio--container-box">
                    <div className="portfolio--container">
                        <p className="sub--title">Award</p>
                        <h2 className="sections--heading">My Achievement</h2>
                    </div>
                </div>
                <div className="portfolio--section--container">
                    {data?.award?.map((item, index) => (
                        <div key={index} className="testimonial--section--card">
                            <div className="testimonial--section--card--review">
                                <FontAwesomeIcon
                                    key={index}
                                    icon={faTrophy}
                                    size="lg"
                                    color="#5e3bee" // Adjust color if needed
                                />
                            </div>
                            <h1>{item.title}</h1>
                            <p className="text-md">{item.description}</p>
                            <div className="testimonial--section--card--author--detail">
                                {/* <img src={item.src} alt="Avatar" />
                                <div>
                                    <p className="text-md testimonial--author--name">
                                        {item.author_name}
                                    </p>
                                    <p className="text-md testimonial--author--designation">
                                        {item.author_designation}
                                    </p>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }
}

export default Awards;
