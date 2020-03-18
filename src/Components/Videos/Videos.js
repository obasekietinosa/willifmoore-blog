import React, { Component } from 'react'
import YouTubeEmbed from '../YouTubeEmbed/YouTubeEmbed';

export default class Videos extends Component {
    constructor() {
        super()
        this.state = {
            videos: [
                {
                    id: "JxtTHSX2jcA",
                    title: "Poet by the Bottle"
                },
                {
                    id: "JTL9qI1vorc",
                    title: "My Room, and Other Places"
                }
            ]
        }
    }
    render() {
        return (
            <section className="Videos bg-black">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="text-center">
                                Watch
                            </h2>
                        </div>
                        {
                            this.state.videos.map((video, key) => {
                                return (
                                    <div key={key} className="col-md-6">
                                        <YouTubeEmbed id={video.id} />
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
