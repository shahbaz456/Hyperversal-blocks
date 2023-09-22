/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagramSquare,
  FaFax,
} from "react-icons/fa";
import {
  AiFillTwitterCircle,
  AiOutlineHome,
  AiOutlineMail,
} from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
function Contact() {
  return (
    <div id="contact-us"  className="pt-5 " style={{ backgroundColor: "white" }}>
      {" "}
      <Container className="pt-1 pb-5 mt-1">
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <h2  className="text-center">Contact Us</h2>
            <h5 className="text-center">
              Interested? We'd love to hear from you; get in touch now at…
            </h5>
          </Col>
          <Col
            data-aos="fade-up"
            data-aos-duration="3000"
            className="pt-5"
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
          >
            <h5 className="text-orange">Feel Free to Contact Us</h5>
            <h6>
              <span className="text-blue contact-us-social-icons">
                <AiOutlineHome />
                Kemp House 152-160. City Road London, EC1V 2NX, United Kingdom
              </span>
            </h6>
            <h6>
              <span className="text-blue contact-us-social-icons">
                <AiOutlineMail />
                info@getmovers.co.uk
              </span>
            </h6>
            <h6>
              <span className="text-blue contact-us-social-icons">
                <FiPhone />
                0800 6358888
              </span>
            </h6>
            <h6>
              <span className="text-blue contact-us-social-icons">
                <FaFax />
                0800 6358889
              </span>
            </h6>
            <h5 className="text-orange mt-2">Reach out at:</h5>
            <p>
              <span className="text-blue contact-us-social-icons pointer">
                <a
                  href="https://www.facebook.com/profile.php?id=100090028214453"
                  target="_blank"
                >
                  <FaFacebook
                    style={{
                      color: "#00acdd",
                      margin: "5px",
                      fontSize: "24px",
                    }}
                  />
                </a>
                <a href="https://twitter.com/Get_Mover" target="_blank">
                  <AiFillTwitterCircle
                    style={{
                      color: "#00acdd",
                      margin: "5px",
                      fontSize: "24px",
                    }}
                  />
                </a>
                <a href="https://www.instagram.com/get_movers/" target="_blank">
                  <FaInstagramSquare
                    style={{
                      color: "#00acdd",
                      margin: "5px",
                      fontSize: "24px",
                    }}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/get-movers-84a373265/"
                  target="_blank"
                >
                  <FaLinkedin
                    style={{
                      color: "#00acdd",
                      margin: "5px",
                      fontSize: "24px",
                    }}
                  />
                </a>
              </span>
            </p>
          </Col>
          <Col
            data-aos="fade-up"
            data-aos-duration="3000"
            className="pt-5"
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            // eslint-disable-next-line react/jsx-no-comment-textnodes
          >
            <iframe
              src="https://maps.google.com/maps?q=152-160. City Road London, EC1V 2NX, United Kingdom&t=&z=6&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="250"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
