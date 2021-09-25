import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  //The Shortcut of below function : check the onChange class in input tag
  //   onInputChange(event) {
  //     console.log(event.target.value); //anytime user type in textbox
  //   }

  // onInputClick() {
  //   console.log("input was clicked");
  // }
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
