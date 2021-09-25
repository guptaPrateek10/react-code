import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// if (module.hot) {
//   module.hot.accept();
// }

class App extends React.Component {
  //
  // constructor(props) {
  //   super(props);
  //   // This is the ONLY TIME WE DO DIRECT ASSIGNMENT
  //   // TO this.state !!!
  //   this.state = { lat: null, errorMessage: "" };
  // }

  //Alternate way of initializing state
  state = { lat: null, errorMessage: "" };

  // We use this method to do Data Loading Activities First time when page loads
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        // we called setState!!!
        this.setState({ lat: position.coords.latitude }),
      //WE DID NOT !!!
      //this.state.lat = position.coords.lalitude
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage}</div>;
    }
    if (this.state.lat && !this.state.errorMessage) {
      // return <div>Latitude: {this.state.lat}</div>;
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please allow location request" />;
  }

  // React says we have to define render!! when returning JSX
  render() {
    return <div className="border-red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
