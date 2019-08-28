import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar-component">
                {/* <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="/"><img src="/cffn-logo.png" alt="Cffn Logo"></a>
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
                </nav> */}

<nav class="navbar navbar-light navbar-expand-md justify-content-between">
  <div class="container-fluid">

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-nav">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="navbar-collapse collapse dual-nav w-50 order-1 order-md-0">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Posts</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Contact</a>
        </li>
      </ul>
    </div>

    <a href="/" class="navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25">
        <img src="/cffn-logo.png" alt="Cffn Logo"></img>
    </a>

    <div class="navbar-collapse collapse dual-nav w-50 order-2">
      <ul class="nav navbar-nav ml-auto">
        <li class="nav-item"><a class="nav-link" href="">Instagram</a></li>
        <li class="nav-item"><a class="nav-link" href="">Facebook</a></li>
        <li class="nav-item"><a class="nav-link" href="">Twitter</a></li>
        <li class="nav-item"><a class="nav-link" href="">Email</a></li>
      </ul>
    </div>

  </div>
</nav>
            </div>
        )
    }
}
