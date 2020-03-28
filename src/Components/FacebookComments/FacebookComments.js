/*global FB*/
import React, { Component } from 'react'

export default class FacebookComments extends Component {
    componentDidMount() {
        if (window.FB) {
            FB.XFBML.parse();
        }

        window.fbAsyncInit = () => {
            FB.init({
                appId: '667250214085633',
                cookie: true,  // enable cookies to allow the server to access the session
                xfbml: true,  // parse social plugins on this page
                version: 'v6.0' // use version 2.1
            });
        }

        // Load the SDK asynchronously
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    render() {
        return (
            <div class="fb-comments loader" data-href={this.props.href} data-width="100%" data-numposts={this.props.numposts}></div>
        )
    }
}