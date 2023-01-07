/*!

=========================================================
* Argon Design System React - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// nodejs library that concatenates classes
import classnames from "classnames";
// import carousel
// import Carousel from "./IndexSections/Carousel.js";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";
import {
  Badge,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Carousel
} from "reactstrap";

// core components
import DDNavbar from "components/Navbars/DDNavbar.js";

// index page sections
import Download from "../IndexSections/Download.js";

// footer component
// import DDFooter from "components/Footers/DDFooter.js";


// rawaj 
const items = [
    {
      src: require("assets/img/theme/pic1.jpg"),
      altText: "",
      caption: "",
      header: ""
    },
    {
      src: require("assets/img/theme/pic3.png"),
      altText: "",
      caption: "",
      header: ""
    }
  ];



class DDLanding extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DDNavbar />
        
        <main ref="main" background-image="">
        
          <div className="position-relative">
            
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                
              </div>
              
              <Container className="py-lg-md d-flex">
                <div className="col px-0" >
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        <br></br>
                        <span>Connecting the world through the beauty of <b>Doha Dialect.</b></span>
                      </h1>
                      <p className="lead text-white">
                      Experience the timeless beauty and rich culture of the Arabosphere with our expert Arabic translation services. Let us connect you to the vibrant world of Arabic language and bring you closer to the people and places that make it so special.
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          href="#"
                        >  
                        <span className="btn-inner--text">Get started</span>
                        </Button>
                        
                      </div>
                    </Col>
                    
                    <Col className="mb-lg-auto" lg="6">
                        <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                        <UncontrolledCarousel items={items} />
                        </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
        
         
          
          

          <section className="section section-shaped">
          <div className="shape shape-style-1 shape-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container className="py-md">
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  Bootstrap carousel
                </h1>
                <p className="lead text-white mt-4">
                  Argon Design System comes with four pre-built pages to help
                  you get started faster. You can change the text and images and
                  you're good to go.
                </p>
                <Button
                  className="btn-white mt-4"
                  color="default"
                  href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                >
                  See all components
                </Button>
              </Col>
              <Col className="mb-lg-auto" lg="6">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                  <UncontrolledCarousel items={items} />
                </div>
              </Col>
            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
          
        </main>
        
      </>
    );
  }
}

export default DDLanding;
