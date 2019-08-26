import React, { Component } from 'react';
import { quotesArray } from '../allQuotes';


export default class Quote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quotes: quotesArray
        }
    }

    render() {
        const num = Math.floor(Math.random() * (this.state.quotes.length));
        const currentQuote = this.state.quotes[num].quote;
        const currentAuthor = this.state.quotes[num].author;
        
        return (
            <div className="quote">
                <blockquote className="blockquote">
                    &ldquo; {currentQuote} &rdquo;
                    <footer className="blockquote-footer">
                        <cite> {currentAuthor} </cite>
                    </footer>
                </blockquote>
            </div>
        )
    }
}
