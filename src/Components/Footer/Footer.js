import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <span>© 2019 William Moore.</span>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
