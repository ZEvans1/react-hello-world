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
import App from "./components/App";
import { AppContainer } from 'react-hot-loader';
// --- help queue ---
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render(App);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(App)
    });
}