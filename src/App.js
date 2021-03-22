import {Container, Row, Col, Button, Form} from "react-bootstrap";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";

const Example = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
  );
};

function App() {
  return (
    <div className="App">
      <Container >
      <br></br>
        <Row>
          <Col>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="Search Trips..." />
            </Form.Group>
          </Form>
          </Col>
          <Col className="App-header">Trip OARganizer</Col>
          <Col>
            <Button variant="outline-secondary">
              Add a Trip! +
            </Button>
          </Col>
        </Row>
        <br></br>
        <Row> {/*body*/}
          <Col> {/*col for inputs*/}
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Trip Type</Form.Label>
                  <Form.Control as="select">
                    <option>Hiking</option>
                    <option>Backpacking</option>
                    <option>Climbing</option>
                    <option>Paddling</option>
                    <option>Caving</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
              Date Picker
                <DatePicker />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Difficulty</Form.Label>
                  <Form.Control as="select">
                    <option>Beginner</option>
                    <option>Indermediate</option>
                    <option>Experienced</option>
                    <option>Professional</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>Duration Picker</Col>
            </Row>
            <Row>
              <Col>
                <Form>
                  <Form.Group>
                    <Form.Label>Driving/Travel Distance</Form.Label>
                    <Form.Control type="range" custom/>
                  </Form.Group>
                </Form>
              </Col>
              <Col>Time Picker</Col>
            </Row>
            <Row>
              <Col>
                <Form>
                  <Form.Group>
                    <Form.Label>Trip Path Distance</Form.Label>
                    <Form.Control type="range" custom/>
                  </Form.Group>
                </Form>
              </Col>
              <Col>Start Location Picker</Col>
            </Row>
            <Row>
              <Col> </Col>
              <Col>End Location Picker</Col>
            </Row>
            <Row>
              <Col>
                <Button variant="success">
                  Find me a Trip!
                </Button>
              </Col>
            </Row>
          </Col>
          <Col>
            Image of a mountain or OAR
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
