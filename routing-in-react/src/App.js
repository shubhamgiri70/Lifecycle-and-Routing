import React from "react";

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
    if (!this.state.data) {
      return <h1>Loading.....</h1>;
    }
    return (
      <>

        <ul>
          {this.state.data.map((post) => {
            return (
              <li key={post.id}>
                <h2>{post.title}</h2>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default App;
