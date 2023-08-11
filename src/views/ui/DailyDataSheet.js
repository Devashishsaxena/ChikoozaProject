import { Row, Col, Table, Card, CardTitle, CardBody, Form, FormGroup, Label, Input, CardHeader } from "reactstrap";
import '../../assets/css/header.css';
import { useState } from "react";
import { contentArea } from "../../Constants";

const DailyDataSheet = () => {

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
            Daily Data Sheet
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
                                    <CardHeader>
                                            <div className="row">
                                                <div className="col-md-3">
                                                <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                                                    Flock Name: Jan2021 <br/>
                                                    Hatch Date: 2021-01-06 <br/>
                                                    Bird Count: 4050 <br/>
                                                    Integration? No
                                                </CardTitle>
                                                </div>
                                                <div className="col-md-6">
                                                </div>
                                                <div className="col-md-3">
                                                <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                                                    Farm Name: Farm1 <br/>
                                                    Address: indl area phase 1 <br/>
                                                    Phone: 9855497600 <br/>
                                                    EC Shed? No
                                                </CardTitle>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardBody>
                                        <Table className="no-wrap mt-3 align-middle table-responsive table-bordered table-striped" responsive borderless>
                                        <thead>
                                                    <tr>
                                                    <th>Date</th>
                                                    <th>Age(In Days)</th>
                                                    <th>Bird Count</th>
                                                    <th>Mort</th>
                                                    <th>Cum Mort(%)</th>
                                                    <th>Daily Feed Kg(bags)</th>
                                                    <th>Feed/Bird(gm)</th>
                                                    <th>Cum Feed</th>
                                                    <th>Cum Feed/Bird(gm)</th>
                                                    <th>Avg Brd Wt</th>
                                                    <th>FCR</th>
                                                    <th>Fd Purch(Kgs)</th>
                                                    <th>Fd Stk</th>
                                                    <th>Remarks</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                    <td scope="row">07/01/21</td>
                                                    <td>1</td>
                                                    <td>4040</td>
                                                    <td>10</td>
                                                    <td>10(0.25)</td>
                                                    <td>1000(20)</td>
                                                    <td>247.52</td>
                                                    <td>1000(20)</td>
                                                    <td>247.52</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>4000</td>
                                                    <td>test</td>
                                                    </tr>
                                                    <tr>
                                                    <td scope="row">07/01/21</td>
                                                    <td>1</td>
                                                    <td>4040</td>
                                                    <td>10</td>
                                                    <td>10(0.25)</td>
                                                    <td>1000(20)</td>
                                                    <td>247.52</td>
                                                    <td>1000(20)</td>
                                                    <td>247.52</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>4000</td>
                                                    <td>test</td>
                                                    </tr>
                                                    <tr>
                                                    <td scope="row">07/01/21</td>
                                                    <td>1</td>
                                                    <td>4040</td>
                                                    <td>10</td>
                                                    <td>10(0.25)</td>
                                                    <td>1000(20)</td>
                                                    <td>247.52</td>
                                                    <td>1000(20)</td>
                                                    <td>247.52</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>-</td>
                                                    <td>4000</td>
                                                    <td>test</td>
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

export default DailyDataSheet;
