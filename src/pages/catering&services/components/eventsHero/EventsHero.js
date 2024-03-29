import React from 'react';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import './eventsHero.css';

export default function EventsHero() {
  return (
    <Container fluid className="eventsHeroFluid">
        <Container className="eventsHeroWrapper">
          <div className="eventsHeroText">
            <h5>
              For All Your <br></br> Business and Special <br></br> Event Catering Needs
            </h5>
            <p>
              Mouth-watering dishes for your celebrations
            </p>

            <div className="col-sm-4 callBackForm">
              <InputGroup className="mb-3">
                <Form.Control placeholder="First Name" />
                <Form.Control placeholder="Last Name" />
              </InputGroup>

              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Your Contact"
                />
                <Button className="callbackButton" id="callback">Let us call you</Button>
              </InputGroup>
            </div>
          </div>

         
        </Container>
    </Container>
  )
}
