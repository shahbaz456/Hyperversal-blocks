/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Container, Row } from "react-bootstrap";
import about3 from "../../img/carr.jpg";
function Carrer() {
  return (
    <div>
      <Container className="px-3">
        <img className="d-block w-100" src={about3} alt="Slider Image" />
      </Container>
      <Container className="pt-5 ">
        <Row>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
          >
            <h2 className="about-text" style={{ color: "#00acdd" }}>
              Careers
            </h2>
            <div className="-text-container">
              <p className="text-justify">
              At Jansons Group, we believe that our success is driven by the talented individuals who form our team. As a diverse and dynamic company, we value the skills, expertise, and passion of our employees. Through our website, we offer exciting career opportunities for individuals looking to join a forward-thinking organization and make a meaningful impact.
              </p>
              <p className="text-justify" >In Jansons Group, you will feel :</p>
              <h6 className="text-justify" style={{ color: "#00acdd"  }}>Empowered</h6>
              <h6 className="text-justify" style={{ color: "#00acdd"  }}>Recognized</h6>
              <h6 className="text-justify" style={{ color: "#00acdd"  }}>Valued</h6>
              <h6 className="text-justify" style={{ color: "#00acdd"  }}>Part of the family</h6>
              <p className="text-justify">
                To join our family, you can check our vacancies or email your
                resume at the following email addresses -
               <span style={{ color: "#00acdd" ,fontWeight:"bold" }}>  @jansonsgroup.co.uk</span>
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Carrer;
