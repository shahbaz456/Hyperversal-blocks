import React, { useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";

export default function Faq() {
  const [openAccordion, setOpenAccordion] = useState(-1);

  const handleClick = (index) => {
    setOpenAccordion(openAccordion === index ? -1 : index);
  };

  return (
    <div className="App">
      <h2 className="text-orange">FAQ </h2>
      <div style={{ border: "1px solid #d5d0d0" }}>
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle
                style={{ boxShadow: "none" }}
                as={Button}
                variant="link"
                eventKey="0"
                onClick={() => handleClick(0)}
              >
                What is GetMovers?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body style={{ height: "80px", overflow: "hidden" }}>
                GetMovers is a moving company that offers a range of moving and
                storage services to customers across the UK.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle
                style={{ boxShadow: "none" }}
                as={Button}
                variant="link"
                eventKey="1"
                onClick={() => handleClick(1)}
              >
                What types of moves do you offer?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body style={{ height: "80px", overflow: "hidden" }}>
                We offer local, long distance, and international moves, as well
                as packing, unpacking, and storage services.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Card.Header>
              <Accordion.Toggle
                style={{ boxShadow: "none" }}
                as={Button}
                variant="link"
                eventKey="2"
                onClick={() => handleClick(2)}
              >
                How do I get a quote for my move?
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body style={{ height: "80px", overflow: "hidden" }}>
                You can request a quote by filling out our online form, or by
                calling us directly at 555-1234.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
}
