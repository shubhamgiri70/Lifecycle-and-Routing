import React from "react";

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOn: false,
      timerStart: 0,
      timerTime: 0,
    };
  }

  startTimer = () => {
    this.setState((prevState) => ({
      timerOn: true,
      timerStart: prevState.timerStart || prevState.timerTime, // Only set timerStart once
      timerTime: prevState.timerTime,
    }));

    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 10;
      if (newTime >= 0) {
        this.setState({ timerTime: newTime });
      } else {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
        alert("Countdown ended");
      }
    }, 10);
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };

  resetTimer = () => {
    if (!this.state.timerOn) {
      this.setState({
        timerTime: this.state.timerStart,
      });
    }
  };

  adjustTimer = (input) => {
    const { timerTime, timerOn } = this.state;
    const max = 216000000;
    if (!timerOn) {
      if (input === "incHours" && timerTime + 3600000 < max) {
        this.setState({ timerTime: timerTime + 3600000 });
      } else if (input === "decHours" && timerTime - 3600000 >= 0) {
        this.setState({ timerTime: timerTime - 3600000 });
      } else if (input === "incMinutes" && timerTime + 60000 < max) {
        this.setState({ timerTime: timerTime + 60000 });
      } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
        this.setState({ timerTime: timerTime - 60000 });
      } else if (input === "incSeconds" && timerTime + 1000 < max) {
        this.setState({ timerTime: timerTime + 1000 });
      } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
        this.setState({ timerTime: timerTime - 1000 });
      }
    }
  };

  render() {
    const { timerTime, timerStart, timerOn } = this.state;
    let seconds = ("0" + Math.floor((timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor((timerTime / 3600000) % 24)).slice(-2);

    return (
      <>
        <div className="countdown">
          <div className="countdown-header">Countdown</div>
          <div className="Countdown-label">Hours : Minutes : Seconds</div>
          <div className="Countdown-display">
            <button onClick={() => this.adjustTimer("incHours")}>
              &#8679;
            </button>
            <button onClick={() => this.adjustTimer("incMinutes")}>
              &#8679;
            </button>
            <button onClick={() => this.adjustTimer("incSeconds")}>
              &#8679;
            </button>
            <button onClick={() => this.adjustTimer("decHours")}>
              &#8681;
            </button>
            <button onClick={() => this.adjustTimer("decMinutes")}>
              &#8681;
            </button>
            <button onClick={() => this.adjustTimer("decSeconds")}>
              &#8681;
            </button>
          </div>
          <div className="Countdown-time">
            {hours} : {minutes} : {seconds}
          </div>
          {timerOn === false &&
            (timerStart === 0 || timerTime === timerStart) && (
              <button onClick={this.startTimer}>Start</button>
            )}
          {timerOn === true && timerTime >= 1000 && (
            <button onClick={this.stopTimer}>Stop</button>
          )}
          {timerOn === false &&
            timerStart !== 0 &&
            timerStart !== timerTime &&
            timerTime !== 0 && (
              <button onClick={this.startTimer}>Resume</button>
            )}
          {(timerOn === false || timerTime < 1000) &&
            timerStart !== timerTime &&
            timerStart > 0 && <button onClick={this.resetTimer}>Reset</button>}
        </div>
      </>
    );
  }
}

export default Countdown;
