import React, { Component } from 'react'

export default class NewsletterSubscribe extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            status: "Done",
            message: ""
        }
    }

    setEmail = (e) => {
      let email = e.target.value
      this.setState({
        email
      })
    }

    submitEmail = () => {
        if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.state.email))) {
            this.setState({
                message: "Please give us a valid email address",
                status: "Error"
            })
            return
        }
        this.setState({ message:"Please wait", status: "Loading" })
        fetch("https://me.willifmoore.blog/newsletter/subscribe.php?email=" + this.state.email, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                switch (data.status) {
                    case "Success":
                        this.setState({ status: "Done", email: "", message: "Success! You'll receive an email for my next publication"})
                        break;

                    case "Duplicate":
                        this.setState({ status: "Done", email: "", message: "Thanks! Seems like you've already subscribed."})
                        break;
                
                    default:
                        throw new Error('Something went wrong')
                }
            })
            .catch(error => {
              let message = "There was an error adding your email. Please try again."
              this.setState({ message, status:"Error" })
            })
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
                    <div className="col-12 mt-3 text-center">
                        <p>{this.state.message}</p>
                    </div>
                </div>
            </section>
        )
    }
}
