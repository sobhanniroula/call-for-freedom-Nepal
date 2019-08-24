import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';


export default class App extends Component {
  render() {
    return (
     <React.Fragment>
       <TopBar />
       <Navbar />
     </React.Fragment>
    )
  }
}
