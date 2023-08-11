import { Row, Col, Table, Card, CardTitle, CardBody, Alert, Button, Form, FormGroup, Label, Input, FormText, Nav, NavItem } from "reactstrap";
import '../../assets/css/header.css';
import { useState } from "react";
import { contentArea } from "../../Constants";
import Accordion from 'react-bootstrap/Accordion'
import { Link } from "react-router-dom";

const EditSale = () => {

    // const [showFlock, setShowFlock] = useState(false);
    // const [showFlockSale, setShowFlockSale] = useState(false);
    // const [showForm, setShowForm] = useState(false);
    const save = (e) => {
        e.preventDefault();
    }
    // const displayFlock = () => {
    //     setShowFlock(true);
    // }
    // const displayForm = () => {
    //     setShowForm(true);
    // }
    // const closeForm = () => {
    //     setShowForm(false);
    // }
    // const displayFlockSale = () => {
    //     setShowFlockSale(true);
    // }
    // const closeAll = () => {
    //     setShowForm(false);
    //     setShowFlockSale(false);
    //     setShowFlock(false);
    // }
    return (
        <Row>
            <Col>
                {/* --------------------------------------------------------------------------------*/}
                {/* Card-1*/}
                {/* --------------------------------------------------------------------------------*/}
                <Card className="pb-4">
                    <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                        View/ Flock Sale
                    </CardTitle>
                    <CardBody>
                        <Row className="mt-3">
                            <Col sm="12" md={{ offset: 2, size: 8 }}>
                                <div className={contentArea}>
                                    <div className='gridmargin'>
                                        <Form onSubmit={save}>
                                           
                                                <>
                                                    <Row className="mt-3">
                                                        <Col>
                                                            <Label for="flockname " className="font-bold">Flock </Label>
                                                            <Alert color="danger" className="shadow-4">Feb2021</Alert>
                                                        </Col>
                                                        <Col>
                                                            <Label for="flockname" className="font-bold flex">Current Count</Label>
                                                            <Alert color="danger" className="shadow-4">0</Alert>
                                                        </Col>
                                                      

                                                    </Row>

                                                    <Accordion defaultActiveKey="0" className="mb-3">
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>Flock Lifting Data</Accordion.Header>
                                                        <Accordion.Body style={{ backgroundColor: 'white' }} >
                                                                <FormGroup>
                                                                    <Label for="flockname"> Sale Date</Label>
                                                                    <div className="input-group">
                                                                        <input onChange={(e) => { }} name="flockname" placeholder="Sale Date" type="date" className="form-control" aria-label="flockname" aria-describedby="basic-addon1" />
                                                                    </div>
                                                                    <small className="text-danger">{ }</small>
                                                                </FormGroup>
                                                            <FormGroup>
                                                                <Label for="actualbirds">Age</Label>
                                                                <div className="input-group">
                                                                    <input onChange={(e) => { }} name="actualbirds" placeholder="0" defaultValue="371" type="number" className="form-control bg-red-100 " aria-label="actualbirds" aria-describedby="basic-addon1" />
                                                                </div>
                                                                <small className="text-danger">{ }</small>
                                                            </FormGroup>
                                                                <FormGroup>
                                                                    <Label for="hatchdate">Lifting Count</Label>
                                                                    <div className="input-group">
                                                                        <input onChange={(e) => { }} name="hatchdate" placeholder="0" type="number" className="form-control" aria-label="hatchdate" aria-describedby="basic-addon1" />
                                                                    </div>
                                                                    <small className="text-danger">{ }</small>
                                                                </FormGroup>
                                                                <FormGroup>
                                                                    <Label for="flocksize">Lifting Wt (kg).</Label>
                                                                    <div className="input-group">
                                                                        <input onChange={(e) => { }} name="flocksize" placeholder="0" type="number" className="form-control" aria-label="flocksize" aria-describedby="basic-addon1" />
                                                                    </div>
                                                                    <small className="text-danger">{ }</small>
                                                                </FormGroup>
                                                                <FormGroup>
                                                                    <Label for="actualbirds">Sale Amount</Label>
                                                                    <div className="input-group">
                                                                        <input onChange={(e) => { }} name="actualbirds" placeholder="0" type="number" className="form-control bg-red-100" aria-label="actualbirds" aria-describedby="basic-addon1" />
                                                                    </div>
                                                                    <small className="text-danger">{ }</small>
                                                                </FormGroup>
                                                              
                                                                <FormGroup>
                                                                    <Label for="actualbirds">Rate</Label>
                                                                    <div className="input-group">
                                                                        <input onChange={(e) => { }} name="actualbirds" placeholder="0" defaultValue="200.00" type="number" className="form-control bg-red-100 " aria-label="actualbirds" aria-describedby="basic-addon1" />
                                                                    </div>
                                                                    <small className="text-danger">{ }</small>
                                                                </FormGroup>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="1">
                                                            <Accordion.Header>Buyer</Accordion.Header>
                                                            <Accordion.Body style={{ backgroundColor: 'white' }}>
                                                                <FormGroup>
                                                                    <Label for="actualbirds">Name</Label>
                                                                    <div className="input-group">
                                                                        <input onChange={(e) => { }} name="name" placeholder="name" type="text" className="form-control  " aria-label="actualbirds" aria-describedby="basic-addon1" />
                                                                    </div>
                                                                    <small className="text-danger">{ }</small>
                                                                </FormGroup>
                                                            <FormGroup>
                                                                <Label for="actualbirds">Address</Label>
                                                                <div className="input-group">
                                                                    <input onChange={(e) => { }} name="address" placeholder="Address" type="text" className="form-control  " aria-label="actualbirds" aria-describedby="basic-addon1" />
                                                                </div>
                                                                <small className="text-danger">{ }</small>
                                                            </FormGroup>
                                                                <FormGroup>
                                                                    <Label for="actualbirds">Phone</Label>
                                                                    <div className="input-group">
                                                                        <input onChange={(e) => { }} name="phone" placeholder="0" type="number" className="form-control  " aria-label="actualbirds" aria-describedby="basic-addon1" />
                                                                    </div>
                                                                    <small className="text-danger">{ }</small>
                                                                </FormGroup>
                                                                <FormGroup>
                                                                    <Label for="flockname">Email</Label>
                                                                    <div className="input-group">
                                                                        <input onChange={(e) => { }} name="email" placeholder="Remarks" type="email" className="form-control" aria-label="hatchery" aria-describedby="basic-addon1" />
                                                                    </div>
                                                                    <small className="text-danger">{ }</small>
                                                                </FormGroup>


                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    <Accordion.Item eventKey="2">
                                                        <Accordion.Header>Other Data</Accordion.Header>
                                                        <Accordion.Body style={{ backgroundColor: 'white' }}>
                                                            <FormGroup>
                                                                <Label for="actualbirds">Vehicle No.</Label>
                                                                <div className="input-group">
                                                                    <input onChange={(e) => { }} name="vehicle no" placeholder="Vehicle No." type="text" className="form-control  " aria-label="actualbirds" aria-describedby="basic-addon1" />
                                                                </div>
                                                                <small className="text-danger">{ }</small>
                                                            </FormGroup>
                                                            <FormGroup>
                                                                <Label for="actualbirds">Remarks</Label>
                                                                <div className="input-group">
                                                                    <input onChange={(e) => { }} name="remark" placeholder="remarks" type="text" className="form-control  " aria-label="actualbirds" aria-describedby="basic-addon1" />
                                                                </div>
                                                                <small className="text-danger">{ }</small>
                                                            </FormGroup>
                                                            


                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    </Accordion>
                                                    <div className="button-group">
                                                        <Button color="danger" type="Update"  >Save</Button>
                                                    <Link to="/viewsale" style={{textDecoration:"none"}}> <Button color="warning" type="submit" className="text-black" style={{textDecoration:"none"}}  >Cancle</Button></Link>  
                                                    </div>
                                                  
                                                </>
                                            
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

export default EditSale;
