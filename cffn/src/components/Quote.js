import React, { Component } from 'react';


export default class Quote extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quotes: []
        }
    }

    componentDidMount() {
        fetch('quotes/get/quotes.json')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    quotes: data.quotes
                });
                
            }).catch(e => console.log(e))
    }

    render() {
        const num = Math.floor(Math.random() * (this.state.quotes.length));
        // const currentQuote = this.state.quotes[num];
        // console.log(currentQuote);
        const abc = setTimeout(() => {
            const currentQuote = this.state.quotes[num];
          console.log(currentQuote);
          }, 2000);

        return (
            <div className="quote">
                <blockquote className="blockquote">
                    &ldquo; She's everything, even when she's treated like nothing. &rdquo;
                    <footer className="blockquote-footer">
                        <cite>R.H. Sin</cite>
                    </footer>
                </blockquote>
            </div>
        )
    }
}
