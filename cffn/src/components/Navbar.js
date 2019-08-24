import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar-component">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#"><img src="/cffn-logo.png" alt="Cffn Logo"></img></a>
                    <button class="navbar-toggler custom-navbar-toggler" type="button" data-toggle="collapse" data-target="#custom-toggler">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="custom-toggler">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
