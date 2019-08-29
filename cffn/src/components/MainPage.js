import React, { Component } from 'react';
import Quote from './Quote';


export default class MainPage extends Component {
    render() {
        return (
            <div className="mainpage">

                <div className="mainpage-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 quote-img">
                                <img src="woman-flying2.png" alt="Woman flying" />
                            </div>
                            <div className="col-lg-6">
                                <Quote />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
