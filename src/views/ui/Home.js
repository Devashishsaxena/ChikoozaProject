import ProjectTables from "../../components/dashboard/ProjectTable";
import { Row, Col, Table, Card, CardTitle, CardBody ,Button, Form ,FormGroup ,Label} from "reactstrap";
import home from "../../assets/images/front/home.png";
import profile1 from "../../assets/images/front/profile2.png";
import HeaderImg from "../../assets/frontimages/1.jpg";
import Image3 from "../../assets/frontimages/2.jpg";
import Image4 from "../../assets/frontimages/3.jpg";
import Image5 from "../../assets/frontimages/4.jpg";
import Image6 from "../../assets/frontimages/about.jpg";
import Image7 from "../../assets/frontimages/bg.jpg";
import Image8 from "../../assets/frontimages/bg1.jpg";
import Image9 from "../../assets/frontimages/bg2.jpg";
import Marquee from "react-fast-marquee";
import CarousalHome from "./CarousalHome"

import { FaPhoneAlt,FaUser,FaUserCircle} from "react-icons/fa";
import { MdEmail} from "react-icons/md";
const Home = () => {
  return (
    <>
      <Row className="bg-white p-4" >
        <Col sm="6" lg="6" xl="6" xxl="6">
          <div className="col-12 md:col-6 lg:ml-8 md:ml-4 sm:ml-0 align-self-center">
            <span style={{fontSize:"50px"}}>INSIGHTS <span className="font-light">INTO YOUR</span> FLOCK</span>
            <h5 className="mt-3">Broiler Management and Performance Analysis </h5>
            <Button type="submit" className="btn mt-4" color="danger" >Read more</Button><br /><br />
          </div>
        </Col>
        {/* ....Contact us Form.... */}
        <Col sm="6" lg="6" xl="6" xxl="6">
          <div className="lg:mr-8 md:mr-4 sm:mr-0">
            <CarousalHome />
          </div>
        </Col>
    </Row>
    <Row className="bg-white">
      <div className="grid mt-2">
        <div className="col-12 index_banner">
          <h1  className="text-center  text-white" style={{fontSize:"50px",fontWeight:"900"}}>welcome to Chikooza</h1>
          <div className="flex justify-content-center">
          <Button type="submit" className="btn mt-4 p-3" color="danger" >Read more</Button>
          </div>
        </div>
      </div>
    </Row>
    <Row className="bg-white">
      <Marquee>
        <div className="">
          <img src={Image9}  height="500px" alt="Natural" />
        </div>
      </Marquee>
    </Row>
    </>
  );
};
export default Home;