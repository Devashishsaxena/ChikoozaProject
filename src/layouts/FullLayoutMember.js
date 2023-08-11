import { Outlet } from "react-router-dom";
import Header from "./HeaderMember";
import Footer from "./Footer";
import { Container } from "reactstrap";
import {
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";
import Carousel from 'react-bootstrap/Carousel'
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import firstimage from "../assets/images/slider/car2.png";

const FullLayoutMember = () => {
  const location = useLocation();
  return (
    <main>
      {/********header**********/}
      <Header />
      <div className="pageWrapper d-lg-flex">
        {/********Sidebar**********/}
        {/*<aside className="sidebarArea shadow" id="sidebarArea">
          <Sidebar />
        </aside>*/}
        {/********Content Area**********/}
        <div className="contentArea">
          {/********Middle Content**********/}
          <Container className="p-4" fluid>
            {/* <Row>
              <Col>
                <Card className="sliderclass">
                  <CardBody className="">
                  <Carousel variant="dark">
                  <Carousel.Item>
                    <img
                      className="d-block"
                      src={firstimage}
                      height='100'
                      width='177'
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block"
                      src={firstimage}
                      height='100'
                      width='177'
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block"
                      src={firstimage}
                      height='100'
                      width='177'
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
                  </CardBody>
                </Card>
              </Col>
            </Row> */}
            {/*<Row>
              <Col>
                <Card>
                  <CardBody className="">
                    <Breadcrumb>
                      <BreadcrumbItem active>
                        <span style={{color: "#30c39e"}}><Link to="/" style={{color: '#30c39e','textDecoration':'none'}}>Home</Link></span> /
                        {
                          location.pathname.split('/')[1]=='login'?' Farmer Login':
                          location.pathname.split('/')[1]=='home'?' Home':
                          location.pathname.split('/')[1]=='about'?' About Us':
                          location.pathname.split('/')[1]=='register'?' Farmer Registration':
                          location.pathname.split('/')[1]=='contact'?' Contact Us':
                          'Page Not Found'
                        }
                      </BreadcrumbItem>
                      <BreadcrumbItem>
                        <a href="/">Library</a>
                      </BreadcrumbItem>
                      <BreadcrumbItem active>Data</BreadcrumbItem>
                    </Breadcrumb>
                  </CardBody>
                </Card>
              </Col>
            </Row>*/}
            <Outlet />
          </Container>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default FullLayoutMember ;
