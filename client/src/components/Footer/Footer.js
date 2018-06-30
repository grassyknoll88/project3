import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";
import "./Footer.css";

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
