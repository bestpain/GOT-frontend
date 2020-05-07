import React from "react";
import KingForm from "./kingform";
import CountBattles from "./Countbattles";
import ResultList from "./Resultlist";

class Content extends React.Component {
  render() {
    return (
      <div className="columns">
        <div className="column is-3">
          <KingForm /> 
          <CountBattles />
        </div>
        <div className="column">
          <ResultList />
        </div>
      </div>
    );
  }
}

export default Content;
