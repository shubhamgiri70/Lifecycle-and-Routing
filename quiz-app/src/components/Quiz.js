import React from "react";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryID: [],
      selectedCategory: "",
    };
  }

  componentDidMount() {
    fetch("https://opentdb.com/api_category.php")
      .then((res) => res.json())
      .then((data) => {
        let category = data.trivia_categories;
        this.setState({ categoryID: category });
      });
  }

  handleCategoryChange = (event) => {
    this.setState({ selectedCategory: event.target.value });
  };

  render() {
    return (
      <>
        <header>
          <h1>QUIZ</h1>
        </header>
        <form>
          <label>Select Category:</label>
          <select onChange={this.handleCategoryChange} key="id">
            {this.state.categoryID.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <label>Select Difficulty:</label>
          <select>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <input className="btn" type="submit" value="Submit" />
        </form>
      </>
    );
  }
}


export default Quiz;
