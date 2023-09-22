/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../../img/building.jpg";
import img2 from "../../img/tour.jpg";
import img3 from "../../img/legal.jpg";
import img4 from "../../img/tipp.png";
import img5 from "../../img/social.jpg";
import img7 from "../../img/overseas.jpg";
import "./Cards.css";

function Cards() {
  return (
    <div style={{backgroundColor:"grey"}}>
      <Container
        
        style={{
          color: "#00acdd",
          display: "flex",
          
          justifyContent: "center",
          alignItems: "center",
        }}
      ></Container>
      <div className="text-center">
        <Container className="pt-5 pb-5">
          <Container className="text-center">
            <Row>
              <Col xs={12} sm={12} md={4} lg={4} xl={2} className="mb-3">
                <div
                  className="card"
                  style={{
                    border: "none",
                    cursor: "pointer",
                    position: "relative",
                  }}
                >
                  <Link to="/property-development">
                    <img
                      className="card-img-top"
                      style={{
                        width: "10rem",
                        height: "10rem",
                        borderRadius: "10px",
                      }}
                      src={img1}
                      alt="Description of the image"
                    />
                  </Link>
                </div>
              </Col>

              <Col xs={12} sm={12} md={4} lg={4} xl={2} className="mb-3">
                <div
                  className="card"
                  style={{
                    border: "none",
                    cursor: "pointer",
                    position: "relative",
                  }}
                >
                  <Link to="/travel-and-tourism">
                    <img
                      className="card-img-top"
                      style={{
                        width: "10rem",
                        height: "10rem",
                        borderRadius: "10px",
                      }}
                      src={img2}
                      alt="Description of the image"
                    />
                  </Link>
                </div>
              </Col>

              <Col xs={12} sm={12} md={4} lg={4} xl={2} className="mb-3">
                <div
                  className="card"
                  style={{
                    border: "none",
                    cursor: "pointer",
                    position: "relative",
                  }}
                >
                  <Link to="/legal-consultancy">
                    <img
                      className="card-img-top"
                      style={{
                        width: "10rem",
                        height: "10rem",
                        borderRadius: "10px",
                      }}
                      src={img3}
                      alt="Description of the image"
                    />
                  </Link>
                </div>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4} xl={2} className="mb-3">
                <div
                  className="card"
                  style={{
                    border: "none",
                    cursor: "pointer",
                    position: "relative",
                  }}
                >
                  <Link to="/removal">
                    <img
                      className="card-img-top"
                      style={{
                        width: "10rem",
                        height: "10rem",
                        borderRadius: "10px",
                      }}
                      src={img4}
                      alt="Description of the image"
                    />
                  </Link>
                </div>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4} xl={2} className="mb-3">
                <div
                  className="card"
                  style={{
                    border: "none",
                    cursor: "pointer",
                    position: "relative",
                  }}
                >
                  <Link to="/digital-media">
                    <img
                      className="card-img-top"
                      style={{
                        width: "10rem",
                        height: "10rem",
                        borderRadius: "10px",
                      }}
                      src={img5}
                      alt="Description of the image"
                    />
                  </Link>
                </div>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4} xl={2} className="mb-3">
                <div
                  className="card"
                  style={{
                    border: "none",
                    cursor: "pointer",
                    position: "relative",
                  }}
                >
                  <Link to="/legal-foundation-for-overseas-pakistani">
                    <img
                      className="card-img-top"
                      style={{
                        width: "10rem",
                        height: "10rem",
                        borderRadius: "10px",
                      }}
                      src={img7}
                      alt="Description of the image"
                    />
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </div>
  );
}

export default Cards;
