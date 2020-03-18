import React, { Component } from 'react'
import './Header.css'
import { Link } from "react-router-dom"
import headerImage from '../../assets/img/headerImage.png';

export default class Header extends Component {
    render() {
        return (
            <nav className="black black-text">
                <div className="mx-auto">
                    <Link to="/">
                        <img className="img-fluid img-center brand-logo" src={headerImage} alt="William Moore" />
                    </Link>
                </div>
            </nav>
        )
    }
}
