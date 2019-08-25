import React, { Component } from 'react';
import Quote from './Quote';


export default class MainPage extends Component {
    render() {
        return (
            <div className="mainpage">
                <h1>Hello from Mainpage</h1>

                    <div className="container">
                        <div className="row">
                           
                                <div className="col-lg-6">
                                    <img src="woman-flying2.jpg" alt="Woman flying" />
                                </div>
                                <div className="col-lg-6">
                                    <Quote />
                                </div>
                            
                        </div>
                        </div>
                
            </div>
        )
    }
}
