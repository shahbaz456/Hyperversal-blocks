import React from "react";
import { Container, Row, Col,Carousel} from "react-bootstrap";


function LatestNews() {
  const newsItems = [
    {
      title: "NEWS ",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
     
    },
    {
      title: "NEWS",
      text:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
     
    },
    {
      title: "NEWS ",
      text:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
      
    },
  ];
  return (
    <div>
    <Container>
      <Row>
        <h2 className="text-orange">LATEST NEWS</h2>
        <Carousel>
          {newsItems.map((item, index) => (
            <Carousel.Item key={index}>
              <div
                style={{ display: "flex", border: "1px solid #d5d0d0" }}
              >
                
                <Col xs={12} sm={12} md={4} lg={4} xl={6} className="pt-4">
                  <h4 className="text-orange">{item.title}</h4>
                  <br />
                  <p
                    className="text-justify text-f5f5f5"
                    style={{ color: "#808080" }}
                  >
                    {item.text}
                  </p>
                  <a href="#" className="btn " style={{color :"#00acdd"}}>Read More</a>
                </Col>
              </div>
              
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
    </Container>
  </div>
  );
}

export default LatestNews;
