import { Row, Col, Table, Card, CardTitle, CardBody, Button, Form, FormGroup, Label, Input, FormText, Nav, NavItem } from "reactstrap";
import '../../assets/css/header.css';
import { useState } from "react";
import { contentArea } from "../../Constants";
import Accordion from 'react-bootstrap/Accordion'
import { Link } from "react-router-dom";
const ListPurchase = () => {
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
    const cancleAll = () => {
        setShowForm(false);
        setShowFlock(false);
    }
    return (
        <Row>
            <Col>
                {/* --------------------------------------------------------------------------------*/}
                {/* Card-1*/}
                {/* --------------------------------------------------------------------------------*/}
                <Card className="pb-4">
                    <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                        View/Sales
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
                                                    <Input value="0" onChange={displayFlock} id="farmSelect" name="farm" type="select">
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
                                                    <Label for="farmselect">Select Flock</Label>
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
                                                    <Button color="danger" type="submit"  className="mb-3" >Export</Button>
                                                    <Table bordered striped>
                                                        <thead>
                                                            <tr className="text-center">
                                                                <th>Date</th>
                                                                <th>Type</th>
                                                                <th>Amount(Rs)</th>
                                                                <th>Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className="text-center">
                                                                <th scope="row">12th jan 2022</th>
                                                                <td>MED</td>
                                                                <td>100,000</td>
                                                                <td className="text-blue-800 font-bold"><Link to="/viewpurchase" style={{ textDecoration: "none" }}>View</Link></td>
                                                            </tr>
                                                            <tr className="text-center">
                                                                <th scope="row">13th jan 2022</th>
                                                                <td>FEED</td>
                                                                <td>30,000</td>
                                                                <td className="text-blue-800 font-bold"> <Link to="/viewpurchase" style={{ textDecoration: "none" }}>View</Link></td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
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
export default ListPurchase;