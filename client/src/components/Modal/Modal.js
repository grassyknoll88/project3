import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions"
import classnames from "classnames";

import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-responsive-modal";
import { Container, Row, Col, Input, Button } from "mdbreact";
import "./Modal.css";
//import { Redirect } from "react-router-dom";

class ModalComponent extends React.Component {
  state = {
    open: false,
    username: "",
    password: "",
    
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    console.log("name = ", name);
    console.log("value = ", value);

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  componentWillReceiveProps(nextProps){
    if(nextProps.auth.isAuthenticated){
      this.props.history.push("/profile")
    }

    if(nextProps.errors) {
      this.setState({errors: nextProps.errors})
    }
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };
  handleLoginSubmit = ()=>{
    let userData = {
      username: this.state.username,
      password: this.state.password,
    }
    this.props.loginUser(userData)
  }

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
         /
          <form className="form">
            <input
              className="usernameInput"
              id="username"
              value={this.state.username}
              name="username"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Username"
            />
            <br />
            <input
              className="passwordInput"
              id="password"
              value={this.state.password}
              name="password"
              onChange={this.handleInputChange}
              type="password"
              placeholder="Password"
            />
            <br />
            <button
              className="submitButton hvr-grow"
              onClick={this.handleLoginSubmit}
            >
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

Modal.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors

})

export default connect(mapStateToProps, { loginUser})(ModalComponent);

// ReactDOM.render(<ModalCompgonent />, document.getElementById("app"));
