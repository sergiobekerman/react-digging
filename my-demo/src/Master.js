import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col, Card, CardBody, FormGroup, Input, Label } from "reactstrap";
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login';

class Master extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const responseFacebook = (response) => {
            console.log(response);
          }
      
          const responseGoogle = (response) => {
            console.log(response);
      }
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
                                                <Input type="email" className="form-control form-control-user" id="userInputEmail" placeholder={this.props.hola}/>
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
                                            <GoogleLogin
                                                clientId="951119167308-4qpe0qej700h37spb601qgscaebiukau.apps.googleusercontent.com"
                                                buttonText="Login with Google"
                                                onSuccess={responseGoogle}
                                                onFailure={responseGoogle}
                                                render={renderProps => (
                                                    <button className="btn btn-google btn-user btn-block" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                                        <i className="fab fa-google fa-fw"></i> Login with Google
                                                    </button>
                                                  )}
                                            />
                                            {/* <button className="btn btn-google btn-user btn-block">
                                                <i className="fab fa-google fa-fw"></i> Login with Google
                                            </button> */}
                                            <FacebookLogin
                                                    appId="658424484618455"
                                                    fields="name,email,picture"
                                                    className="btn btn-facebook btn-user btn-block"
                                                    callback={responseFacebook}
                                                    cssClass="btn btn-facebook btn-user btn-block"
                                                    icon="fab fa-facebook-f fa-fw"
                                            />
                                            {/* <a href="#" className="btn btn-facebook btn-user btn-block">
                                                <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                            </a> */}
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
}
export default Master;
