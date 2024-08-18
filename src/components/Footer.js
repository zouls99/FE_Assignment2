import { Link } from "react-scroll";
import React, { Component } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';

class Footer extends Component {
    render() {
        return (
            <footer className="footer--container">
                <div className="footer--content--container">
                    <p className="footer--content">Hacktiv8 FE Assignment 2</p>
                    <div className="footer--social--icon">
                        <ul>
                            <li>
                                <Link
                                    activeClass="navbar--active-content"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    to="Privacy_Policy"
                                    className="text-sm"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="navbar--active-content"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    to="Terms_of_Service"
                                    className="text-sm"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="navbar--active-content"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    to="Cookies_Settings"
                                    className="text-sm"
                                >
                                    Cookies Settings
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;