import React, { Component } from 'react'
import Book from './Book';

export default class BooksList extends Component {
    constructor() {
        super()
        this.state = {
            books: [
                {
                    title: "13 Moons",
                    description: "An Illustrated Series",
                    cover: "/assets/img/13moons.jpg",
                    url: "https://13moons.africa/chapters"
                },
                {
                    title: "30/30",
                    description: "A Collection of Short Stories",
                    cover: "/assets/img/3030.jpg",
                    url: "https://www.smashwords.com/books/view/615690"
                },
                {
                    title: "Lonely Roads",
                    description: "A Novel",
                    cover: "/assets/img/lonelyroads.png",
                    url: "https://www.amazon.com/gp/product/B0196Q9XEM/ref=x_gr_mw_bb_sout?ie=UTF8&tag=x_gr_mw_bb_sout-20&linkCode=as2&camp=1789&creative=9325&creativeASIN=B0196Q9XEM&SubscriptionId=1MGPYB6YW3HWK55XCGG2"
                }
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
