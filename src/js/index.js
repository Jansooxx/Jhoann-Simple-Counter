import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


const nums = [0, 0, 0, 0, 0, 0];

setInterval(function() {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 9) {
      nums[i] = 0;
    } else {
      nums[i]++;
      break;
    }

      if (num6 === 2 && num5 === 4) {
        num = 0;
        num2 = 0;
        num3 = 0;
        num4 = 0;
        num5 = 0;
        num6 = 0
    }
  }


  ReactDOM.render(
    <Home
      unidad= {nums[0]}
      decena= {nums[1]}
      centena={nums[2]}
      mil=    {nums[3]}
      diezmil={nums[4]}
      cienmil={nums[5]}
    />,
    document.querySelector("#app")
  );
}, 0.1);


//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
