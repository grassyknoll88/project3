import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";
import "./Footer.css";
import { Link } from "react-router-dom";

class FooterPage extends React.Component {
  render() {
    return (
      <Footer className="font-small">
        <Container className="text-left">
          <Row>
            <Col sm="6">
              <img
                className="footer-logo"
                src="../../assets/white_logo_transparent.png"
                alt="PupLife logo"
              />
            </Col>
            <Col sm="6" className="linkDiv">
              <ul>
                <li className="list-unstyled">
                  <a href="#!">About Us</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Contact Us</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Sign Up</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <Container fluid className="footer-text text-center">
          &copy; {new Date().getFullYear()} Copyright <p> PupLife</p>
        </Container>
      </Footer>
    );
  }
}

export default FooterPage;
