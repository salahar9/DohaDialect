

import React from "react";

// reactstrap components
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";

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

class Carousel_landing extends React.Component {
  render() {
    return (
      <>
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
                      <span>Connecting the world through the beauty of <b><b>Doha Dialect.</b></b></span>
                    </h1>
                    <p className="lead text-white">
                    Experience the timeless beauty and rich culture of the Arabosphere 
                    with our expert Arabic translation services. Let us connect you to 
                    the vibrant world of Arabic language and bring you closer to the 
                    people and places that make it so special.
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
        
      </main>
      </>
    );
  }
}

export default Carousel_landing;
