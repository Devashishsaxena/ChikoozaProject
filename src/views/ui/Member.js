import { Row, Col, Table, Card, CardTitle, CardBody, Button, Form ,FormGroup ,Label ,Input ,FormText, Nav, NavItem } from "reactstrap";
import '../../assets/css/header.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import { contentArea } from "../../Constants";
import { Tab, Tabs } from 'react-bootstrap';

//Prime react
import { Chart } from 'primereact/chart';
//Prime react

const Member = () => {

  const [mortalityData] = useState({
    labels: ['11-01-2022', '12-01-2022', '13-01-2022', '14-01-2022', '15-01-2022', '18-01-2022', '19-01-2022', '25-01-2022', '26-01-2022'],
    datasets: [{
        label: 'Current Count',
        fill: false,
        borderColor: '#42A5F5',
        yAxisID: 'y',
        tension: .4,
        data: [5000, 4990, 4988, 4975, 4965, 4940, 4910, 4880, 4850]
    }, {
        label: 'Mortality',
        fill: false,
        borderColor: '#00bb7e',
        yAxisID: 'y1',
        tension: .4,
        data: [0, 10, 2, 12, 10, 25, 30, 2, 20]
    }]
  });

  const [weightfcrData] = useState({
    labels: ['Week1', 'Week2', 'Week3', 'Week4', 'Week5', 'Week6', 'Week8', 'Week9', 'Week10'],
    datasets: [{
        label: 'Weight',
        fill: false,
        borderColor: '#42A5F5',
        yAxisID: 'y',
        tension: .4,
        data: [0.1, 0.15, 0.22, 0.28, 0.39, 0.5, 0.7, 1.0, 1.4]
    }, {
        label: 'FCR',
        fill: false,
        borderColor: '#00bb7e',
        yAxisID: 'y1',
        tension: .4,
        data: [0.2, 0.3, 0.5, 0.8, 1.2, 1.6, 2.1, 2.7, 3.4]
    }]
  });

  const getLightTheme = () => {
    let multiAxisOptions = {
        stacked: false,
        maintainAspectRatio: false,
        aspectRatio: .6,
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                type: 'linear',
                display: true,
                position: 'left',
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y1: {
                type: 'linear',
                display: true,
                position: 'right',
                ticks: {
                    color: '#495057'
                },
                grid: {
                    drawOnChartArea: false,
                    color: '#ebedef'
                }
            }
        }
    };

    return {
      multiAxisOptions
    }
  }

  const { multiAxisOptions } = getLightTheme();

  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card className="pb-4">
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Farmer Dashboard
          </CardTitle>
          <CardBody>
            <Row className="mt-3">
              <Col sm="12" md={{offset: 2,size: 8}}>
                <div className={contentArea}>
                    <div className='gridmargin'>
                        <FormGroup>
                            <Label for="exampleSelect">Farm</Label>
                            <Input id="exampleSelect" name="select" type="select">
                              <option>Sachin Farm</option>
                              <option>Yogita Farm</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">Flock</Label>
                            <Input id="exampleSelect" name="select" type="select">
                            <option>Flock 1</option>
                            <option>Flock 2</option>
                            <option>Flock 3</option>
                            </Input>
                        </FormGroup>
                        <FormGroup className="mt-4 mb-4 block-example border border-light">
                            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                                <Tab eventKey="home" title="Mortality">
                                  <div style={{textAlign:"center"}}>
                                    <Chart type="line" data={mortalityData} options={multiAxisOptions} />
                                  </div>
                                </Tab>
                                <Tab eventKey="profile" title="Weight/FCR">
                                  <div style={{textAlign:"center"}}>
                                    <Chart type="line" data={weightfcrData} options={multiAxisOptions} />
                                  </div>
                                </Tab>
                            </Tabs>
                        </FormGroup>
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

export default Member;
