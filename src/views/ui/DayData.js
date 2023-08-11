import { Row, Col, Table, Card, CardTitle, CardBody, Alert, Button, Form, FormGroup, Label, Input, FormText, Nav, NavItem } from "reactstrap";
import '../../assets/css/header.css';
import { useState } from "react";
import { contentArea } from "../../Constants";
import Accordion from 'react-bootstrap/Accordion';
import { Link, useParams } from "react-router-dom";

const DaywiseData = () => {

    let { farmid, flockid, date } = useParams();
    const [formValues, setFormValues] = useState([{ vaccination: "", vaccinationtype : ""}])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    let addFormFields = () => {
        setFormValues([...formValues, { vaccination: "", vaccinationtype: "" }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }

    return (
        <Row>
            <Col>
                <Card className="pb-4">
                    <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                        Flock Daily Data
                    </CardTitle>
                    <CardBody>
                        <Row className="mt-3">
                            <Col sm="12" md={{ offset: 2, size: 8 }}>
                                <div className={contentArea}>
                                    <div className='gridmargin'>   
                                        <Row className="mt-3 mb-3 ml-4">
                                            <Col>
                                                <Link to="/daydata/sachin/yogita/07-01-2022" className="linkgroup" style={{backgroundColor:'#d66f73',color:'#fff'}}>« 07 Jan, 2021</Link>
                                            </Col>
                                            <Col>
                                                <span className="linkgroup" style={{color:'#000'}}>{date}</span>
                                            </Col>
                                            <Col>
                                                <Link to="/daydata/sachin/yogita/09-01-2022" className="linkgroup" style={{backgroundColor:'#d66f73',color:'#fff'}}>09 Jan, 2021 »</Link>
                                            </Col>
                                        </Row>
                                        <Form  onSubmit={handleSubmit}>
                                            <Row className="mt-3">
                                                <Col>
                                                    <Label for="flockname " className="font-bold">Flock </Label>
                                                    <Alert color="danger" style={{color:'#000'}}>{flockid}</Alert>
                                                </Col>
                                                <Col>
                                                    <Label for="flockname" className="font-bold flex">Hatch Date(Age)</Label>
                                                    <Alert color="danger" style={{color:'#000'}}>06-Jan-2021(2)</Alert>
                                                </Col>
                                                <Col>
                                                    <Label for="flockname" className="font-bold">Intial Bird Count</Label>
                                                    <Alert color="danger" style={{color:'#000'}}>4050</Alert>
                                                </Col>
                                            </Row>
                                            <Accordion defaultActiveKey="0" className="mb-3">
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>Flock Data</Accordion.Header>
                                                    <Accordion.Body style={{ backgroundColor: 'white' }}>
                                                    <Row>
                                                        <Col>
                                                            <Label for="Mortality" className="font-bold">Mortality</Label>
                                                            <input name="Mortality" placeholder="Mortality count" type="number" className="form-control" aria-label="Mortality" aria-describedby="basic-addon1" />
                                                            <small id="Mortality" className="text-danger"></small>
                                                        </Col>
                                                        <Col>
                                                            <Label for="flockname" className="font-bold flex">Total Mort(%)</Label>
                                                            <Alert color="secondary" style={{color:'#000'}}>06-Jan-2021(2)</Alert>
                                                        </Col>
                                                        <Col>
                                                            <Label for="flockname" className="font-bold">Current Bird Cnt</Label>
                                                            <Alert color="secondary" style={{color:'#000'}}>4050</Alert>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <Label for="flockname " className="font-bold">Feed Intake(Kgs)</Label>
                                                            <input name="feedintake" placeholder="Feed Intake(Kgs)" type="number" className="form-control" aria-label="feedintake" aria-describedby="basic-addon1" />
                                                            <small id="feedintake" className="text-danger"></small>
                                                        </Col>
                                                        <Col>
                                                            <Label for="flockname" className="font-bold flex">Total Feed(Kgs)</Label>
                                                            <Alert color="secondary" style={{color:'#000'}}>06-Jan-2021(2)</Alert>
                                                        </Col>
                                                        <Col>
                                                            <Label for="flockname" className="font-bold">Feed Stock(Kgs)</Label>
                                                            <Alert color="danger" style={{color:'#000'}}>4050</Alert>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col>
                                                            <Label for="flockname " className="font-bold">Avg. Feed/Birds</Label>
                                                            <Alert color="danger" style={{color:'#000'}}>{flockid}</Alert>
                                                        </Col>
                                                        <Col>
                                                            <Label for="flockname" className="font-bold flex">Avg. Bird Wt.(gm)</Label>
                                                            <input name="avgcount" placeholder="Avg. Bird Wt.(gm)" type="number" className="form-control" aria-label="avgcount" aria-describedby="basic-addon1" />
                                                            <small id="avgcount" className="text-danger"></small>
                                                        </Col>
                                                        <Col>
                                                            <Label for="flockname" className="font-bold">FCR()</Label>
                                                            <Alert color="danger" style={{color:'#000'}}>4050</Alert>
                                                        </Col>
                                                    </Row>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header>Vaccinations</Accordion.Header>
                                                    <Accordion.Body style={{ backgroundColor: 'white' }}>
                                                        {formValues.map((element, index) => (
                                                            <Row key={index}>
                                                                <Col>
                                                                {
                                                                    index ? <Label>&nbsp;</Label>
                                                                    : <Label for="exampleSelect">Vaccination Today?</Label>
                                                                }
                                                                    <Input id="exampleSelect" name="vaccination" type="select">
                                                                        <option value="">Select Vaccination</option>
                                                                        <option value="1">Marek's</option>
                                                                        <option value="2">New Castle</option>
                                                                        <option value="3">Gumboro (IBD)</option>
                                                                        <option value="4">Inf Bronchitis</option>
                                                                        <option value="5">Fowl Pox</option>
                                                                        <option value="6">Bird Flu</option>
                                                                    </Input>
                                                                </Col>
                                                                <Col>
                                                                <Label for="exampleSelect">&nbsp;</Label>
                                                                    <Input id="exampleSelect" name="type" type="select">
                                                                        <option value='1'>Started</option>
                                                                        <option value='2'>Continue</option>
                                                                        <option value='3'>Completed</option>
                                                                    </Input>
                                                                </Col>
                                                                <Col><Label>&nbsp;</Label><br />
                                                                {
                                                                    index ? 
                                                                        <Button className="btn" color="success" type="submit" onClick={() => removeFormFields(index)}>+Remove</Button>
                                                                    :   <Button className="btn" color="success" type="button" onClick={() => addFormFields()} >+Add More</Button>
                                                                }
                                                                </Col>
                                                            </Row>
                                                        ))}
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2">
                                                    <Accordion.Header>More Data</Accordion.Header>
                                                    <Accordion.Body style={{ backgroundColor: 'white' }}>
                                                        <Row>
                                                            <FormGroup>
                                                                <Input type="checkbox" name="heating" /> <Label check className="ml-2 mr-6">Heating?</Label>
                                                                <Input type="checkbox" name="sick" /> <Label check className="ml-2 mr-6">Sick?</Label>
                                                                <Input type="checkbox" name="cooling" /> <Label check className="ml-2 mr-6">Cooling??</Label>
                                                                <Input type="checkbox" name="meds" /> <Label check className="ml-2 mr-6">Meds?</Label>
                                                            </FormGroup>
                                                        </Row>
                                                    </Accordion.Body>
                                                </Accordion.Item> 
                                            </Accordion>
                                            <div className="button-group">
                                                <Button color="danger" className="btn" type="Update"  >Save</Button>
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

export default DaywiseData;