import React from "react";
import { Redirect } from "react-router-dom";

class BattleModal extends React.Component {
  constructor() {
    super();
    this.state = {
      RedirectToHomePage: false,
    };
  }

  closeModal = () => {
    this.setState({ RedirectToHomePage: true });
  };

  render() {
    const { battle } = this.props.location;
    if (this.state.RedirectToHomePage) return <Redirect to="/" />;
    return (
      <div className="modal" style={{ display: "block", paddingTop: "60px",zIndex:"99" }}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">
              {battle.name}({battle.year})
            </p>
            <button
              onClick={this.closeModal}
              className="delete"
              aria-label="close"
            ></button>
          </header>

          <section className="modal-card-body">
            <table className="table">
              <thead>
                <tr>
                  <th>
                    <abbr title="Attacker">Attacker King</abbr>
                  </th>
                  <td>{battle.attacker_king}</td>
                </tr>
                <tr>
                  <th>
                    <abbr>Defender King</abbr>
                  </th>
                  <td>{battle.defender_king}</td>
                </tr>
                <tr>
                  <th>
                    <abbr>Result</abbr>
                  </th>
                  <td>{battle.attacker_outcome}</td>
                </tr>
                <tr>
                  <th>Attackers</th>
                  <td>{battle.attacker_1}</td>
                </tr>
                <tr>
                  <th>Defenders</th>
                  <td>{battle.defender_1}</td>
                </tr>
                <tr>
                  <th>Attackers Size</th>
                  <td>{battle.attacker_size}</td>
                </tr>
                <tr>
                  <th>Defenders Size</th>
                  <td>{battle.defender_size}</td>
                </tr>
                <tr>
                  <th>Attackers Commander</th>
                  <td>{battle.attacker_commander}</td>
                </tr>
                <tr>
                  <th>Defenders Commander</th>
                  <td>{battle.defender_commander}</td>
                </tr>
                <tr>
                  <th>Location</th>
                  <td>{battle.location}</td>
                </tr>
                <tr>
                  <th>Region</th>
                  <td>{battle.region}</td>
                </tr>
              </thead>
            </table>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-success" onClick={this.closeModal}>Close</button>
          </footer>
        </div>
      </div>
    );
  }
}

export default BattleModal;
