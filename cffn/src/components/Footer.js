import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            &copy; 2019 Sobhan Niroula <br/>
                            <span id="copyright-span">React Development Tool</span>
                        </div>
                        <div className="col-md-3">
                            <h6>About Portfolio</h6>
                            <ul className="list-unstyled">
                                <li><a href="#stage">Home</a></li>
                                <li><a href="#photography">Photography</a></li>
                                <li><a href="#videography">Videography</a></li>
                                <li><a href="#it-projects">IT Projects</a></li>
                                <li><a href="certificates.html">My Certificates</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h6>Social Sites</h6>
                            <ul className="list-unstyled">
                                <li><a href="https://www.linkedin.com/in/sobhan-niroula/" target="_blank">LinkedIn</a></li>
                                <li><a href="https://facebook.com/sobhanphotography123" target="_blank">Facebook</a></li>
                                <li><a href="https://www.youtube.com/user/100sobhan/videos" target="_blank">YouTube</a></li>
                                <li><a href="https://github.com/sobhanniroula" target="_blank">GitHub</a></li>
                                <li><a href="https://flagship-phones-store.herokuapp.com/" target="_blank">Heroku</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
