import { Row, Col, Table, Card, CardTitle, CardBody, Button, Form ,FormGroup ,Label ,Input ,FormText, Nav, NavItem } from "reactstrap";
import '../../assets/css/header.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaUserCircle, FaMailBulk, FaMobile, FaUser, FaLock} from "react-icons/fa";
import { contentArea } from "../../Constants";

const Register = () => {
  let [addData, setAddData] = useState({name:null,password:null,cpassword:null,username:null,email:null,mobile:null});
  let [addError, setAddError] = useState({name:null,password:null,cpassword:null,username:null,email:null,mobile:null});
  let [nameerr ,setName] = useState(null);
  let [usernameerr ,setUsername] = useState(null);
  let [emailerr ,setEmail] = useState(null);
  let [mobileerr ,setMobile] = useState(null);
  let [passworderr ,setPassword] = useState(null);
  let [cpassworderr ,setCpassword] = useState(null);
  let [error ,setError] = useState(null);
  let [loading, setLoading] = useState(false);
  let [status, setStatus] = useState(0);
  let [mobilenum, setMobileNum] = useState('');
  let [otp, setOtp] = useState('');
  let [otperr, setOtpErr] = useState(null);
  let save = (e) => {
    setLoading(true);
    e.preventDefault();
    if(addData.name === null){
      setName('Name is required');
    }
    if(addData.username === null){
      setUsername('Username is required');
    }
    if(addData.password === null){
      setPassword('Password is required');
    }
    if(addData.cpassword === null){
      setCpassword('Confirm Password is required');
    }
    if(addData.password !== addData.cpassword){
      setCpassword('Password and Confirm Password does not match');
    }
    if(addData.email === null){
      setEmail('Email is required');
    }
    // if(addData.mobile === null){
    //   setMobile('Mobile is required');
    // }
    setLoading(false);
  }

  let inputCpassword = (e) => {
    if(e.target.value===addData.password){
      setCpassword(false);
      setAddData({...addData,[e.target.name]:e.target.value});
    }else{
      setCpassword('Password not match');
    }
  }
  let inputPassword = (e) => {
    if(e.target.value.trim()===''){
      setPassword('Password is required');
      setAddData({...addData,[e.target.name]:e.target.value});
    }else{
      setPassword(false);
      setAddData({...addData,[e.target.name]:e.target.value});
    }
  }
  let inputUsername = (e) => {
    if(e.target.value.trim()===''){
      setUsername('Username is required');
      setAddData({...addData,[e.target.name]:e.target.value});
    }else{
      setUsername(false);
      setAddData({...addData,[e.target.name]:e.target.value});
    }
  }
  // let inputMobile = (e) => {
  //   if(e.target.value.trim()==='' || e.target.value.length!= 10 || isNaN(e.target.value)){
  //     setMobile('Mobile is required or invalid');
  //     setAddData({...addData,[e.target.name]:e.target.value});
  //   }else{
  //     setMobile(false);
  //     setAddData({...addData,[e.target.name]:e.target.value});
  //   }
  // }
  let inputEmail = (e) => {
    if(!(RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(e.target.value.trim()))){
      setEmail('Email is required or invalid');
      setAddData({...addData,[e.target.name]:e.target.value});
    }else{
      setEmail(false);
      setAddData({...addData,[e.target.name]:e.target.value});
    }
  }
  let inputName = (e) => {
    if(e.target.value.trim()===''){
      setName('Name is required');
      setAddData({...addData,[e.target.name]:e.target.value});
    }else{
      setName(false);
      setAddData({...addData,[e.target.name]:e.target.value});
    }
  }
  let mobileNumber = (e) => {
    if(e.target.value.trim()==='' || e.target.value.length > 10 || isNaN(e.target.value)){
      setMobile('Mobile is required or invalid');
      setMobileNum(e.target.value);
    }else{
      setMobile('')
      setMobileNum(e.target.value);
    }
  }
  let otpNumber = (e) => {
    if(e.target.value.trim()==='' || e.target.value.length > 6 || isNaN(e.target.value)){
      setOtpErr('OTP is required or invalid');
      setOtp(e.target.value);
    }else{
      setOtpErr('')
      setOtp(e.target.value);
    }
  }
  let otpSend = () => {
    if(mobilenum.trim() === '' || mobilenum.length != 10 || isNaN(mobilenum)){
      setMobile('Mobile is required or invalid');
    }else{
      setStatus(1);
    }
  }
  let otpVerify = () => {
    if(otp.trim() === '' || otp.length != 6 || isNaN(otp)){
      setOtpErr('OTP is required or invalid');
    }else{
      console.log(otp);
      setStatus(2);
    }
  }
  let changeMobile = () => {
    setStatus(0);
  }

  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card >
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Please Signup
          </CardTitle>
          <CardBody>
            <Row className="mt-3">
              <Col sm="12" md={{offset: 2,size: 8}}>
                <div className={contentArea}>
                  <div className='gridmargin'>
                  {status === 0 &&
                  <>
                    <FormGroup>
                      <Label for="exampleName">Mobile</Label>
                      <div className="input-group input-group">
                        <span className="input-group-text" style={{color:'#fd5c63'}} id="basic-addon1"><FaMobile></FaMobile></span>
                        <input onChange={mobileNumber}  placeholder="Please enter mobile" type="text" maxLength="10"  className="form-control" aria-label="Mobile" aria-describedby="basic-addon1" />
                      </div>
                      <small id="passwordHelp" className="text-danger">{mobileerr}</small>
                    </FormGroup>
                    <Button onClick={otpSend} className="btn" color="danger" type="submit" >Send OTP</Button>
                  </>}
                  {status === 1 && 
                  <>
                    <FormGroup>
                      <Label for="exampleName">Mobile</Label>
                      <div className="input-group input-group">
                        <span className="input-group-text" style={{color:'#fd5c63'}} id="basic-addon1"><FaMobile></FaMobile></span>
                        <input disabled value={mobilenum} name="mobile" placeholder="Please enter mobile" type="number" className="form-control" aria-label="Mobile" aria-describedby="basic-addon1" />
                      </div>
                      <small id="passwordHelp" className="text-primary" style={{cursor:"pointer"}} onClick={changeMobile}>Change mobile number</small>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleMobile">OTP</Label>
                        <div className="input-group input-group">
                          <span className="input-group-text" style={{color:'#fd5c63'}} id="basic-addon1"><FaMobile></FaMobile></span>
                          <input onChange={otpNumber} name="otp" placeholder="Please enter OTP" type="text" maxLength="6" className="form-control" aria-label="otp" aria-describedby="basic-addon1" />
                        </div>
                        <small id="passwordHelp" className="text-danger">{otperr}</small>
                    </FormGroup>
                    <Button onClick={otpVerify} className="btn" color="danger" type="submit" >Verify OTP</Button>
                  </>}
                  {status === 2 && 
                  <>
                    <Form onSubmit={save}>
                      <FormGroup>
                        <Label for="exampleName">Name</Label>
                        <div className="input-group input-group">
                          <span className="input-group-text" style={{color:'#fd5c63'}} id="basic-addon1"><FaUserCircle></FaUserCircle></span>
                          <input onChange={inputName} name="name" placeholder="Name" type="text" className="form-control" aria-label="Name" aria-describedby="basic-addon1" />
                        </div>
                        <small id="passwordHelp" className="text-danger">{nameerr}</small>
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <div className="input-group input-group">
                          <span className="input-group-text" style={{color:'#fd5c63'}} id="basic-addon1"><FaMailBulk></FaMailBulk></span>
                          <input onChange={inputEmail} name="email" placeholder="Email" type="email" className="form-control" aria-label="Email" aria-describedby="basic-addon1" />
                        </div>
                        <small id="passwordHelp" className="text-danger">{emailerr}</small>
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleMobile">Mobile</Label>
                        <div className="input-group input-group">
                          <span className="input-group-text" style={{color:'#fd5c63'}} id="basic-addon1"><FaMobile></FaMobile></span>
                          <input disabled value={mobilenum} name="mobile" placeholder="Mobile" type="phone" className="form-control" aria-label="Mobile" aria-describedby="basic-addon1" />
                        </div>
                        <small id="passwordHelp" className="text-danger">{mobileerr}</small>
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleUsername">Username</Label>
                        <div className="input-group input-group">
                          <span className="input-group-text" style={{color:'#fd5c63'}} id="basic-addon1"><FaUser></FaUser></span>
                          <input onChange={inputUsername} name="username" placeholder="Username" type="text" className="form-control" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <small id="passwordHelp" className="text-danger">{usernameerr}</small>
                      </FormGroup>
                      <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <div className="input-group input-group">
                          <span className="input-group-text" style={{color:'#fd5c63'}} id="basic-addon1"><FaLock></FaLock></span>
                          <input onChange={inputPassword} name="password" placeholder="Password" type="password" className="form-control" aria-label="Password" aria-describedby="basic-addon1" />
                        </div>
                        <small id="passwordHelp" className="text-danger">{passworderr}</small>
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleConfirmPassword">Confirm Password</Label>
                        <div className="input-group input-group">
                          <span className="input-group-text" style={{color:'#fd5c63'}} id="basic-addon1"><FaLock></FaLock></span>
                          <input onChange={inputCpassword} name="cpassword" placeholder="Confirm Password" type="password" className="form-control" aria-label="cpassword" aria-describedby="basic-addon1" />
                        </div>
                        <small id="passwordHelp" className="text-danger">{cpassworderr}</small>
                      </FormGroup>
                      {loading?
                        <Button className="btn" color="danger" type="submit" disabled  >
                          Please wait...
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                        </Button>
                        :
                        <Button className="btn" color="danger" type="submit" >Sign Up</Button>
                      }
                    </Form>
                  </>}
                  </div>  
                </div>
                <div className="button-group mt-4" style={{}}>
                    Already Registered?
                    <Link to="/about" className="btn rowlink">
                    Login Here
                    </Link>
                </div>
              </Col>
            </Row>
            
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Register;
