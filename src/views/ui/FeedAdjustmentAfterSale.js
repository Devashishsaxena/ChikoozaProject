import { Row, Col, Table, Card, CardTitle, CardBody, Alert, Button, Form, FormGroup, Label, Input, FormText, Nav, NavItem } from "reactstrap";
import '../../assets/css/header.css';
import { useState } from "react";
import { contentArea } from "../../Constants";
import Accordion from 'react-bootstrap/Accordion';

const FeedAdjustmentAfterSale = () => {

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
        <Card className="pb-4">
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          Flock Summary
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
                                        <option value="2">Aayush Farm</option>
                                    </Input>
                                </div>
                            </FormGroup>
                            {
                                showFlock &&
                                <FormGroup>
                                    <Label for="flockselect">Select Flock</Label>
                                    <div className="input-group">
                                        <Input value="0" onChange={displayForm} id="flockSelect" name="flock" type="select">
                                            <option value="0" disabled>Select Flock</option>
                                            <option value="1">Sachin Flock</option>
                                            <option value="2">Aayush Flock</option>
                                        </Input>
                                    </div>
                                </FormGroup>
                            }
                            {   
                                showForm &&
                                <>
                                <Accordion defaultActiveKey="0" className="mb-3">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Max Feed Adjustment: 4000 Kgs</Accordion.Header>
                                        <Accordion.Body style={{ backgroundColor: 'white' }}>
                                            <Row>
                                                <Col>
                                                    <Label for="Name" className="font-bold">Name</Label>
                                                    <h5>06-Jan-2021-test-Pre-starter-100000@20.00</h5>
                                                </Col>
                                                <Col>
                                                    <Label for="qtybags" className="font-bold flex">Qty Bags(Kg)</Label>
                                                    <input name="qtybags" placeholder="" type="number" className="form-control" aria-label="qtybags" aria-describedby="basic-addon1" />
                                                    <small id="qtybags" className="text-danger"></small>
                                                </Col>
                                                <Col>
                                                    <Label for="action" className="font-bold">Action</Label>
                                                    <Input id="action" name="action" type="select">
                                                        <option value="">Select</option>
                                                        <option value="1">Adjust</option>
                                                        <option value="2">Return</option>
                                                    </Input>
                                                </Col>
                                            </Row>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <div className="button-group">
                                    <Button color="danger" className="btn" type="Update"  >Submit</Button>
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

export default FeedAdjustmentAfterSale;