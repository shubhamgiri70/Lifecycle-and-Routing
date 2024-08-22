import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTimer: true,
    };
  }

  handleClick = () => {
    this.setState({
      showTimer: !this.state.showTimer,
    });
  };

  render() {
    return (
      <>
        <div className="container">
          {this.state.showTimer ? (
            <Time handleClick={this.handleClick} />
          ) : (
            <button onClick={this.handleClick}>Show time component</button>
          )}
        </div>
      </>
    );
  }
}

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ date: new Date() });
      console.log("Timer");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h1>The time is: {this.state.date.toLocaleTimeString()} </h1>
        <button onClick={this.props.handleClick}>Hide time component</button>
      </div>
    );
  }
}

export default Timer;
