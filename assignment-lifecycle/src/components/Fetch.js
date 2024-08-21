import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Loader from "./Loader";
import "../components/loader.css";

class Fetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      value: "",
      title: "My name is",
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((profile) =>
        this.setState({
          data: profile,
          value: profile.results[0].name.first,
        })
      );
  };

  handleUser = () => {
    this.fetchUser();
  };

  render() {
    const { data, value, title } = this.state;

    if (!data) {
      return <Loader />;
    }

    return (
      <>
        <div>
          <div className="upper-color-box"></div>
          <div className="content">
            <div className="content-upper-color-box"></div>
            <img src={data.results[0].picture.medium} alt="User" />
            <p>{title}</p>
            <h3>{value}</h3>
            <div className="icons">
              <button
                onClick={() => {
                  this.setState({
                    title: "My name is",
                    value: data.results[0].email,
                  });
                }}
              >
                <FontAwesomeIcon icon={faUser} style={{ color: "#4694dd" }} />
              </button>
              <button
                onClick={() => {
                  this.setState({
                    title: "My name is",
                    value: data.results[0].dob.age,
                  });
                }}
              >
                <FontAwesomeIcon
                  icon={faEnvelopeOpen}
                  style={{ color: "#4694dd" }}
                />
              </button>
              <button
                onClick={() => {
                  this.setState({
                    title: "My name is",
                    value: data.results[0].location.street.name,
                  });
                }}
              >
                <FontAwesomeIcon icon={faCube} style={{ color: "#4694dd" }} />
              </button>
              <button
                onClick={() => {
                  this.setState({
                    title: "My name is",
                    value: data.results[0].phone,
                  });
                }}
              >
                <FontAwesomeIcon icon={faPhone} style={{ color: "#4694dd" }} />
              </button>
              <button
                onClick={() => {
                  this.setState({
                    title: "My name is",
                    value: data.results[0].login.password,
                  });
                }}
              >
                <FontAwesomeIcon icon={faLock} style={{ color: "#4694dd" }} />
              </button>
            </div>
            <span onClick={this.handleUser}>Random User</span>
          </div>
        </div>
      </>
    );
  }
}

export default Fetch;
