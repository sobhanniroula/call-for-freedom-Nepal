import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import Footer from './components/Footer';


export default class App extends Component {
  render() {
    return (
     <React.Fragment>
       <TopBar />
       <Navbar />
       <MainPage />
       <Footer />
     </React.Fragment>
    )
  }
}
