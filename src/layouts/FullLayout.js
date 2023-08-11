import { Outlet } from "react-router-dom";
//import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "reactstrap";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

const FullLayout = () => {

  const location = useLocation();
  var pageName = '';
  location.pathname.split('/')[1]=='login'?pageName = ' Farmer Login':
  location.pathname.split('/')[1]=='home'?pageName = ' Home':
  location.pathname.split('/')[1]=='about'?pageName = ' About Us':
  location.pathname.split('/')[1]=='register'?pageName = ' Farmer Registration':
  location.pathname.split('/')[1]=='contact'?pageName = ' Contact Us':
  pageName = 'Page Not Found'

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
            <Row>
              <Col>
                <Card>
                  <CardBody className="">
                    <Breadcrumb>
                      <BreadcrumbItem active>
                        <span style={{color: "#30c39e"}}><Link to="/" style={{color: '#30c39e','textDecoration':'none'}}>Home</Link></span> /
                        {pageName}
                      </BreadcrumbItem>
                      {/*<BreadcrumbItem>
                        <a href="/">Library</a>
                      </BreadcrumbItem>
                      <BreadcrumbItem active>Data</BreadcrumbItem>*/}
                    </Breadcrumb>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Outlet />
          </Container>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default FullLayout;
