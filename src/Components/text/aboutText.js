import React from "react";
import { Container, Row } from "react-bootstrap";
function AboutText() {
  return (
    <div>
      <Container className="pt-5 ">
        <Row>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
          >
            <h2 className="about-text" style={{ color: "#00acdd" }}>
              Welcome To{" "}
              <span style={{ fontWeight: "bold", color: "#00acdd" }}>
                Jansons Group
              </span>
            </h2>
            <div className="-text-container">
              <p className="text-justify">
                Welcome to Jansons Group, your premier destination for a wide
                range of businesses and services. We are a dynamic and
                diversified company that deals with various industries, catering
                to the diverse needs of our clients. Through our website,
                Jansons Group offers exceptional solutions and services across
                multiple sectors.
              </p>

              <p className="text-justify">
                At Jansons Group, we pride ourselves on our commitment to
                excellence, integrity, and customer satisfaction. With a team of
                experienced professionals and strategic partnerships, we provide
                top-notch services that meet and exceed industry standards. Our
                dedication to delivering exceptional quality and value sets us
                apart from the competition.
              </p>
            </div>
          </div>
        </Row>
        <Container
          style={{ backgroundColor: "#f2f2f2", borderLeft: "2px solid red" }}
          className="pt-4 pb-4 px-5"
        >
          <Row>
            <p style={{ color: "#00acdd"  }}>
              “A true leader has the confidence to stand alone, the courage to
              make tough decisions, and the compassion to listen to the needs of
              others. He does not set out to be a leader, but becomes one by the
              equality of his actions and the integrity of his intent.”
            </p>
          </Row>
        </Container>
        <Container className="pt-3">
          <Row>
            <p className="text-justify">
              Our core values of transparency, professionalism, and
              customer-centricity guide everything we do. We believe in
              fostering long-term partnerships with our clients, built on trust,
              mutual growth, and shared success. With Jansons Group, you can be
              confident that your business is in the hands of professionals who
              are passionate about delivering exceptional results.
            </p>
            <p className="text-justify">
              Explore our website to learn more about Jansons Group, our
              services, and the industries we cater to. We invite you to
              experience the difference of working with a company that values
              your needs and strives for excellence in all aspects of business.
              Contact us today to discuss your requirements and let us be your
              trusted partner in achieving your business objectives.
            </p>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default AboutText;
