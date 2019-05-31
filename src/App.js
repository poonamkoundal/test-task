import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, ButtonToolbar, Button } from 'react-bootstrap';
import FormContainer from "./container/FormContainer";

function App() {
  return (
    <div className="App">
    {/* TOP SECTION */}
     <Container>
     <Row>
        <Col xs={6}>
          <h1 className="future_jobs_heading"> 
            Future Jobs
          </h1>
        </Col>
        <Col xs={6}>
        <ButtonToolbar>
            <Button variant="primary" className="future-button">1. Create your add</Button>
            <Button variant="secondary" className="future-button">2. Preview</Button>
            <Button variant="secondary" className="future-button">3. Purchase</Button>
        </ButtonToolbar>
        </Col>
      </Row>
      <Row className="second-row">
        <Col>
            <span className="step-one">STEP 1: CREATE YOUR AD</span>
        </Col>
        <div className="horizontal-line">
        </div>
      </Row>
      <Row className="second-row">
        <Col>
            <h3 className="position-txt">First, tell us about the position</h3>
        </Col>
      </Row>
      {/* FORM STARTS */}
      <Row>
      <FormContainer />
      </Row>


      </Container>

      {/* LISTING SECTION */}
      <Container>
      <Row>
        <Col xs={12}>
          <h1 className="lisiting_heading"> 
            Future Jobs
          </h1>
        </Col>
        <Col xs={12}>
          <h3 className="center-align">The best machine learning AI, and data science jobs in one place</h3>
        </Col>
        <Col xs={12}>
          <h5 className="center-align">Future jobs is the best place to find and list jobs that power future</h5>
        </Col>
        <Col xs={12} className="center-align">
          <ButtonToolbar > 
              <Button variant="primary" className="future-button">Post a job for $299</Button>
          </ButtonToolbar> 
        </Col>
        </Row>
        <Col>
            <h3 className="position-txt">SOFTWARE DEVELOPMENT JOBS</h3>
        </Col>
        <Row>

        </Row>
      </Container>
    </div>
  );
}

export default App;
