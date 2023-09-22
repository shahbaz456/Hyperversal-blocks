/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import AboutText from "../text/aboutText";
import about from "../../img/b1.png"
import { Container ,Row} from "react-bootstrap";

function AboutUs() {
  return (
    <div id="about-the-group"  className="pt-5" style={{ backgroundColor: "#f2f2f2" }}>
    <Container className="pt-5 pb-5">
      <Row>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
        >
          <h2
            className="text-orange"
            style={{
              display: "flex",
              color: "#00acdd",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Welcome To{"\u00A0"}
            <span style={{ fontWeight: "bold", color: "#00acdd" }}>
              {" "}
              Jansons Group
            </span>
          </h2>

          <div className="-text-container">
            
            <p className="text-justify">
              Welcome to Jansons Group, your premier destination for a wide
              range of businesses and services. As a dynamic and diversified
              company, we specialize in various industries to cater to the
              diverse needs of our clients. Through our website, Jansons Group
              offers exceptional projects and services in the areas of
              property, travel and tourism, legal consultancy, and removals.
            </p>
            
            <p className="text-justify">
              At Jansons Group, we are committed to excellence in every
              project we undertake. Our dedication to customer satisfaction,
              attention to detail, and professional expertise set us apart.
              Whether you are seeking properties, travel services, legal
              advice, or removals, Jansons Group is your trusted partner.
              Explore our website to discover the range of services we offer
              and experience the difference of working with a company that
              values your needs and strives for excellence in all aspects of
              business.
            </p>
          </div>
        </div>
      </Row>
    </Container>
  </div>
  );
}

export default AboutUs;
