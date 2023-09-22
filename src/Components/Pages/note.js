import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import LatestNews from "./latest";


const Notes = () => {
 
  return (
    <div style={{backgroundColor:"white"}}>
     <Container fluid className="homepage-patter pt-5">
      <Container>
          <Row>
          <Col xs={12} sm={12} md={4} lg={4} xl={6}><LatestNews/></Col>
          
          <Col xs={12} sm={12} md={4} lg={4} xl={6}> <LatestNews/></Col>
         
          </Row>
          </Container>
        </Container>
    </div>
  );
};

export default Notes;
