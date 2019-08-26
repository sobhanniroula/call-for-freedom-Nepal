import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar-component">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="/"><img src="/cffn-logo.png" alt="Cffn Logo"></img></a>
                    <button className="navbar-toggler custom-navbar-toggler" type="button" data-toggle="collapse" data-target="#custom-toggler">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="custom-toggler">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
