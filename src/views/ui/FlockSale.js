import { Row, Col, Table, Card, CardTitle, CardBody, Alert, Button, Form, FormGroup, Label, Input, FormText, Nav, NavItem } from "reactstrap";
import '../../assets/css/header.css';
import { useState } from "react";
import { contentArea } from "../../Constants";
import Accordion from 'react-bootstrap/Accordion'

const FlockSale = () => {

    const [showFlock, setShowFlock] = useState(false);
    const [showFlockSale, setShowFlockSale] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const save = (e) => {
        e.preventDefault();
    }
    const displayFlock = () => {
        setShowFlock(true);
    }
    const displayForm = () => {
        setShowForm(true);
    }
    const closeForm = () => {
        setShowForm(false);
    }
    const displayFlockSale = () => {
        setShowFlockSale(true);
    }
    const displayButton = () => {
        setShowButton(true);
    }
    const closeAll = () => {
        setShowForm(false);
        setShowFlockSale(false);
        setShowFlock(false);
        setShowButton(false  )
    }
    return (
        <Row>
            <Col>
                {/* --------------------------------------------------------------------------------*/}
                {/* Card-1*/}
                {/* --------------------------------------------------------------------------------*/}
                <Card className="pb-4">
                    <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                        View/FLock Sale
                    </CardTitle>
                    <CardBody>
                        <Row className="mt-3">
                            <Col sm="12" md={{ offset: 2, size: 8 }}>
                                <div className={contentArea}>
                                    <div className='gridmargin'>
                                        <Form onSubmit={save}>
                                            <FormGroup>
                                                <Label for="farmselect">Select Farm</Label>
                                                <div className="input-group">
                                                    <Input value="0" onChange={displayFlockSale} id="farmSelect" name="farm" type="select">
                                                        <option value="0" disabled>Select Farm</option>
                                                        <option value="1">Sachin Farm</option>
                                                        <option value="2">Yogita Farm</option>
                                                    </Input>
                                                </div>
                                                <small className="text-danger">{ }</small>
                                            </FormGroup>
                                            {
                                                showFlockSale && 
                                                <FormGroup>
                                                    <Label for="farmselect">Select Flock</Label>
                                                    <div className="input-group">
                                                            <Input value="0" onChange={displayFlock} id="farmSelect" name="farm" type="select">
                                                            <option value="0" disabled>Select Flock</option>
                                                            <option value="1">Feb 2021</option>
                                                            <option value="2">Jan 2022</option>
                                                        </Input>
                                                    </div>
                                                    <small className="text-danger">{ }</small>
                                                </FormGroup>
                                            }
                                            {
                                                showFlock &&
                                                <FormGroup>
                                                        <Label for="farmselect">Select Sale Type</Label>
                                                    <div className="input-group">
                                                            <Input value="0" onChange={displayButton}  id="farmSelect" name="farm" type="select">
                                                                <option value="0" disabled>Select Sale Type</option>
                                                            <option value="1">Partial Lifting</option>
                                                            <option value="2">Final Lifting</option>
                                                        </Input>
                                                            
                                                    </div>
                                                       
                                                    <small className="text-danger">{ }</small>
                                                </FormGroup>
                                            }
                                            {
                                                showButton&&
                                                <div className="button-group mt-2">
                                                    <Button color="danger" className="btn" type="Update" onClick={displayForm}  >Proceed to next step</Button>
                                                    <Button color="warning" type="submit" className="text-black" onClick={closeForm}  >Cancle</Button>
                                                </div>
                                            }
                                            {
                                                showForm &&
                                                <>
                                                    <Row className="mt-3">
                                                        <Col>
                                                            <Label for="flockname " className="font-bold">Flock </Label>
                                                          <Alert color="danger" className="shadow-4">Feb2021</Alert>
                                                        </Col>
                                                        <Col>
                                                            <Label for="flockname" className="font-bold flex">Current Count</Label>
                                                            <Alert color="danger" className="shadow-4">2025</Alert>
                                                        </Col>
                                                        <Col>
                                                            <Label for="flockname" className="font-bold">Age</Label>
                                                            <Alert color="danger" className="shadow-4">484</Alert>
                                                        </Col>
                                                      
                                                    </Row>
                                                   
                                                    <Accordion defaultActiveKey="" className="mb-3">
                                                        <Accordion.Item eventKey="0">
                                                            <Accordion.Header>Flock Lifting Data</Accordion.Header>
                                                            <Accordion.Body style={{ backgroundColor: 'white' }}>
                                                                <FormGroup>
                                                                    <Label for="flockname">Date</Label>
                                                                    <div className="input-group">
                                                                        <input onChange={(e) => { }} name="flockname" placeholder="Sale Date" type="date" className="form-control" aria-label="flockname" aria-describedby="basic-addon1" />
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
                                                                    <Label for="flocksize">Total Wt.</Label>
                                                                    <div className="input-group">
                                                                        <input onChange={(e) => { }} name="flocksize" placeholder="0" type="number" className="form-control" aria-label="flocksize" aria-describedby="basic-addon1" />
                                                                    </div>
                                                                    <small className="text-danger">{ }</small>
                                                                </FormGroup>
                                                                <FormGroup>
                                                                    <Label for="actualbirds">Avg. Wt(kg)</Label>
                                                                    <div className="input-group">
                                                                        <input onChange={(e) => { }} name="actualbirds" placeholder="0" type="number" className="form-control bg-red-100" aria-label="actualbirds" aria-describedby="basic-addon1" />
                                                                    </div>
                                                                    <small className="text-danger">{ }</small>
                                                                </FormGroup>
                                                                <FormGroup>
                                                                    <Label for="actualbirds">Rate/kg</Label>
                                                                    <div className="input-group">
                                                                        <input onChange={(e) => { }} name="actualbirds" placeholder="0" type="number" className="form-control" aria-label="actualbirds" aria-describedby="basic-addon1" />
                                                                    </div>
                                                                    <small className="text-danger">{ }</small>
                                                                </FormGroup>
                                                                <FormGroup>
                                                                    <Label for="actualbirds">Cost</Label>
                                                                    <div className="input-group">
                                                                        <input onChange={(e) => { }} name="actualbirds" placeholder="0" type="number" className="form-control bg-red-100 " aria-label="actualbirds" aria-describedby="basic-addon1" />
                                                                    </div>
                                                                    <small className="text-danger">{ }</small>
                                                                </FormGroup>
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="1">
                                                            <Accordion.Header>Other Data</Accordion.Header>
                                                            <Accordion.Body style={{ backgroundColor: 'white' }}>
                                                                <FormGroup>
                                                                    <Label for="actualbirds">Buyer</Label>
                                                                    <div className="input-group">
                                                                        <input onChange={(e) => { }} name="buyer" placeholder="Buyer" type="text" className="form-control  " aria-label="actualbirds" aria-describedby="basic-addon1" />
                                                                    </div>
                                                                    <small className="text-danger">{ }</small>
                                                                </FormGroup>
                                                                <FormGroup>
                                                                    <Label for="actualbirds">Vehicle No.</Label>
                                                                    <div className="input-group">
                                                                        <input onChange={(e) => { }} name="vechicle no." placeholder="0" type="number" className="form-control  " aria-label="actualbirds" aria-describedby="basic-addon1" />
                                                                    </div>
                                                                    <small className="text-danger">{ }</small>
                                                                </FormGroup>
                                                                <FormGroup>
                                                                    <Label for="flockname">Remarks</Label>
                                                                    <div className="input-group">
                                                                        <input onChange={(e) => { }} name="remakrs" placeholder="Remarks" type="text" className="form-control" aria-label="hatchery" aria-describedby="basic-addon1" />
                                                                    </div>
                                                                    <small className="text-danger">{ }</small>
                                                                </FormGroup>
                                                             
                                                               
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        
                                                    </Accordion>
                                                    <div className="button-group">
                                                        <Button color="danger"  type="Update"  >Save</Button>
                                                        <Button color="warning" type="submit" className="text-black" onClick={closeAll} >Cancle</Button>
                                                    </div>
                                                </>
                                            }
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

export default FlockSale;
