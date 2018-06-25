import React from "react";
import Header from "./Header";

function App() {
    return (
        <div>
            <Header/>
            <h2>{new Date().toLocaleTimeString()}</h2>
            <h3>3a</h3>
            <h3>Amy and Brigitte</h3>
            <p><em>Just checking in.</em></p>
            <hr/>
        </div>
    );
}

export default App;