import { Row, Col, Table, Card, CardTitle, CardBody, Button, Form ,FormGroup ,Label ,Input ,FormText, Nav, NavItem } from "reactstrap";
import '../../assets/css/header.css';
import { useState } from "react";
import { contentArea } from "../../Constants";
import Accordion from 'react-bootstrap/Accordion'

const ManageFlock = () => {

    const [showFlock, setShowFlock] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const save = (e) => {
        e.preventDefault();
    }
    const displayFlock = () => {
        setShowFlock(true);  
    }
    const displayForm = () => {
        setShowForm(true);  
    }

  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card className="pb-4">
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            View/Edit Flock
          </CardTitle>
          <CardBody>
            <Row className="mt-3">
              <Col sm="12" md={{offset: 2,size: 8}}>
                <div className={contentArea}>
                    <div className='gridmargin'>
                        <Form onSubmit={save}>
                            <FormGroup>
                                <Label for="farmselect">Select Farm</Label>
                                <div className="input-group">
                                    <Input value="0" onChange={displayFlock} id="farmSelect" name="farm" type="select">
                                        <option value="0" disabled>Select Farm</option>
                                        <option value="1">Sachin Farm</option>
                                        <option value="2">Yogita Farm</option>
                                    </Input>
                                </div>
                                <small className="text-danger">{}</small>
                            </FormGroup>
                            {
                                showFlock &&
                                <FormGroup>
                                    <Label for="farmselect">Select Flock</Label>
                                    <div className="input-group">
                                        <Input value="0" onChange={displayForm} id="farmSelect" name="farm" type="select">
                                            <option value="0" disabled>Select Flock</option>
                                            <option value="1">Sachin Flock</option>
                                            <option value="2">Yogita Flock</option>
                                        </Input>
                                    </div>
                                    <small className="text-danger">{}</small>
                                </FormGroup>
                            }
                            {   
                                showForm &&
                                <>
                                    <Accordion defaultActiveKey="" className="mb-3">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Flock Data - Main</Accordion.Header>
                                            <Accordion.Body style={{backgroundColor:'white'}}>
                                            <FormGroup>
                                                <Label for="flockname">Flock Name</Label>
                                                <div className="input-group">
                                                    <input onChange={(e)=>{}} name="flockname" placeholder="Flock Name" type="text" className="form-control" aria-label="flockname" aria-describedby="basic-addon1" />
                                                </div>
                                                <small className="text-danger">{}</small>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="hatchdate">Hatch Date</Label>
                                            <div className="input-group">
                                                <input onChange={(e)=>{}} name="hatchdate" placeholder="Hatch Date" type="date" className="form-control" aria-label="hatchdate" aria-describedby="basic-addon1" />
                                            </div>
                                            <small className="text-danger">{}</small>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="flocksize">Flock Size</Label>
                                            <div className="input-group">
                                                <input onChange={(e)=>{}} name="flocksize" placeholder="Flock Size" type="number" className="form-control" aria-label="flocksize" aria-describedby="basic-addon1" />
                                            </div>
                                            <small className="text-danger">{}</small>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="actualbirds">Actual birds</Label>
                                            <div className="input-group">
                                                <input onChange={(e)=>{}} name="actualbirds" placeholder="Actual birds" type="number" className="form-control" aria-label="actualbirds" aria-describedby="basic-addon1" />
                                            </div>
                                            <small className="text-danger">{}</small>
                                        </FormGroup>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Breed Data</Accordion.Header>
                                        <Accordion.Body style={{backgroundColor:'white'}}>
                                            <FormGroup>
                                                <Label for="farmselect">Chick Breed</Label>
                                                <div className="input-group">
                                                    <Input id="chickbreed" name="chickbreed" type="select">
                                                        <option disabled>-Chick Breed</option>
                                                        <option value="10">COBB</option>
                                                        <option value="12">COBB400</option>
                                                        <option value="13">COBB500</option>
                                                        <option value="14">COBB700</option>
                                                        <option value="16">HUBB-CLASSIC</option>
                                                        <option value="17">HUBB-FLEX</option>
                                                        <option value="15">HUBBARD</option>
                                                        <option value="9">OTHER</option>
                                                        <option value="18">ROSS</option>
                                                        <option value="22">ROSS-AP95</option>
                                                        <option value="19">ROSS208</option>
                                                        <option value="20">ROSS308</option>
                                                        <option value="21">ROSS708</option>
                                                    </Input>
                                                </div>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="flockname">Hatchery</Label>
                                                <div className="input-group">
                                                    <input onChange={(e)=>{}} name="hatchery" placeholder="Hatchery" type="text" className="form-control" aria-label="hatchery" aria-describedby="basic-addon1" />
                                                </div>
                                                <small className="text-danger">{}</small>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="farmselect">Integration?</Label>
                                                <div className="input-group">
                                                    <Input id="integration" name="integration" type="select">
                                                        <option disabled>-Integration?</option>
                                                        <option value="1">Yes</option>
                                                        <option value="2">No</option>
                                                    </Input>
                                                </div>
                                                <small className="text-danger">{}</small>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="flockname">Chicks Cost</Label>
                                                <div className="input-group">
                                                    <input onChange={(e)=>{}} name="chickscost" placeholder="Chicks Cost" type="text" className="form-control" aria-label="chickscost" aria-describedby="basic-addon1" />
                                                </div>
                                                <small className="text-danger">{}</small>
                                            </FormGroup>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>More Flock Data</Accordion.Header>
                                        <Accordion.Body style={{backgroundColor:'white'}}>
                                            <FormGroup>
                                                <Label for="flockname">Day1 Wt(gms)</Label>
                                                <div className="input-group">
                                                    <input onChange={(e)=>{}} name="weight" placeholder="Day1 Wt(gms)" type="text" className="form-control" aria-label="weight" aria-describedby="basic-addon1" />
                                                </div>
                                                <small className="text-danger">{}</small>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="farmselect">EC Shed?</Label>
                                                <div className="input-group">
                                                    <Input id="ecshed" name="ecshed" type="select">
                                                        <option disabled>-EC Shed</option>
                                                        <option value="1">Yes</option>
                                                        <option value="2">No</option>
                                                    </Input>
                                                </div>
                                                <small className="text-danger">{}</small>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="farmselect">Feed Sys</Label>
                                                <div className="input-group">
                                                    <Input id="feedsys" name="feedsys" type="select">
                                                        <option disabled>-Feed Sys?</option>
                                                        <option value="m">Manual</option>
                                                        <option value="a">Auto</option>
                                                    </Input>
                                                </div>
                                                <small className="text-danger">{}</small>
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="flockname">Drinking Sys</Label>
                                                <div className="input-group">
                                                    <Input id="drinkingsys" name="drinkingsys" type="select">
                                                        <option disabled>-Drinking Sys</option>
                                                        <option value="m">Manual</option>
                                                        <option value="a">Auto</option>
                                                        <option value="b">Both</option>
                                                    </Input>
                                                </div>
                                                <small className="text-danger">{}</small>
                                            </FormGroup>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <div className="button-group">
                                    <Button className="btn" color="danger" type="submit" >Save</Button>
                                    <Button className="btn ml-4" color="warning" type="submit" >Cancel</Button>
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

export default ManageFlock;
