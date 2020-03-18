import React from 'react'
import "./SocialIcons.css"

export default function SocialIcons() {
    return (
        <section className="socialIcons bg-black">
            <h2 className="text-center">
                Connect
            </h2>
            <div className="container">
                <div className="text-center row">
                    <a href="https://facebook.com/willifmoore/" target="_blank" rel="noopener noreferrer" className="col-md-3 col-6">
                        <i className="fab fa-2x fa-facebook"></i>
                        <p>
                            Community
                        </p>
                    </a>
                    <a href="https://instagram.com/willifmoore/" target="_blank" rel="noopener noreferrer" className="col-md-3 col-6">
                        <i className="fab fa-2x fa-instagram"></i>
                        <p>
                            Lifestyle
                        </p>
                    </a>
                    <a href="https://www.youtube.com/channel/UC1JQ8CJ0N0pUkLSRfi_fl4g" target="_blank" rel="noopener noreferrer" className="col-md-3 col-6">
                        <i className="fab fa-2x fa-youtube"></i>
                        <p>
                            Archive
                        </p>
                    </a>
                    <a href="https://twitter.com/willifmoore/" target="_blank" rel="noopener noreferrer" className="col-md-3 col-6">
                        <i className="fab fa-2x fa-twitter"></i>
                        <p>
                            Bleh
                        </p>
                    </a>
                </div>
            </div>
        </section>
    )
}
