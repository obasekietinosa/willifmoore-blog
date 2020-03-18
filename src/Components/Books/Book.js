import React from 'react'
import "./Book.css"

export default function Book(props) {
    return (
        <a href={ props.url } target="_blank" rel="noopener noreferrer" className="Book text-center">
            <img src={ props.cover } alt={ props.title } className="img-fluid mb-2 img-center" />
            <h3>
                { props.title }
            </h3>
            <p>
                { props.description }
            </p>
        </a>
    )
}
