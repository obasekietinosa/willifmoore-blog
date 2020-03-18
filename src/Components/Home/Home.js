import React, { Component } from 'react'
import NewsletterSubscribe from '../NewsletterSubscribe/NewsletterSubscribe';
import SocialIcons from '../SocialIcons/SocialIcons';
import BooksList from '../Books/BooksList';
import Videos from '../Videos/Videos';
import Contact from '../Contact/Contact';
import PostList from '../Posts/PostList';

export default class Home extends Component {
    render() {
        return (
            <div>
                <NewsletterSubscribe />
                <PostList limit={5} />
                <SocialIcons />
                <BooksList />
                <Videos />
                <Contact />
            </div>
        )
    }
}
