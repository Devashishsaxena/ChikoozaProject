import { Row, Col, Table, Card, CardTitle, CardBody, Button, Form ,FormGroup ,Label ,Input ,FormText, Nav, NavItem } from "reactstrap";
import '../../assets/css/header.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import { contentArea } from "../../Constants";

const Profile = () => {
 return (
    <Row>
      <Col>
       <Card >
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            User Profile
          </CardTitle>
          <CardBody>
            <Row className="mt-3">
              <Col sm="12" md={{offset: 2,size: 8}}>
                <div className={contentArea}>
                  <div className='gridmargin'>
                    <Form >
                    <FormGroup >
                        <Row >
                        <Label for="exampleEmail">Mobile No.</Label>
                        <div className="input-group input-group col-6">
                         <input name="mobile"  defaultValue={9855497600} className="form-control ml-1" aria-label="Username" aria-describedby="basic-addon1" disabled />
                        </div>
                      <div className="button-group col-6">
                        <Link to="/updatemobile" ><Button className="btn " color="danger">Update Mobile No.</Button></Link>
                      </div>
                        </Row>
                     </FormGroup>
                     <FormGroup>
                        <Label for="exampleEmail">Username</Label>
                        <div className="input-group input-group">
                         <input name="username" defaultValue={"bhucho"} className="form-control " aria-label="Username" aria-describedby="basic-addon1" disabled />
                        </div>
                     </FormGroup>
                      <FormGroup>
                        <Label for="exampleEmail">Name</Label>
                        <div className="input-group input-group">
                         <input name="name"  placeholder="Name" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <div className="input-group input-group">
                         <input name="email"  placeholder="Email" type="email" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                      </FormGroup>
                     <div className="button-group">
                        <Button color="danger" className="btn" type="Update">Save</Button>
                        <Button color="warning" type="submit" className="text-black">Cancel</Button>
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

export default Profile;
