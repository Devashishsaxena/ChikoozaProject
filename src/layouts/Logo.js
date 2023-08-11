//import { ReactComponent as LogoDark } from "../assets/images/logos/adminpro.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img src='' alt="Chikooza" className="logo-dark" />
      {/*<LogoDark />*/}
    </Link>
  );
};

export default Logo;
