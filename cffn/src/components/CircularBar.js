import React, { Component } from 'react';

export default class CircularBar extends Component {

    fillCounter() {
        diff = ((no/100) * Math.PI*2*10);
        counter.clearRect(0,0,cw,ch); //clears canvas everytime when function is call
        counter.lineWidth = 15; //size of stroke
        counter.fillStyle = '#fff'; //color to fill in the circle
        counter.strokeStyle = '#F5E0A9'; //stroke color
        counter.textAlign = 'center';
        counter.font = '25px monospace'; //font size and face
        conter.fillText(no,100,110); //fillText(text,x,y);
        counter.beginPath();
        counter.arc(100,100,90,pointToFill,diff/10+pointToFill);
    }

    render() {

        let counter = document.getElementById('counter').getContext('2d');
        let no = 0; //Starting Point
        let pointToFill = 4.72; //Point from where you want to fill the circle
        let cw = counter.canvas.width; 
        let ch = counter.canvas.height;
        let diff; //Difference between current (no) and targeted value (100)



        return (
            <div className="circular-bar">
                <canvas height="200" width="200" id="counter" />
            </div>
        )
    }
}
