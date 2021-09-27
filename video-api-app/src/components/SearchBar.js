import react from "react";
import React from "react";
import { render } from "react-dom";

class SearchBar extends react.Component {
  //Initializing State here
  state = { myInput: "" };

  onInputChange = (event) => {
    this.setState({ myInput: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    //To Do: Make sure we call
    //call back from parent components
    this.props.onFormSubmit(this.state.myInput);
  };

  //Render method is conpulsory when creating a class components
  render() {
    return (
      <div className="search-bar-ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search 'YouTube'</label>
            <input
              type="text"
              value={this.state.myInput}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
