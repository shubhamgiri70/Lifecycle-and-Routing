import React from "react";
import { useParams } from "react-router-dom";

class SingleArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null,
    };
  }

  componentDidMount() {
    let { id } = this.props;

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((article) => this.setState({ article }));
  }

  render() {
    if (!this.state.article) {
      return <h1>Loading.....</h1>;
    }
    return (
      <div>
        <h1>{this.state.article.title}</h1>
        <p>{this.state.article.body}</p>
      </div>
    );
  }
}

const WrappedSingleArticle = (props) => {
  const params = useParams();
  return <SingleArticle {...props} {...params} />;
};

export default WrappedSingleArticle;
