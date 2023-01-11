import { Col, Row, Button } from "reactstrap";
const img = require("assets/img/theme/mascot.png");

const Main = () => {
  return (
    <>
      <div className="main-container">
        <Row>
          <Col className="col-lg-7 col-sm-12 main-box ">
            <div className="col-9">
              <h1 className="Title">DOHA DIALECT </h1>
              <p className="detailtext">
                Experience the timeless beauty and rich culture of the
                Arabosphere with our expert Arabic translation services.
              </p>
              <div className="d-flex justify-content-center align-items-center">
                <Button
                  className="translate-button"
                  type="button"
                  value="Translate"
                >
                  <i className="fa-solid fa-arrow-down-long"></i>
                  Translate
                </Button>
              </div>
            </div>
          </Col>
          <Col className="d-none d-lg-flex col-lg-5  small-box">
            <img className="mascot-image" src={img} alt="mascot" />
          </Col>
        </Row>
      </div>
      ;
    </>
  );
};
export default Main;
