import { Row, Col, Table, Card, CardTitle, CardBody, Button, Form ,FormGroup ,Label ,Input ,FormText, Nav, NavItem } from "reactstrap";
import '../../assets/css/header.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import {  FaPhoneAlt } from "react-icons/fa";
import { contentArea } from "../../Constants";

const UpdateMobile = () => {
 return (
    <Row>
      <Col>
       
        <Card >
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Update Mobile Number
          </CardTitle>
          <CardBody>
            <Row className="mt-3">
              <Col sm="12" md={{offset: 2,size: 8}}>
                <div className={contentArea}>
                  <div className='gridmargin'>
                    <Form >
                      <FormGroup>
                        <Label for="examplePassword">New Mobile No.</Label>
                        <div className="input-group input-group">
                          <span className="input-group-text" style={{color:'#fd5c63'}} id="basic-addon1"><FaPhoneAlt></FaPhoneAlt></span>
                          <input name="phoneno" placeholder="New Mobile No." type="number" className="form-control" aria-label="Password" aria-describedby="basic-addon1" />
                        </div>
                        <small id="passwordHelp" className="text-danger"></small>
                      </FormGroup>
                      <div className="button-group">
                        <Button color="danger" className="btn" type="submit">Send OTP</Button>
                    </div>
                    </Form>
                  </div>
                </div>
             </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default UpdateMobile;