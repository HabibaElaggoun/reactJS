import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Form } from 'react-bootstrap';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Form>
        <h1>FORM...</h1>
        <br/>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address:</Form.Label>
    <br/>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
    <br/>
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password:</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <br/>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <br/>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
  );
}

export default App;
