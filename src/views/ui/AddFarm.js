import { Row, Col, Card, CardTitle, CardBody, Button, Form ,FormGroup ,Input,Label} from "reactstrap";
import '../../assets/css/header.css';
import { FaMapMarkerAlt} from "react-icons/fa";
import { contentArea } from "../../Constants";
import { useState } from 'react';

const AddFarm = () => {
    let [quardinates , setQuardinates] = useState({latitude : null,longitude : null,quardinates : null});
    let areaLocation = () => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setQuardinates({latitude:position.coords.latitude,longitude:position.coords.longitude,quardinates : `${position.coords.latitude},${position.coords.longitude}`});
        });
    }

  return (
    <Row>
      <Col>
        <Card >
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            New Farm
          </CardTitle>
          <CardBody>
            <Row className="mt-3">
              <Col sm="12" md={{offset: 2,size: 8}}>
                <div className={contentArea}>
                  <div className='gridmargin'>
                    <Form>
                      <FormGroup>
                        <Label for="exampleName">Farm Name</Label>
                            <div className="input-group input-group">
                            <input name="farmname" placeholder="Farm Name" type="text" className="form-control" aria-label="Farm Name" aria-describedby="basic-addon1" />
                            </div>
                            <small id="passwordHelp" className="text-danger"></small>
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleEmail">Address</Label>
                            <div className="input-group input-group">
                            <input name="address" placeholder="Address" type="text" className="form-control" aria-label="Address" aria-describedby="basic-addon1" />
                            </div>
                            <small id="passwordHelp" className="text-danger"></small>
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleCityOrVillage">City or Village</Label>
                            <div className="input-group input-group">
                            <input name="cityorvillage" placeholder="City or Village" type="text" className="form-control" aria-label="City or Village" aria-describedby="basic-addon1" />
                            </div>
                            <small id="passwordHelp" className="text-danger"></small>
                      </FormGroup>
                      <FormGroup>
                            <Label for="exampleMobile">Pincode</Label>
                                <div className="input-group input-group">
                                <input name="pincode" placeholder="Pincode" type="number" className="form-control" aria-label="Pincode" aria-describedby="basic-addon1" />
                                </div>
                                <small id="passwordHelp" className="text-danger"></small>
                      </FormGroup>
                      <FormGroup>
                            <Label for="exampleSelect">Country</Label>
                                <Input id="exampleSelect" name="select" type="select">
                                    <option selected>Select Country</option>
                                    <option>India</option>
                                    <option>America</option>
                                    <option>London</option>
                                </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">State</Label>
                                <Input id="exampleSelect" name="select" type="select">
                                    <option selected>Select State</option>
                                    <option>Madhya Pradesh</option>
                                    <option>Assam</option>
                                    <option>Kashmir</option>
                                </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleMobile">No. of sheds</Label>
                                <div className="input-group input-group">
                                <input name="numberofsheds" placeholder="No. of sheds" type="number" className="form-control" aria-label="No. of sheds" aria-describedby="basic-addon1" />
                                </div>
                                <small id="passwordHelp" className="text-danger"></small>
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleEmail">Coordinates</Label>
                                <div className="input-group input-group">
                                <input name="coordinates" defaultValue={quardinates.quardinates}  placeholder="Coordinates" className="form-control" aria-label="Username" aria-describedby="basic-addon1" disabled />
                                <span onClick={areaLocation} className="input-group-text" style={{color:'#fd5c63'}} id="basic-addon1"><FaMapMarkerAlt></FaMapMarkerAlt></span>
                                </div>
                                <small id="passwordHelp" className="text-danger"></small>
                      </FormGroup>
                            <Button className="btn" color="danger" type="submit" >Submit</Button>
                            <Button className="btn ml-4" color="warning" type="submit" >Cancel</Button>
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

export default AddFarm;
