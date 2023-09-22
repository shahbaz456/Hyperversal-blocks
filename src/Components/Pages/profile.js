import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import shahbaz from "../../img/shahbaz.jpg";
import ammar from "../../img/ammar.jpg";
import iqra from "../../img/Iqra.jpg";
import omer from "../../img/omer.jpg";
import haseeb from "../../img/Haseeb.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Profile() {
  const profiles = [
    {
      id: 1,
      name: "SHAHBAZ KHAN",
      jobTitle: "Web Developer",

      backgroundColor: "rgba(255, 255, 255, 0.7)",
      icon: (
        <img
          src={shahbaz}
          alt="Profile"
          style={{ width: "100px", height: "100px", borderRadius: "50px" }}
        />
      ),
    },
    {
      id: 2,
      name: "HASEEB ASJAD",
      jobTitle: "Graphic Designer",

      backgroundColor: "rgba(255, 255, 255, 0.7)",
      icon: (
        <img
          src={haseeb}
          alt="Profile"
          style={{ width: "100px", height: "100px", borderRadius: "50px" }}
        />
      ),
    },
    {
      id: 3,
      name: "IQRA HASEEB",
      jobTitle: "Software Engineer",

      backgroundColor: "rgba(255, 255, 255, 0.7)",
      icon: (
        <img
          src={iqra}
          alt="Profile"
          style={{ width: "100px", height: "100px", borderRadius: "50px" }}
        />
      ),
    },
    {
      id: 4,
      name: "AMMAR",
      jobTitle: "Software Engineer",

      backgroundColor: "rgba(255, 255, 255, 0.7)",
      icon: (
        <img
          src={ammar}
          alt="Profile"
          style={{ width: "100px", height: "100px", borderRadius: "50px" }}
        />
      ),
    },
    {
      id: 5,
      name: "OMER",
      jobTitle: "Software Engineer",

      backgroundColor: "rgba(255, 255, 255, 0.7)",
      icon: (
        <img
          src={omer}
          alt="Profile"
          style={{ width: "100px", height: "100px", borderRadius: "50px" }}
        />
      ),
    },
  ];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3, // Display three cards at a time
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
const cardStyle = {
  width: "300px", // Adjust the width as needed
  // backgroundColor: profile.backgroundColor,
  borderRadius: "10px",
};
  return (
    <div id="team" style={{backgroundColor:"white"}}>
      <Carousel responsive={responsive} infinite autoPlaySpeed={1000}>
        {profiles.map((profile) => (
          <div key={profile.id}>
            <Container
              fluid
              className="pt-5 pb-5"
              style={{
                backgroundImage: profile.backgroundImage,
                backgroundSize: "100% 100%",
                height: "550px",
                width: "100% !important",
              }}
            >
              <Container className="mx-auto">
                <Row>
                  <Col
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    xl={4}
                    style={cardStyle} // Apply the cardStyle here
                    className="text-center pt-5 pb-5"
                  >
                    {profile.icon}
                    <br />
                    <br />
                    <p className="text-justify " style={{ fontWeight: "bold", color:"black" }} >
                      getmovers.co.uk is the subsidiary of Oneworld Homes
                      Limited. registered in England and Wales.
                    </p>
                    <br />
                    <p style={{ color: "black", fontSize: "30px" }}>
                      ------- <FaQuoteLeft /> -------
                    </p>

                    <br />
                    <h6 style={{ fontWeight: "bold", color:"black" }} className="text">
                      {profile.name}
                    </h6>
                    <p style={{ fontSize: "14px", color:"black" }}>{profile.jobTitle}</p>
                  </Col>
                </Row>
              </Container>
            </Container>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Profile;
