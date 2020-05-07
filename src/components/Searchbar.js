import React from "react";
import { connect } from "react-redux";
import { getSuggestions } from "../redux/Actions";
import Suggestions from "./Suggestions";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  handleActive = () => {
    this.setState({ show: true });
  };

  handleBlur = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <div
          className="field"
          onMouseLeave={this.handleBlur}
          onClick={this.handleActive}
        >
          <div className="control">
            <input
              className="input is-info is-rounded "
              type="text"
              placeholder="Search By Battle Name"
              onChange={(e) => this.props.getSuggestions(e.target.value)}
            />
          </div>
          {this.state.show && <Suggestions show={true} />}
        </div>
      </div>
    );
  }
}

export default connect(null, { getSuggestions })(SearchBar);
