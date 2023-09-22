import React from "react";
import { Row, Col, Container } from "react-bootstrap";

import about2 from "../../img/18.jpg";
import Image from "react-bootstrap/Image";
import { FaFacebook, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

class Footer extends React.Component {
  render() {
    return (
      <div id="footer" >
        <Container fluid className="pt-5 pb-1 footer" style={{
        background: 'linear-gradient(to top, #6600cc 2%, #9900ff 64%)',
        // other styles here
      }}>
          <Container>
            <Row className="pb-1">
              <Col xs={12} sm={12} md={4} lg={4} xl={3}>
                {/* First Image */}
                <div>
                  <Image src={about2} width="100px" />
                  <p className="text-justify text-f5f5f5">
                    getmovers.co.uk is the subsidry of Oneworld Homes Limited.
                    regsiered in England and Wales.
                  </p>
                </div>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4} xl={3}>
                <h4 className="text-orange">About Us</h4>
                <p className="text-justify text-f5f5f5">
                  getmovers.co.uk is the subsidry of Oneworld Homes Limited.
                  regsiered in England and Wales.
                </p>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4} xl={3}>
                <h4 className="text-orange">Locate Us</h4>
                <p className="text-f5f5f5">
                  152-160. City Road, London ,EC1V 2NX ,United Kingdom
                </p>
                <p className="text-f5f5f5">
                  <span className="text-orange">Email:</span>{" "}
                  info@getmovers.co.uk
                </p>
                <p className="text-f5f5f5">
                  <span className="text-orange"> Tel:</span> 0800 6358888
                </p>
              </Col>
              <Col xs={12} sm={12} md={4} lg={4} xl={3}>
                <h4 className="text-orange">Quick Links</h4>
               
              </Col>
            </Row>
          </Container>
          <footer
            class="bg-grey text-center  text-lg-start"
            style={{
              display: "flex",
              borderTop: "1px solid rgba(255, 255, 255, 0.25)",
              justifyContent: "space-around",
            }}
          >
            <Container>
              <p
                style={{ fontSize: "12px" }}
                className="text-#808080 text-center "
              >
                Copyright &copy; 2023 Hyperversal Blocks. All Rights Reserved.
              </p>
            
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span className=" contact-us-social-icons pointer">
                <a
                  href="https://www.facebook.com/profile.php?id=100090028214453"
                  target="_blank"
                >
                  <FaFacebook
                    style={{
                      color: "white",
                      margin: "4px",
                      fontSize: "30px",
                    }}
                  />
                </a>
                <a href="https://twitter.com/Get_Mover" target="_blank">
                  <AiFillTwitterCircle
                    style={{
                      color: "white",
                      margin: "4px",
                      fontSize: "30px",
                    }}
                  />
                </a>
                <a href="https://www.instagram.com/get_movers/" target="_blank">
                  <FaInstagramSquare
                    style={{
                      color: "white",
                      margin: "4px",
                      fontSize: "30px",
                    }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/get-movers-84a373265/"
                  target="_blank"
                >
                  <FaLinkedin
                    style={{
                      color: "white",
                      margin: "4px",
                      fontSize: "30px",
                    }}
                  />
                </a>
              </span>
            </div>
            </Container>
          </footer>
        </Container>
      </div>
    );
  }
}

export default Footer;
