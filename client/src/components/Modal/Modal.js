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
        <button className="logInBtn" onClick={this.onOpenModal}>
          LOG IN
        </button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <Container>
            <Row>
              <Col md="6">
                <form>
                  <p className="h3 text-center mb-4">Sign in</p>
                  <div className="grey-text">
                    <Input
                      label="Type your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <Input
                      label="Type your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                  </div>
                  <div className="text-center">
                    <Button className="modalLoginBtn">Login</Button>
                  </div>
                </form>
              </Col>
            </Row>
          </Container>
          );
        </Modal>
      </div>
    );
  }
}

// ReactDOM.render(<ModalCompgonent />, document.getElementById("app"));
