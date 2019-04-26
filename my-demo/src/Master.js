import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col, Card, CardBody, FormGroup, Input, Label } from "reactstrap";

function Master() {
  return (
      <Container className="App">
        <Row className="justify-content-center">
            <Col xl="10" lg="12" md="9">
            <Card className="card o-hidden border-0 shadow-lg my-5">
                <CardBody className="p-0">
                 {/* Nested Row within Card Body  */}
                    <Row>
                        <Col lg="6" className="d-none d-lg-block bg-login-image"></Col>
                        <Col lg="6">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Please login</h1>
                                </div>
                                <form className="user">
                                    <FormGroup>
                                        <Input type="email" className="form-control form-control-user" id="userInputEmail" placeholder="Enter Email Address..."/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="password" className="form-control form-control-user" id="userInputPassword" placeholder="Password"/>
                                    </FormGroup>

                                    <FormGroup>
                                        <div className="custom-control custom-checkbox small">
                                            <Input type="checkbox" className="custom-control-input" id="customCheck" />
                                            <Label className="custom-control-label" for="customCheck">Remember me</Label>
                                         </div>
                                    </FormGroup>
                                    <a href="#" className="btn btn-primary btn-user btn-block">
                                        Login
                                    </a>
                                    <hr/>
                                    <a href="#" className="btn btn-google btn-user btn-block">
                                        <i className="fab fa-google fa-fw"></i> Login with Google
                                    </a>
                                    <a href="#" className="btn btn-facebook btn-user btn-block">
                                        <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                    </a>
                                    {/* <a href="#" className="btn btn-microsoft btn-user btn-block">
                                        <i className="fab fa-microsoft-f fa-fw"></i> Login with Microsoft
                                    </a> */}
                                </form>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
            </Col>
        </Row>
      </Container>
  );
}

export default Master;
