import React from "react";
import "./App.css";
import Loader from "./components/Loader/index";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="App-header-wrapper">
          <div className="App-header__left">
            <div className="App-header__left-icon">
              <a href="https://github.com/mike-pinchuk/github_app_task.git">
                <img
                  src="https://avatars1.githubusercontent.com/u/9919?s=200&v=4"
                  alt="icon of github website"
                  title="Click on me to review the code of this app"
                />
              </a>
            </div>
            <div className="App-header__left-text">
              <h1>GitHub Search Appliacation</h1>
              <p>Find interesting repositories</p>
            </div>
          </div>
          <div className="App-header__right">
            <p>Github users search app</p>
          </div>
        </div>
        <hr />
      </div>
      <Loader />
      <div className="App-footer"></div>
    </div>
  );
}

export default App;
