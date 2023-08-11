import { Row, Col, Table, Card, CardTitle, Form ,FormGroup ,Label } from "reactstrap";
import { FaPhoneAlt,FaUser,FaUserCircle} from "react-icons/fa";
import { MdEmail} from "react-icons/md";
import { Button } from 'primereact/button';
const Contact = () => {
  return (
    <Row>
    <div className="grid bg-white">
      {/*... contact design... */}
          <div className="col-12 md:col-6" >
                <h1 className="font-bold text-5xl mt-5" style={{color:"#FD5C63",fontFamily:"'Montserrat', sans-serif;"}}>Contact Us  </h1>
                  <p className="text-2xl" style={{fontFamily:"'Montserrat', sans-serif;"}}>Need to get in the touch with us? either fill<br></br>
                                 out the form with your inquiry or find the<br></br>
                                 department email you'd like to contact<br></br>below </p>
                  <div className="mt-5">
                    <MdEmail style={{color:'#FD5C63','fontSize':'1.5em'}}></MdEmail><span className="font-bold ">&nbsp;&nbsp;&nbsp;&nbsp;bhucho@yahoo.com</span>
                  <br></br>
                  </div>
                  <div className="mt-5">
                     <FaPhoneAlt style={{color:'#FD5C63','fontSize':'1.5em'}}></FaPhoneAlt><span className="font-bold mt-5">&nbsp;&nbsp;&nbsp;&nbsp; +91 5689425798</span>
                  </div>
          </div>
          {/* ....Contact us Form.... */}
          <div className="col-12 md:col-6" >
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
                      <p className="font-medium" style={{fontFamily:"'Montserrat', sans-serif;"}}>What can we help you with ?</p>
                      <textarea className="form-control" rows='5' aria-describedby="basic-addon1" />
                       <Button label="submit " className="p-button-raised p-button-danger mt-3" />
              </Form>
          </div>
    </div>
  </Row>
  );
};
export default Contact;