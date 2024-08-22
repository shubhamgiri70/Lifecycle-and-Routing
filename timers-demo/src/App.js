import React from "react";

import Countdown from "./components/Countdown";
import Stopwatch from "./components/Stopwatch";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="app">
          <div className="app-title">Timer Demo</div>
          <div className="timers">
            <Stopwatch />
            <Countdown />
          </div>
        </div>
      </>
    );
  }
}

export default App;
