import React, { Component } from 'react'
import Book from './Book';
import sagebook from '../../assets/img/sagebook.png';
import nobsbrand from '../../assets/img/nobsbrand.png';
import moons from '../../assets/img/13moons.png';

export default class BooksList extends Component {
    constructor() {
        super()
        this.state = {
            books: [
                {
                    title: "Sky Sage",
                    description: "A Collection of Short Stories",
                    cover: sagebook,
                    url: "https://www.festivemedia.net/",
                    cta: {
                      text: "Download Sample Chapter",
                      link: "https://me.willifmoore.blog/assets/sky-sage-sample.pdf"
                    }
                },
                {
                    title: "13 Moons",
                    description: "An Illustrated Series",
                    cover: moons,
                    url: "https://13moons.africa/chapters"
                },
                {
                    title: "No BS Branding",
                    description: "No BS Branding",
                    cover: nobsbrand,
                    url: "https://selar.co/3gkk"
                },
            ]
        }
    }

    render() {
        return (
            <section className="BooksList">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <h2 className="text-center">
                            Read
                        </h2>
                        </div>
                        {
                            this.state.books.map((book, key) => {
                                return (
                                    <div key={key} className="col-12 col-md-4">
                                        <Book
                                            url={book.url}
                                            title={book.title}
                                            description={book.description}
                                            cover={book.cover}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}
