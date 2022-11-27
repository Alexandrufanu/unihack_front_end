import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
 
import LogInModal from "./components/modal"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <LogInModal />


  </React.StrictMode>
);


// const sign_in = ReactDOM.createRoot(document.getElementById('sign_in'));
// sign_in.render(
//   <React.StrictMode>

//     <LogInModal />


//   </React.StrictMode>
// );

let header = document.getElementById('header');

document.addEventListener('scroll', function() {
    // Get scroll position
    let scrollPosition = window.pageYOffset;

    // Calculate whether the scroll it 350px or not then set the opacity to face the header out
    if (scrollPosition <= 350) {
        header.style.opacity = 1 - scrollPosition / 350;
    } else {
        header.style.opacity = 0;
    }

});



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
