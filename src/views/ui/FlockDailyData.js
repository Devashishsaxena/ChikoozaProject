import { Row, Col, Badge, Table, Card, CardTitle, CardBody, CardText, Button, Form ,FormGroup ,Label ,Input ,FormText, Nav, NavItem } from "reactstrap";
import '../../assets/css/header.css';
import { useState } from "react";
import { contentArea } from "../../Constants";
import Accordion from 'react-bootstrap/Accordion'
import { Tab, Tabs } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import { Link } from "react-router-dom";

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

    const [modalShow, setModalShow] = useState(false);
    const [week, setWeek] = useState('');
    const handleShow = (e) => {
        setWeek(e.target.value)
        setModalShow(true)
    }
    function MyVerticallyCenteredModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Please click on date to enter daily data for Week {week}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <Button color="warning" className="ml-3 mt-3 mb-3">
                        <Link to="/daydata/sachin/yogita/06-12-2022" className="linkdailydata">01 Jan<br />Day 1</Link>
                    </Button>
                    <Button color="warning" className="ms-3 mt-3 mb-3">
                        <Link to="/daydata/sachin/yogita/06-12-2022" className="linkdailydata">02 Jan<br />Day 2</Link>
                    </Button>
                    <Button color="warning" className="ms-3 mt-3 mb-3">
                        <Link to="/daydata/sachin/yogita/06-12-2022" className="linkdailydata">03 Jan<br />Day 3</Link>
                    </Button>
                    <Button color="warning" className="ms-3 mt-3 mb-3">
                        <Link to="/daydata/sachin/yogita/06-12-2022" className="linkdailydata">04 Jan<br />Day 4</Link>
                    </Button>
                    <Button color="warning" className="ms-3 mt-3 mb-3">
                        <Link to="/daydata/sachin/yogita/06-12-2022" className="linkdailydata">04 Jan<br />Day 5</Link>
                    </Button>
                    <Button color="warning" className="ms-3 mt-3 mb-3">
                        <Link to="/daydata/sachin/yogita/06-12-2022" className="linkdailydata">05 Jan<br />Day 6</Link>
                    </Button>
                    <Button color="warning" className="ms-3 mt-3 mb-3">
                        <Link to="/daydata/sachin/yogita/06-12-2022" className="linkdailydata">06 Jan<br />Day 7</Link>
                    </Button>
                </div>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
    }

  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card className="pb-4">
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Flock Days
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
                                    <div>
                                        <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
                                        <Button className="flockdate"  value="1" onClick={handleShow}>
                                            Week 1
                                        </Button>
                                        <Button className="flockdate"  value="2" onClick={handleShow}>
                                            Week 2
                                        </Button>
                                        <Button className="flockdate"  value="3" onClick={handleShow}>
                                            Week 3
                                        </Button>
                                        <Button className="flockdate"  value="4" onClick={handleShow}>
                                            Week 4
                                        </Button>
                                        <Button className="flockdate"  value="5" onClick={handleShow}>
                                            Week 5
                                        </Button>
                                        <Button className="flockdate"  value="6" onClick={handleShow}>
                                            Week 6
                                        </Button>
                                        <Button className="flockdate"  value="7" onClick={handleShow}>
                                            Week 7
                                        </Button>
                                        <Button className="flockdate"  value="8" onClick={handleShow}>
                                            Week 8
                                        </Button>
                                        <Button className="flockdate"  value="9" onClick={handleShow}>
                                            Week 9
                                        </Button>
                                        <Button className="flockdate"  value="10" onClick={handleShow}>
                                            Week 10
                                        </Button>
                                        <Button className="flockdate"  value="11" onClick={handleShow}>
                                            Week 11
                                        </Button>
                                        <Button className="flockdate"  value="12" onClick={handleShow}>
                                            Week 12
                                        </Button>
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
