/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { NavLink } from "react-router-dom";
import about3 from "../../img/b8.png";
import about4 from "../../img/digi.jpg";
import { Container, Row, Col } from "react-bootstrap";
function BusinessProcess() {
  return (
    <div>
      <Container className="px-3">
        <img className="d-block w-100" src={about3} alt="Slider Image" />
      </Container>
      <div style={{ backgroundColor: "#f2f2f2" }}>
        <Container className="pt-5 pb-5">
          <Row>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
            >
              <h2 className="about-text" style={{ color: "#00acdd" }}>
                Business Process Outsourcing
              </h2>
              <div className="-text-container">
                <p className="text-justify">
                  Welcome to Jansons Group, your trusted partner for exceptional
                  Business Process Outsourcing (BPO) services. We understand the
                  ever-growing demand for streamlined and efficient business
                  operations, and through our website, we offer comprehensive
                  BPO solutions to meet your organization's needs.
                </p>
                <p className="text-justify">
                  At Jansons Group, we specialize in providing a wide range of
                  BPO services that allow businesses to focus on their core
                  competencies while outsourcing non-core tasks. Our team of
                  experienced professionals is dedicated to delivering
                  high-quality and cost-effective solutions that drive
                  operational efficiency and enhance overall business
                  performance.
                </p>
                <p className="text-justify">
                  By partnering with Jansons Group for your BPO needs, you can
                  benefit from our extensive industry knowledge,
                  state-of-the-art technology, and a commitment to excellence.
                  We work closely with you to understand your specific
                  requirements and tailor our services accordingly. Our team
                  follows industry best practices and stringent quality control
                  measures to ensure accurate and timely deliverables.
                </p>
                <p className="text-justify">
                  Discover the benefits of outsourcing your business processes
                  to Jansons Group by visiting our website. Let us streamline
                  your operations, increase your efficiency, and enable your
                  organization to focus on its core competencies. Experience the
                  difference of working with a reliable BPO partner committed to
                  delivering exceptional service and driving your business
                  forward.
                </p>
              </div>
            </div>
          </Row>
        </Container>
      </div>
      <div className="text-center">
        <Container className="pt-5 pb-5">
          <Container className="text-center">
            <Row>
              <Col xs={12} sm={12} md={4} lg={4} xl={3} className="mb-3">
                <div
                  className="card"
                  style={{
                    border: "none",
                    cursor: "pointer",
                    position: "relative",
                  }}
                >
                  <NavLink
                    to="https://thedigimedia.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="card-img-top"
                      style={{
                        width: "16rem",
                        height: "16rem",
                        borderRadius: "10px",
                      }}
                      src={about4}
                      alt="Description of the image"
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        margin: "0",
                        padding: "0",
                        width: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        textAlign: "center",
                      }}
                    >
                      <h3
                        style={{
                          color: "white",
                          margin: "0",
                          padding: "0",
                          fontSize: "1.9rem" /* default font size */,
                          lineHeight: "2rem" /* default line height */,
                        }}
                      >
                        DigiMedia Services
                      </h3>
                    </div>
                  </NavLink>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </div>
  );
}

export default BusinessProcess;
