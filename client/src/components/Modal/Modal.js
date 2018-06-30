import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-responsive-modal";
import { Container, Row, Col, Input, Button } from "mdbreact";
import "./Modal.css";

export default class ModalComponent extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <button id="joinUs" className="btn hvr-grow" onClick={this.onOpenModal}>
          JOIN US
        </button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <form className="form">
            <input
              className="usernameInput"
              value={this.state.username}
              name="username"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Username"
            />
            <br />
            <input
              className="passwordInput"
              value={this.state.password}
              name="password"
              onChange={this.handleInputChange}
              type="password"
              placeholder="Password"
            />
            <br />
            <button className="submitButton" onClick={this.handleFormSubmit}>
              Submit
            </button>
            <h1>
              Don't have an account yet?{" "}
              <a href="/signup" target="blank">
                Sign Up
              </a>
            </h1>
          </form>
        </Modal>
      </div>
    );
  }
}

// ReactDOM.render(<ModalCompgonent />, document.getElementById("app"));
