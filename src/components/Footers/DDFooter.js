/*eslint-disable*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import { faLink } from "@fortawesome/free-solid-svg-icons";
class DDFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
          <Container>
            <Row className=" row-grid align-items-center mb-5">
              <Col lg="6">
                <h3 className=" font-weight-light mb-2">
                  <br></br>
                  <img
                    className="footer-logo"
                    src="/static/media/argon-react-white.33081764545c13a75116.png"
                  />
                  <br />
                  Thank you for choosing DohaDialect!
                </h3>
                <h4 className=" mb-0 font-weight-light">
                  Feel free to get in touch with us on any of these platforms.
                  <br></br>
                  <br></br>
                  Because we're always here to help you fully experience the
                  culture and people of Qatar during the 2022 World Cup.
                </h4>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href="https://linkedin.com/"
                  id="tooltip829810202"
                  target="_blank"
                >
                  <FontAwesomeIcon className="icon-social" icon={faLinkedin} />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip829810202">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  href="https://twitter.com/"
                  id="tooltip475038074"
                  target="_blank"
                >
                  <FontAwesomeIcon className="icon-social" icon={faTwitter} />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip475038074">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href="https://www.facebook.com/"
                  id="tooltip837440414"
                  target="_blank"
                >
                  <FontAwesomeIcon className="icon-social" icon={faFacebook} />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Like us
                </UncontrolledTooltip>

                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="github"
                  href="https://github.com/"
                  id="tooltip495507257"
                  target="_blank"
                >
                  <FontAwesomeIcon className="icon-social" icon={faGithub} />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip495507257">
                  Star on Github
                </UncontrolledTooltip>
              </Col>
            </Row>
            <hr />
            <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  &copy;{" "}
                  <a href="https://www.linkedin.com" target="_blank">
                    ANIBA Souhail & BELHIAK Salaheddine
                  </a>
                  {" - "} IAGI 2023
                </div>
              </Col>
              <Col md="6">
                <Nav className=" nav-footer justify-content-end">
                  <NavItem>
                    <NavLink href="http://ensam-casa.ma/" target="_blank">
                      www.ensam-casa.ma
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default DDFooter;
