import { Row, Col, Table, Card, CardTitle, CardBody, Button, Form ,FormGroup ,Label ,Input ,FormText, Nav, NavItem } from "reactstrap";
import '../../assets/css/header.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { contentArea } from "../../Constants";

const ChangePassword = () => {
 return (
    <Row>
      <Col>
       
        <Card >
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Change Password
          </CardTitle>
          <CardBody>
            <Row className="mt-3">
              <Col sm="12" md={{offset: 2,size: 8}}>
                <div className={contentArea}>
                  <div className='gridmargin'>
                    <Form >
                    <FormGroup>
                        <Label for="examplePassword">Current Password</Label>
                        <div className="input-group input-group">
                          <span className="input-group-text" style={{color:'#fd5c63'}} id="basic-addon1"><FaLock></FaLock></span>
                          <input  name="currentpassword" placeholder="Current Password" type="password" className="form-control" aria-label="Password" aria-describedby="basic-addon1" />
                        </div>
                        <small id="passwordHelp" className="text-danger"></small>
                      </FormGroup>
                      <FormGroup>
                        <Label for="examplePassword">New Password</Label>
                        <div className="input-group input-group">
                          <span className="input-group-text" style={{color:'#fd5c63'}} id="basic-addon1"><FaLock></FaLock></span>
                          <input name="npassword" placeholder="New Password" type="password" className="form-control" aria-label="Password" aria-describedby="basic-addon1" />
                        </div>
                        <small id="passwordHelp" className="text-danger"></small>
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleConfirmPassword">Confirm Password</Label>
                        <div className="input-group input-group">
                          <span className="input-group-text" style={{color:'#fd5c63'}} id="basic-addon1"><FaLock></FaLock></span>
                          <input  name="cpassword" placeholder="Confirm Password" type="password" className="form-control" aria-label="cpassword" aria-describedby="basic-addon1" />
                        </div>
                        <small id="passwordHelp" className="text-danger"></small>
                      </FormGroup>
                     <div className="button-group">
                        <Button color="danger" className="btn" type="Update">Save</Button>
                        <Button color="warning" type="submit"  className="text-black">Cancle</Button>
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

export default ChangePassword;
