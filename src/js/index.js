import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


let num = 0
let num2 = 0
let num3 = 0
let num4 = 0
let num5 = 0
let num6 = 0


setInterval(function() {
            num++;
            if (num === 10) {
                num = 0;
                num2++;
            }
            if (num2 === 10) {
                num2 = 0;
                num3++
            }
            if (num3 === 10) {
                num3 = 0;
                num4++
            }
            if (num4 === 6) {
                num4 = 0;
                num5++
            }
            if (num5 === 10) {
                num5 = 0;
                num6++
            }
            if (num6 === 2 && num5 === 4) {
                num = 0;
                num2 = 0;
                num3 = 0;
                num4 = 0;
                num5 = 0;
                num6 = 0
            }
            ReactDOM.render( < Home unidad = {
                    num
                }
                decena = {
                    num2
                }
                centena = {
                    num3
                }
                mil = {
                    num4
                }
                diezmil = {
                    num5
                }
                cienmil = {
                    num6
                }
                />, document.querySelector("#app"));
            },0.1)

  

