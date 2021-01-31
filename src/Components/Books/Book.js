import React from 'react'
import "./Book.css"

export default function Book(props) {
  console.log(props.cta);
  
    return (
      <>
        <a href={ props.url } target="_blank" rel="noopener noreferrer" className="Book text-center">
            <img src={ props.cover } alt={ props.title } className="img-fluid mb-2 bg-white img-center" />
            <h3>
                { props.title }
            </h3>
            <p>
                { props.description }
            </p>
        </a>
        {props.cta &&
          <a className="btn btn-primary" href={props.cta.link} target="_blank">
            {props.cta.text}
          </a>
        }
      </>
    )
}
