import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getBattleLocations } from "../redux/Actions";

class ResultList extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getBattleLocations();
  }

  renderResults = () => {
    const list = this.props.results.map((res) => {
      return (
        <tbody key={res.battle_number}>
          <tr>
            <th>{res.year}</th>
            <td>
              <Link
                to={{
                  pathname: `/battle/${res._id}`,
                  battle: res,
                }}
              >
                {res.name}
              </Link>
            </td>
            <td>{res.attacker_king}</td>
            <td>{res.defender_king}</td>
            <td>{res.attacker_outcome}</td>
          </tr>
        </tbody>
      );
    });

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>
                <abbr title="Year">Year</abbr>
              </th>
              <th>Battle Name</th>
              <th>
                <abbr title="Attacker">Attacker King</abbr>
              </th>
              <th>
                <abbr title="Defender">Defender King</abbr>
              </th>
              <th>
                <abbr title="Result">Result</abbr>
              </th>
            </tr>
          </thead>
          {list}
        </table>
      </div>
    );
  };

  renderLocations = () => {
    const locations = this.props.locations.map((loc, i) => {
      if(loc!="")
        return <li key={i} style={{width:"200px",float:"left",padding:"10px"}}>{loc}</li>;
    });
    return locations;
  };

  render() {
    const { results } = this.props;
    return (
      <div>
        {results.length ? (
          <div>
            <p className="title">Results:</p>
            {this.renderResults()}
          </div>
        ) : (
          <>
            <p
              className="subtitle"
              style={{ textAlign: "center", fontSize: "x-large" }}
            >
              Battle locations
            </p>
            <div style={{ textAlign: "center"}}>{this.renderLocations()}</div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { results: state.battles, locations: state.locations };
};

export default connect(mapStateToProps, { getBattleLocations })(ResultList);
