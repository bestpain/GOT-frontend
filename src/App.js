import React from "react";
import Content from "./components/Content";
import SearchBar from "./components/Searchbar";
import { BrowserRouter,Route } from "react-router-dom";
import BattleModal from './components/battleModal'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container box">
          <SearchBar />
          <br />
          <Content />
          <Route path="/battle/:id" component={BattleModal}/>

        </div>
      </BrowserRouter>
    );
  }
}
export default App;
