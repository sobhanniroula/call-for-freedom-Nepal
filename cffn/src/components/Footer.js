import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 copyright-div">
                            <div className="row footer-logo">
                                <img src="cffn-logo.png" alt="Cffn logo"/>
                            </div>
                            &copy; 2019 Sobhan Niroula <br/>
                            <span id="copyright-span">&middot; React Development Tool &middot;</span>
                        </div>
                        <div className="col-md-3">
                            <h6>Links</h6>
                            <ul className="list-unstyled footer-links">
                                <li><a href="/">Home</a></li>
                                <li><a href="/">Posts</a></li>
                                <li><a href="/">Contacts</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h6>Social Sites</h6>
                            <ul className="list-unstyled footer-social">
                                <li><a href="https://www.instagram.com/c.f.f.n/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="https://www.facebook.com/ShikshyaSang/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="mailto:callforfreedomnepal@gmail.com" target="_blank" rel="noopener noreferrer"><i class="far fa-envelope"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
