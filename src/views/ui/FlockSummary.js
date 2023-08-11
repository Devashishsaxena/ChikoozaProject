import { Row, Col, Table, Card, CardTitle, CardBody, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import '../../assets/css/header.css';
import { useState } from "react";
import { contentArea } from "../../Constants";

const FlockSummary = () => {

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
          <div className="pdf-button">
              <button type="button" className="btn btn-outline-secondary">Export as PDF</button>
          </div>
            <Row className="mt-3">
              <Col sm="12" md={{offset: 0,size: 12}}>
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
                                            <option value="2">Aayush Flock</option>
                                        </Input>
                                    </div>
                                    <small className="text-danger">{}</small>
                                </FormGroup>
                            }
                            {   
                                showForm &&
                                <>
                                <div>
                                  <Card>
                                    <CardBody>
                                    <Alert color="secondary text-center">Flock Details</Alert>
                                        <Table className="no-wrap mt-3 align-middle table-responsive table-bordered " responsive borderless>
                                                <tbody>
                                                    <tr>
                                                    <td className="table-active">Flock Name</td>
                                                    <td>Jan2021</td>
                                                    <td className="table-active">Status</td>
                                                    <td>Sold</td>
                                                    </tr>
                                                    <tr>
                                                    <td className="table-active">Flock Size</td>
                                                    <td>4050</td>
                                                    <td className="table-active">Current Count</td>
                                                    <td>0</td>
                                                    </tr>
                                                    <tr>
                                                    <td className="table-active">Mortality(%)</td>
                                                    <td>10(0.25%)</td>
                                                    <td className="table-active">Hatch Date</td>
                                                    <td>06/Jan/2021</td>
                                                    </tr>
                                                    <tr>
                                                    <td className="table-active">Age(days)</td>
                                                    <td>372</td>
                                                    <td className="table-active">Breed</td>
                                                    <td>COB400</td>
                                                    </tr>
                                                    <tr>
                                                    <td className="table-active">Feed Intake(Kg)</td>
                                                    <td>1000</td>
                                                    <td className="table-active">Avg. Feed/Bird(gm)</td>
                                                    <td>247.52</td>
                                                    </tr>
                                                    <tr>
                                                    <td className="table-active">Avg. Wt./Bird(gm)</td>
                                                    <td>on</td>
                                                    <td className="table-active">FCR</td>
                                                    <td>on</td>
                                                    </tr>
                                                    <tr>
                                                    <td className="table-active">Bal. Feed Stock (Kg)</td>
                                                    <td>4000</td>
                                                    <td className="table-active"></td>
                                                    <td></td>
                                                    </tr>
                                                </tbody>
                                        </Table>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardBody>
                                    <Alert color="secondary text-center">Cost</Alert>
                                        <Table className="no-wrap mt-3 align-middle table-responsive table-bordered " responsive borderless>
                                                <tbody>
                                                    <tr>
                                                    <td className="table-active">Total Feed (Kgs)</td>
                                                    <td>Jan2021</td>
                                                    <td className="table-active">Status</td>
                                                    <td>Sold</td>
                                                    </tr>
                                                    <tr>
                                                    <td className="table-active">Chicks No.</td>
                                                    <td>4050</td>
                                                    <td className="table-active">Current Count</td>
                                                    <td>0</td>
                                                    </tr>
                                                    <tr>
                                                    <td className="table-active">Vaccine</td>
                                                    <td>10(0.25%)</td>
                                                    <td className="table-active">Hatch Date</td>
                                                    <td>06/Jan/2021</td>
                                                    </tr>
                                                    <tr>
                                                    <td className="table-active">Other(Lab/Eqp/Oth)</td>
                                                    <td>372</td>
                                                    <td className="table-active">Breed</td>
                                                    <td>COB400</td>
                                                    </tr>
                                                </tbody>
                                        </Table>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardBody>
                                    <Alert color="secondary text-center">Sale</Alert>
                                        <Table className="no-wrap mt-3 align-middle table-responsive table-bordered " responsive borderless>
                                                <tbody>
                                                    <tr>
                                                    <td className="table-active">Birds Lifted</td>
                                                    <td>Jan2021</td>
                                                    <td className="table-active">Status</td>
                                                    <td>Sold</td>
                                                    </tr>
                                                    <tr>
                                                    <td className="table-active">Avg. Wt.</td>
                                                    <td>4050</td>
                                                    <td className="table-active">Current Count</td>
                                                    <td>0</td>
                                                    </tr>
                                                    <tr>
                                                    <td className="table-active">Sale Amt.</td>
                                                    <td>10(0.25%)</td>
                                                    <td className="table-active">Hatch Date</td>
                                                    <td>06/Jan/2021</td>
                                                    </tr>
                                                    <tr>
                                                    <td className="table-active">Growing Charges</td>
                                                    <td>372</td>
                                                    <td className="table-active">Breed</td>
                                                    <td>COB400</td>
                                                    </tr>
                                                    <tr>
                                                    <td className="table-active">Penalties</td>
                                                    <td>1000</td>
                                                    <td className="table-active">Avg. Feed/Bird(gm)</td>
                                                    <td>247.52</td>
                                                    </tr>
                                                    <tr>
                                                    <td className="table-active">Other Taxes</td>
                                                    <td>on</td>
                                                    <td className="table-active">FCR</td>
                                                    <td>on</td>
                                                    </tr>
                                                    <tr>
                                                    <td className="table-active">Profit/Loss</td>
                                                    <td>4000</td>
                                                    <td className="table-active"></td>
                                                    <td></td>
                                                    </tr>
                                                </tbody>
                                        </Table>
                                    </CardBody>
                                </Card>
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

export default FlockSummary;
