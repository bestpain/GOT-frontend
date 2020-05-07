import React from "react";
import { connect } from "react-redux";
import { getDetailsByKing, clearError } from "../redux/Actions";

class KingForm extends React.Component {
  constructor() {
    super();
    this.state = {
      kingName: "",
      location: "",
      type: "",
      error: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { kingName, location, type } = this.state;
    if (kingName) {
      const king = {
        kingName,
        location,
        type,
      };
      this.props.getDetailsByKing(king);
    } else {
      this.setState({ error: true });
    }
  };

  handleChange = (name) => (event) => {
    this.setState({ error: "" });
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { kingName, location, type, error } = this.state;
    return (
      <div className="card">
        <header className="card-header" style={{ justifyContent: "center" }}>
          <p
            className="title is-4"
            style={{ color: "hsl(217, 71%, 53%)", textDecoration: "underline" }}
          >
            Search By King Name
          </p>
        </header>
        <form onSubmit={this.handleSubmit}>
          <div className="card-content">
            <div className="content">
              <div className="field">
                <label className="label">King Name</label>
                <div className="control">
                  <input
                    className="input is-small is-rounded"
                    type="text"
                    placeholder="Enter king Name"
                    value={kingName}
                    onChange={this.handleChange("kingName")}
                  />
                </div>
              </div>
              {this.props.error && (
                <p
                  className="help is-danger"
                  style={{ justifyContent: "center" }}
                >
                  King Name is Not Valid
                </p>
              )}
              <div className="field">
                <label className="label">Location</label>

                <div className="control">
                  <input
                    className="input is-small is-rounded"
                    type="text"
                    placeholder="Enter Location"
                    value={location}
                    onChange={this.handleChange("location")}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Battle Type</label>

                <div className="control">
                  <input
                    className="input is-small is-rounded"
                    type="text"
                    placeholder="Battle type"
                    value={type}
                    onChange={this.handleChange("type")}
                  />
                </div>
              </div>
              {error && (
                <p className="help is-danger">King Name field is empty</p>
              )}
            </div>

            <div
              className="buttons are-small"
              style={{ justifyContent: "center" }}
            >
              <button className="button is-link">Search</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { error: state.error };
};

export default connect(mapStateToProps, { getDetailsByKing, clearError })(KingForm);
