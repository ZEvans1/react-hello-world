// --- before help queue ---
// function liveTime() {
//     var greeting = React.createElement('h1', {}, 'Hello, World!');
//     var clock = React.createElement('h2', {}, `It is ${new Date().toLocaleTimeString()}`);
//     var app = React.createElement('div', {}, greeting, clock);

//     ReactDOM.render(
//         app,
//         document.getElementById('react-app-root')
//     );
// }

// setInterval(liveTime, 1000);
import React from "react";
import ReactDOM from "react-dom";
// --- help queue ---
ReactDOM.render(
    <div>
        <h1>Help Queue</h1>
        <h2>{new Date().toLocaleTimeString()}</h2>
        <h3>3a</h3>
        <h3>Amy and Brigitte</h3>
        <p><em>Just checking in.</em></p>
    </div>,
    document.getElementById('react-app-root')
);