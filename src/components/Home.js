import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css'
//style={{ color: '#5e3bee' }}

class Home extends Component {
    render() {
        return (
            <section id="heroSection" className="hero--section">
                <div className="hero--section--content--box">
                    <div className="hero--section--content">
                        <p className="section--title">Hey, I'm John Doe</p>
                        <h1 className="hero--section--title">
                            <span className="hero--section--title--color" >Full Stack</span>
                            <br />
                            Developer
                        </h1>
                        <p className="hero--section-description">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            <br /> Dolorum, quas. Amet soluta assumenda cum?
                        </p>
                    </div>
                    <button className="btn btn-primary">Get In Touch</button>
                </div>
                <div className="hero--section--img">
                    <img src="./img/avatar-hero.jpg" alt="Hero Section" />
                </div>
            </section>
        );
    }
}

export default Home;
