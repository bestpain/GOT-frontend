import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Suggestions extends React.Component {
  displayOptions = () => {
    return this.props.searchResults.map((res) => (
      <li
        key={res.battle_number}
        style={{
          padding: "10px",
          cursor: "pointer",
          backgroundColor: "#fff",
          borderBottom: "1px solid #d4d4d4",
        }}
      >
        <Link
          to={{
            pathname: `/battle/${res._id}`,
            battle: res,
          }}
        >
          {res.name}
        </Link>
      </li>
    ));
  };
  render() {
    return (
      <div>
        <ul style={{ position: "absolute", zIndex: "50", width: "24%" }}>
          {this.displayOptions()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { searchResults: state.searchBar };
};

export default connect(mapStateToProps)(Suggestions);
