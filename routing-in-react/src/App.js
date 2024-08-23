import React from "react";
import Header from "./components/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }
  render() {
    return (
      <>
        <Header />
      </>
    );
  }
}

export default App;
