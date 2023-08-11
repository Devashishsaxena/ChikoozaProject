import { Row, Col, Table, Card, CardTitle, CardBody, Button, Form, FormGroup, Label, Input} from "reactstrap";
import '../../assets/css/header.css';
import { useState } from "react";
import { contentArea } from "../../Constants";
import Accordion from 'react-bootstrap/Accordion'
const ViewPurchase = () => {
    const [showFlock, setShowFlock] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showInputArea, setShowInputArea] = useState('E');
    const save = (e) => {
        e.preventDefault();
    }
    const displayFlock = () => {
        setShowFlock(true);
    }
    const displayForm = () => {
        setShowForm(true);
    }
    const showInputs = (e) => {
        setShowInputArea(e.target.value);
    }
    return (
        <Row>
            <Col>
                {/* --------------------------------------------------------------------------------*/}
                {/* Card-1*/}
                {/* --------------------------------------------------------------------------------*/}
                <Card className="pb-4">
                    <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                    View/Edit Purchase
                    </CardTitle>
                    <CardBody>
                        <Row className="mt-3">
                            <Col sm="12" md={{ offset: 2, size: 8 }}>
                                <div className={contentArea}>
                                    <div className='gridmargin'>
                                        <Form onSubmit={save}>
                                            <FormGroup>
                                                <Label for="farmselect">Farm</Label>
                                                <div className="input-group">
                                                    <Input value="0" onChange={displayFlock}  id="farmSelect" name="farm" type="select">
                                                        <option value="0" disabled>Select Farm</option>
                                                        <option value="1">Farm 1</option>
                                                        <option value="2">Farm 2</option>
                                                    </Input>
                                                </div>
                                                <small className="text-danger">{ }</small>
                                            </FormGroup>
                                            {
                                                showFlock &&
                                                <FormGroup>
                                                    <Label for="farmselect">Flock</Label>
                                                    <div className="input-group">
                                                        <Input value="0" onChange={displayForm} id="farmSelect" name="farm" type="select">
                                                            <option value="0" disabled>Select Flock</option>
                                                            <option value="1">Jan 2021</option>
                                                            <option value="2">Feb 2021</option>
                                                        </Input>
                                                    </div>
                                                    <small className="text-danger">{ }</small>
                                                </FormGroup>
                                            }
                                            {
                                                showForm &&
                                                <>
                                                <Accordion defaultActiveKey="0" className="mb-3">
                                                    <Accordion.Item eventKey="0">
                                                        <Accordion.Header>Purchase Details</Accordion.Header>
                                                        <Accordion.Body style={{ backgroundColor: 'white' }}>
                                                            <Row>
                                                                <Col>
                                                                    <Label for="purchaseDate" className="font-bold flex">Purchase Date</Label>
                                                                    <Input id="purchaseDate" name="purchaseDate" type="date">
                                                                    </Input>
                                                                </Col>
                                                                <Col>
                                                                    <Label for="action" className="font-bold">Purchase Type</Label>
                                                                    <Input disabled value={showInputArea} onChange={showInputs} id="selectAction" name="selectAction" type="select">
                                                                        <option value="F">Feed</option>
                                                                        <option value="M">Medicine</option>
                                                                        <option value="V">Vaccination</option>
                                                                        <option value="E">Equipment</option>
                                                                        <option value="L">Labour</option>
                                                                        <option value="O">Other</option>
                                                                    </Input>
                                                                </Col>
                                                            </Row>

                                                            {/* Feed Data */}
                                                            {
                                                                showInputArea == 'F' &&
                                                                <>
                                                                <Row>
                                                                    <Col>
                                                                        <Label for="feedCompany" className="font-bold flex">Feed Company</Label>
                                                                        <Input id="feedCompany" name="feedCompany" type="text">
                                                                        </Input>
                                                                    </Col>
                                                                    <Col>
                                                                        <Label for="feedBrand" className="font-bold flex">Feed Brand</Label>
                                                                        <Input id="feedBrand" name="feedBrand" type="text">
                                                                        </Input>
                                                                    </Col>
                                                                    </Row>
                                                                    <Row>
                                                                    <Col>
                                                                        <Label for="numberOfBags" className="font-bold flex">No of Bags</Label>
                                                                        <Input id="numberOfBags" name="numberOfBags" type="number">
                                                                        </Input>
                                                                    </Col>
                                                                    <Col>
                                                                        <Label for="bagsSize" className="font-bold">Bags Size</Label>
                                                                        <Input id="bagsSize" name="bagsSize" type="select">
                                                                        <option disabled="" selected>Select</option>
                                                                        <option value="">50 KG</option>
                                                                        <option value="">100 KG</option>
                                                                    </Input>
                                                                    </Col>
                                                                </Row>
                                                                <Row>
                                                                    <Col>
                                                                        <Label for="feedType" className="font-bold">Feed Type</Label>
                                                                        <Input id="feedType" name="feedType" type="select">
                                                                        <option disabled="" selected>Select</option>
                                                                        <option value="">Pre Starter</option>
                                                                        <option value="">Starter</option>
                                                                        <option value="">Finisher</option>
                                                                    </Input>
                                                                    </Col>
                                                                    <Col>
                                                                        <Label for="numberOfBags" className="font-bold flex">Cost</Label>
                                                                        <Input id="numberOfBags" name="numberOfBags" type="number">
                                                                        </Input>
                                                                    </Col>
                                                                </Row>
                                                                <Row>
                                                                    <Col>
                                                                        <Label for="remarks" className="font-bold flex">Remarks</Label>
                                                                        <Input id="remarks" name="remarks" type="text">
                                                                        </Input>
                                                                    </Col>
                                                                </Row>
                                                                </>
                                                            }
                                                            {/* Feed Data */}

                                                            {/* Medicine Data */}
                                                            {
                                                                showInputArea == 'M' &&
                                                                <>
                                                                <Row>
                                                                    <Col>
                                                                        <Label for="medicinecompany" className="font-bold flex">Medicine Company</Label>
                                                                        <Input id="medicinecompany" name="medicinecompany" type="text">
                                                                        </Input>
                                                                    </Col>
                                                                    <Col>
                                                                        <Label for="medicine" className="font-bold flex">Medicine</Label>
                                                                        <Input id="medicine" name="medicine" type="text">
                                                                        </Input>
                                                                    </Col>
                                                                    </Row>

                                                                    <Row>
                                                                    <Col>
                                                                        <Label for="quantity" className="font-bold flex">Quantity</Label>
                                                                        <Input id="quantity" name="quantity" type="number">
                                                                        </Input>
                                                                    </Col>
                                                                    <Col>
                                                                        <Label for="Cost" className="font-bold flex">Cost</Label>
                                                                        <Input id="Cost" name="Cost" type="number">
                                                                        </Input>
                                                                    </Col>
                                                                </Row>
                                                                <Row>
                                                                    <Col>
                                                                        <Label for="remarks" className="font-bold flex">Remarks</Label>
                                                                        <Input id="remarks" name="remarks" type="text">
                                                                        </Input>
                                                                    </Col>
                                                                </Row>
                                                                </>
                                                            }
                                                                 {/* Medicine Data */}

                                                                {/* Vaccination Data */}
                                                            {
                                                                showInputArea == 'V' &&
                                                                <>
                                                                <Row>
                                                                <Col>
                                                                    <Label for="vaccinationcompany" className="font-bold flex">Vaccination Company</Label>
                                                                    <Input id="vaccinationcompany" name="vaccinationcompany" type="text">
                                                                    </Input>
                                                                </Col>
                                                                <Col>
                                                                    <Label for="vaccination" className="font-bold flex">Vaccination</Label>
                                                                    <Input id="Vaccination" name="Vaccination" type="text">
                                                                    </Input>
                                                                </Col>
                                                                </Row>

                                                                <Row>
                                                                <Col>
                                                                    <Label for="quantity" className="font-bold flex">Quantity</Label>
                                                                    <Input id="quantity" name="quantity" type="number">
                                                                    </Input>
                                                                </Col>
                                                                <Col>
                                                                    <Label for="Cost" className="font-bold flex">Cost</Label>
                                                                    <Input id="Cost" name="Cost" type="number">
                                                                    </Input>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <Label for="remarks" className="font-bold flex">Remarks</Label>
                                                                    <Input id="remarks" name="remarks" type="text">
                                                                    </Input>
                                                                </Col>
                                                            </Row>
                                                        </>
                                                    }            
                                                         {/* Vaccination Data */}  
                                                    {
                                                        showInputArea == 'E' &&
                                                        <>                                                  
                                                        {/* Equipment Data */}
                                                                <Row>
                                                                <Col>
                                                                    <Label for="equipmentcompany" className="font-bold flex">Equipment Company</Label>
                                                                    <Input id="equipmentcompany" name="equipmentcompany" type="text">
                                                                    </Input>
                                                                </Col>
                                                                <Col>
                                                                    <Label for="equipment" className="font-bold flex">Equipment</Label>
                                                                    <Input id="equipment" name="equipment" type="text">
                                                                    </Input>
                                                                </Col>
                                                                </Row>

                                                                <Row>
                                                                <Col>
                                                                    <Label for="quantity" className="font-bold flex">Quantity</Label>
                                                                    <Input id="quantity" name="quantity" type="number">
                                                                    </Input>
                                                                </Col>
                                                                <Col>
                                                                    <Label for="Cost" className="font-bold flex">Cost</Label>
                                                                    <Input id="Cost" name="Cost" type="number">
                                                                    </Input>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <Label for="remarks" className="font-bold flex">Remarks</Label>
                                                                    <Input id="remarks" name="remarks" type="text">
                                                                    </Input>
                                                                </Col>
                                                             </Row>
                                                        </>
                                                    }
                                                                {/* Equipment Data */}
                                                   {
                                                        showInputArea == 'L' &&
                                                        <>
                                                            {/* Labour Data */}
                                                            <Row>
                                                                <Col>
                                                                    <Label for="Cost" className="font-bold flex">Cost</Label>
                                                                    <Input id="Cost" name="Cost" type="number">
                                                                    </Input>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <Label for="remarks" className="font-bold flex">Remarks</Label>
                                                                    <Input id="remarks" name="remarks" type="text">
                                                                    </Input>
                                                                </Col>
                                                                </Row>
                                                                </>
                                                   }
                                                                {/* Labour Data */}
                                                                {/* Other Data */}
                                                    {
                                                         showInputArea == 'O' &&
                                                        <>
                                                                <Row>
                                                                <Col>
                                                                    <Label for="Cost" className="font-bold flex">Cost</Label>
                                                                    <Input id="Cost" name="Cost" type="number">
                                                                    </Input>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col>
                                                                    <Label for="remarks" className="font-bold flex">Remarks</Label>
                                                                    <Input id="remarks" name="remarks" type="text">
                                                                    </Input>
                                                                </Col>
                                                            </Row>
                                                            </>
                                                    }
                                                        {/* Other Data */}
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
export default ViewPurchase;