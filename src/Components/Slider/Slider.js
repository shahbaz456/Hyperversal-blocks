import React from "react";
import { Container,Col,Row } from "react-bootstrap";
import p1 from "../../img/22.jpg";

const Slider = () => {
  const containerStyle = {
    backgroundColor: "#f2f2f2",
    backgroundImage: `url(${p1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "400px", // Adjust the height as needed
  };

  return (
    <div style={{
      background: 'linear-gradient(to bottom, #2a0568 45%, #8b0068 100%)',
      // other styles here
    }}>
     <Container fluid className="homepage-patter pt-5">
      <Container  className="pt-5 pb-5">
          <Row>
          <Col xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    xl={4}><h1 style={{color:"white"}}>jsadk</h1></Col>
          
          <Col xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    xl={4}> <h1 style={{color:"white"}}>jdjkshdjknjk</h1></Col>
          <Col xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    xl={4}> <h1 style={{color:"white"}}>jdjkshdjknjk</h1></Col>
          </Row>
          </Container>
        </Container>
    </div>
  );
};

export default Slider;
