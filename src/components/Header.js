import { useState } from "react";
import  logo  from "../assets/img/logo.png";
import { Link } from "react-router-dom";
// const loggedInUser= () => {
//   return true;
// }

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src={logo}
      />
    </a>
  );
};
const Header = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li> 
            <li><Link to="/about">About</Link></li>
            <li> <Link to="/contact">Contact</Link></li>
            <li>Cart</li>
            <li> <Link to="/instamart">Instamart</Link></li>
          </ul>
        </div>
        {isLoggedIn?<button onClick={()=>setIsLoggedIn(false)} >Log In</button>:<button onClick={()=>setIsLoggedIn(true)} >Log Out</button>}
        
        
      </div>
    );
  };

  export default Header;