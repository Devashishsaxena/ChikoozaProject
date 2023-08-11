import React from "react";
import { Container, Col, Row, Card, CardBody, Button, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
//import '../assets/css/header.css';
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import logoMobile from "../assets/images/logos/footer_logo.svg";
const Footer = () => {
  return (
    <>
      <footer className="page-footer font-small p-2 mt-0" style={{ background: "#FD2F39" }}>
        <div className="container text-center">
          <div className="row">
            <div className="col-md-3 mx-auto text-whtie mt-3">
              <img src={logoMobile} width='156' height='35' alt="logoMobile" />
            </div>
            <div className="col-md-5 flex justify-content-center mt-3 mr-8">
              <br></br>
              <h5 className=" text-white font-medium "><Link to="/" className="linkheader  text-white">Home</Link></h5>
              <h5 className="text-white font-medium ml-5 mr-5"><Link to="/about" className="linkheader  text-white">About Us</Link></h5>
              <h5 className=" text-white font-medium" ><Link to="/contact" className="linkheader  text-white">Contact Us</Link></h5>
            </div>
            <div className="col-md-2 mx-auto mt-3">
              <ul className="list-unstyled text-white">
                <li className="">
                  <i className=" pi pi-facebook" style={{ 'fontSize': '1.8em' }}></i>&nbsp;&nbsp;&nbsp;&nbsp;
                  <i className="pi pi-twitter" style={{ 'fontSize': '1.8em' }}></i>&nbsp;&nbsp;&nbsp;&nbsp;
                  <i className="pi pi-instagram" style={{ 'fontSize': '1.8em' }}></i>&nbsp;&nbsp;&nbsp;&nbsp;
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* <div className=" flex justify-content-around text-500  text-center mt-1 " style={{ background: "#FD2F39" }}>
       <div>
        <h2 className="text-white mt-5">Chikooza</h2>
        </div>
        <div className="flex justify-content-around text-white mt-5">
            <h5>Home</h5> <h5 className="ml-5 mr-5">About Us</h5> <h5>Contact Us</h5>
        </div>
        <div >
          <br></br>
          <h6 className="display-8 text-white">Our Social Links</h6> */}
          {/* <br></br> */}
          {/* <ul className="list-unstyled text-white ">
            <li className="">
              <i className=" pi pi-facebook" style={{ 'fontSize': '1.8em' }}></i>&nbsp;&nbsp;&nbsp;&nbsp;
              <i className="pi pi-twitter" style={{ 'fontSize': '1.8em' }}></i>&nbsp;&nbsp;&nbsp;&nbsp;
              <i className="pi pi-instagram" style={{ 'fontSize': '1.8em' }}></i>&nbsp;&nbsp;&nbsp;&nbsp;
            </li>
          </ul>
        </div>
      </div> */}
      <div className=" text-500 p-2 text-center mt-0 bg-black" >
        <p className="text-center text-white text-sm mt-2">Copyright © 2022 chikooza.com, All Right Reserved</p>
      </div>
  </>
  );
};
export default Footer;