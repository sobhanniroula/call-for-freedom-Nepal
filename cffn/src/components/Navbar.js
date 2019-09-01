import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar-component">
                <nav className="navbar navbar-light navbar-expand-lg justify-content-between">
                    <div className="container-fluid">

                        <div className="navbar-collapse collapse dual-nav w-50 order-1 order-md-0">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Posts</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Contact</a>
                                </li>
                            </ul>
                        </div>

                        <a href="/" className="navbar-brand mx-auto d-block text-center order-0 order-sm-1 w-25">
                            <img src="/cffn-logo.png" alt="Cffn Logo"></img>
                        </a>

                        <div className="navbar-collapse collapse dual-nav w-50 order-2">
                            <ul className="nav navbar-nav ml-auto">
                                <li className="nav-item"><a className="nav-link" href="https://www.instagram.com/c.f.f.n/"><i className="fab fa-instagram"></i></a></li>
                                <li className="nav-item"><a className="nav-link" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
                                <li className="nav-item"><a className="nav-link" href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
                                <li className="nav-item"><a className="nav-link" href="mailto:callforfreedomnepal@gmail.com"><i className="far fa-envelope"></i></a></li>
                            </ul>
                        </div>

                        <button className="navbar-toggler custom-navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-nav">
                            <span className="navbar-toggler-icon-custom"><i className="fas fa-bars"></i></span>
                        </button>

                    </div>
                </nav>
            </div>
        )
    }
}
