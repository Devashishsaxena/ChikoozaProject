import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import Logo from "./Logo";
//import { ReactComponent as LogoWhite } from "../assets/images/logos/adminprowhite.svg";
import user1 from "../assets/images/users/user4.jpg";
import logo from "../assets/images/logos/chikooza_logo.svg";
import logoMobile from "../assets/images/logos/chikooza_logo_mobile.png";
import '../assets/css/header.css';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  // const showMobilemenu = () => {
  //   document.getElementById("sidebarArea").classList.toggle("showSidebar");
  // };
  return (
    <Navbar color="white" light expand="md" className="fix-header">
      <div className="d-flex align-items-center">
        <div className="d-lg-block d-none me-5 pe-3">
          <img src={logo} width='156' height='35' alt="user" />
        </div>
        <NavbarBrand href="/">
          <img src={logoMobile} width='35' height='35' alt="user" className="d-lg-none" />
        </NavbarBrand>
        {/* <Button
          color="primary"
          className=" d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button> */}
      </div>
      <div className="hstack gap-2">
        <Button
          color="primary"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>

      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto" navbar>
          <NavItem>
            <Link to="/member" className="linkheader">
              Home
            </Link>
          </NavItem>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav className="linkheader">
              Farm
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem className="linkheader">
                <Link to="/addfarm" className="link">Add Farm</Link>
              </DropdownItem>
              <DropdownItem className="linkheader">
              <Link to="/managefarm" className="link">View/Edit Farm</Link>
            </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav className="linkheader">
              Flock
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem className="linkheader"><Link to="/addflock" className="link">Add Flock</Link></DropdownItem>
              <DropdownItem className="linkheader"><Link to="/manageflock" className="link">View/Edit Flock</Link></DropdownItem>
              <DropdownItem className="linkheader"><Link to="/flockdailydata" className="link">Flock Daily Data</Link></DropdownItem>
              <DropdownItem className="linkheader"><Link to="/FeedAdjustmentAfterSale" className="link">Feed Adjustment After Sale</Link></DropdownItem>
              <DropdownItem className="linkheader"><Link to="/member" className="link">Feed Adjustment To New Flock</Link></DropdownItem>
              <DropdownItem className="linkheader"><Link to="/member" className="link">View Feed Adjustments</Link></DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav className="linkheader">
              Sales
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem className="linkheader"><Link to="/flocksale" className="link">Flock Sale</Link></DropdownItem>
              <DropdownItem className="linkheader"><Link to="/viewsale" className="link">View/Edit Sales</Link></DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav className="linkheader">
              Purchases
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem className="linkheader"><Link to="/addpurchase" className="link">Add Purchase</Link></DropdownItem>
              <DropdownItem className="linkheader"><Link to="/listpurchase" className="link">View/Edit Purchase</Link></DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav className="linkheader">
              Reports
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem className="linkheader"><Link to="/dailydatasheet" className="link">Daily Data Sheet</Link></DropdownItem>
              <DropdownItem className="linkheader"><Link to="/flocksummary" className="link">Flock Summary</Link></DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="transparent">
            <img
              src={user1}
              alt="profile"
              className="rounded-circle"
              width="30"
            ></img>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem><Link to="/profile" className="link">Profile</Link></DropdownItem>
            <DropdownItem><Link to="/changepassword" className="link">Change password</Link></DropdownItem>
            <DropdownItem>Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Collapse>
    </Navbar>
  );
};

export default Header;
