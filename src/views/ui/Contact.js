import { Row, Col, Table, Card, CardTitle, Form ,FormGroup ,Label, Button } from "reactstrap";
import { FaPhoneAlt,FaUser,FaUserCircle} from "react-icons/fa";
import { MdEmail} from "react-icons/md";
const Contact = () => {
  return (
      <Row className="bg-white p-4" >
        <Col sm="6" lg="6" xl="6" xxl="6">
                <h1 style={{color:"#FD5C63"}}>Contact Us</h1>
                  <h5>Need to get in the touch with us? either fill out the form with your inquiry or find the department email you'd like to contact below </h5>
                  <div className="mt-5">
                    <MdEmail style={{color:'#FD5C63','fontSize':'1.5em'}}></MdEmail><span className="font-bold ">&nbsp;&nbsp;&nbsp;&nbsp;bhucho@yahoo.com</span>
                  <br />
                  </div>
                  <div className="mt-3">
                     <FaPhoneAlt style={{color:'#FD5C63','fontSize':'1.5em'}}></FaPhoneAlt><span className="font-bold mt-5">&nbsp;&nbsp;&nbsp;&nbsp; +91 5689425798</span>
                  </div>
          </Col>
          {/* ....Contact us Form.... */}
          <Col sm="6" lg="6" xl="6" xxl="6">
              <Form >
                <FormGroup>
                    <Label for="exampleName">Full Name</Label>
                      <div className="input-group input-group">
                          <span className="input-group-text" style={{color:'#FD5C63','fontSize':'1.5em'}} id="basic-addon1"><FaUserCircle></FaUserCircle></span>
                          <input  name="name" placeholder="Full Name" type="text" className="form-control p-3" aria-label="Name" aria-describedby="basic-addon1" />
                      </div>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleName">Mobile</Label>
                        <div className="input-group input-group">
                          <span className="input-group-text" style={{color:'#FD5C63','fontSize':'1.5em'}} id="basic-addon1"><FaPhoneAlt></FaPhoneAlt></span>
                          <input  name="mobile" placeholder="Mobile" type="number" className="form-control p-3" aria-label="Name" aria-describedby="basic-addon1" />
                        </div>
                </FormGroup>
                <FormGroup>
                <Label for="exampleName">What can we help you with ?</Label>
                      <textarea className="form-control" rows='5' aria-describedby="basic-addon1" />
                </FormGroup>
                      <Button className="btn" color="danger" type="submit" >Submit</Button>
              </Form>
          </Col>
    </Row>
  );
};
export default Contact;