import React, { Component } from 'react'

export default class NewsletterSubscribe extends Component {
    constructor() {
        super()
        this.state = {
            email: ""
        }
    }

    setEmail = (e) => {
      let email = e.target.value
      if (email.length) {
        this.setState({
          email
        })
      }
    }

    render() {
        return (
            <section className="newsletterSubscribe bg-primary">
                <div className="form-group text-center col-md-6 offset-md-3">
                    <p className="col-sm-12 mt-3">Sign up to my newsletter below:</p>
                    <input
                        placeholder="Your Email*"
                        onChange={this.setEmail}
                        value={this.state.email}
                        id="email"
                        name="email"
                        type="text"
                        className="form-control text-center mb-3"
                    />
                    <div className="col-12 text-center">
                        <button onClick={this.submitEmail} className="btn btn-primary">Sign Up!</button>
                    </div>
                </div>
            </section>
        )
    }
}
