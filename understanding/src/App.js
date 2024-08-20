import React from "react";
import Loader from "./Loader";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => this.setState({ data: data }));
  }

  render() {
    if (!this.state.data) {
      return <Loader />;
    }
    return (
      <>
        <div className="container">
          <ul>
            {this.state.data.map((post) => {
              return (
                <li key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default App;
