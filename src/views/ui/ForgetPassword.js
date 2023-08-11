import { Row, Col, Table, Card, CardTitle, CardBody, Button, Form ,FormGroup ,Label ,Input ,FormText, Nav, NavItem } from "reactstrap";
import '../../assets/css/header.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { contentArea } from "../../Constants";

const ForgetPassword = () => {
 return (
    <Row>
      <Col>
       
        <Card >
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Reset Password
          </CardTitle>
          <CardBody>
            <Row className="mt-3">
              <Col sm="12" md={{offset: 2,size: 8}}>
                <div className={contentArea}>
                  <div className='gridmargin'>
                    <Form >
                    <FormGroup>
                        <Label for="examplePassword">User Name</Label>
                        <div className="input-group input-group">
                          <span className="input-group-text" style={{color:'#fd5c63'}} id="basic-addon1"><FaUser></FaUser></span>
                          <input  name="username" placeholder="Enter Your User Name" className="form-control" aria-label="Password" aria-describedby="basic-addon1" />
                        </div>
                        <small id="passwordHelp" className="text-danger"></small>
                      </FormGroup>
                      <FormGroup>
                        <Label for="examplePassword">Phone Number</Label>
                        <div className="input-group input-group">
                          <span className="input-group-text" style={{color:'#fd5c63'}} id="basic-addon1"><FaPhoneAlt></FaPhoneAlt></span>
                          <input name="phoneno" placeholder="Enter Your Phone Number" type="number" className="form-control" aria-label="Password" aria-describedby="basic-addon1" />
                        </div>
                        <small id="passwordHelp" className="text-danger"></small>
                      </FormGroup>
                      <div className="button-group">
                        <Button color="danger" className="btn" type="submit">Send OTP</Button>
                    </div>
                    </Form>
                  </div>
                </div>
                 <div className="button-group  mt-4">
                    Not Registered?
                  <Link to="/about" className="btn rowlink">
                    Register here
                  </Link>
                </div>
             </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ForgetPassword;
