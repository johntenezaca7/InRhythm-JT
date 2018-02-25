import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchData } from "../action/index";
import axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();
    let searchTerm = this.state.term.toLowerCase();
    if (searchTerm.length > 0) {
      this.props.fetchData(this.state.term);
      this.setState({ term: "" });
    } else {
      this.setState({ term: "" });
    }
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="inputForm">
        <input
          placeholder="Search your favorite artist!"
          className="form-input"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <div onClick={this.onFormSubmit} type="submit" className="submit-btn">
          Submit
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchData }, dispatch);
};

export default connect(null, mapDispatchToProps)(Search);
