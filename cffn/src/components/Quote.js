import React, { Component } from 'react'

export default class Quote extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        fetch('quotes/get/')
            .then(res => console.log(res))
    }

    render() {
        return (
            <div className="quote">
                <blockquote className="blockquote">
                                        &ldquo;Whatever you do, there is always someone who is better than you and also someone who knows less than you. So, just believe in you and go with the flow..&rdquo;
                                        <footer className="blockquote-footer">
                                            <cite>Sobhan Niroula</cite>
                                        </footer>
                                    </blockquote>
            </div>
        )
    }
}
