import { Row, Col, Table, Card, CardTitle, CardBody, Button } from "reactstrap";
import home from "../../assets/images/front/home.png";
import profile1 from "../../assets/images/front/profile2.png";
const About = () => {
  return (
    <>
     <Row className="bg-white p-4">
        <Col sm="6" lg="6" xl="6" xxl="6">
          <h1 style={{color: "#FD2F39"}}>About Chikooza</h1>
          <h3>Broiler Performance Management For Higher Profits</h3>
          <h5>We provied tools for easy management of your broiler flocks and to offer data driven insights into the performance of your boriler flocks to help you achieve better profits</h5>
          <Button type="submit" className="btn mt-2" color="danger" >Read more</Button>
        </Col>
        <Col sm="6" lg="6" xl="6" xxl="6">
          <img src={home} alt="logo" width="100%"/>
        </Col>
     </Row><br/>
     <Row className="bg-white p-4">
          <h1 className="ml-2" style={{color: "#FD2F39"}}>Our Team</h1>
          <br></br>
          <Col sm="6" lg="6" xl="6" xxl="6">
            <Card className='mt-0 shadow-2 m-3 p-3'>
              <div className='one flex'>
                <img src={profile1} alt="logo" width="120px" className='lg:ml-8 md:ml-0 sm:ml-0' />
                <div className="mx-2 lg:ml-8 md:ml-0 sm:ml-0">
                  <br></br>
                  <h5>Abhishek Maheshwari</h5>
                  <ul className="list-unstyled text-red-500 ">
                    <li className="mt-3">
                      <i className=" pi pi-facebook" style={{ 'fontSize': '1.8em' }}></i>&nbsp;&nbsp;&nbsp;&nbsp;
                      <i className="pi pi-twitter" style={{ 'fontSize': '1.8em' }}></i>&nbsp;&nbsp;&nbsp;&nbsp;
                      <i className="pi pi-instagram" style={{ 'fontSize': '1.8em' }}></i>&nbsp;&nbsp;&nbsp;&nbsp;
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </Col>
          <Col sm="6" lg="6" xl="6" xxl="6">
            <Card className='mt-0 shadow-2 m-3 p-3'>
              <div className='one flex'>
                <img src={profile1} alt="logo" width="120px" className='lg:ml-8 md:ml-0 sm:ml-0' />
                <div className="mx-2 lg:ml-8 md:ml-0 sm:ml-0">
                  <br></br>
                  <h5 className="text-black mt-3">Manish goyal</h5>
                  <ul className="list-unstyled text-red-500 ">
                    <li className="mt-2">
                      <i className=" pi pi-facebook" style={{ 'fontSize': '1.8em' }}></i>&nbsp;&nbsp;&nbsp;&nbsp;
                      <i className="pi pi-twitter" style={{ 'fontSize': '1.8em' }}></i>&nbsp;&nbsp;&nbsp;&nbsp;
                      <i className="pi pi-instagram" style={{ 'fontSize': '1.8em' }}></i>&nbsp;&nbsp;&nbsp;&nbsp;
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </Col>
      </Row>
    </>
  );
};
export default About;