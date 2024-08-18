import React, { Component } from 'react';
import '../App.css';
import data from "../data/index.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class Interest extends Component {
    render() {
        return (
            <section className="portfolio--section" id="interest">
                <div className="portfolio--container-box">
                    <div className="portfolio--container">
                        <p className="sub--title">Interest</p>
                        <h2 className="section--heading">My Interest</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                            officiis sit debitis omnis harum sed veniam quasi dicta accusamus
                            recusandae? Voluptatem, reprehenderit alias? Eligendi aperiam
                            tempora numquam sint odit optio.
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Interest;



