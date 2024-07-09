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
        className="h-28 p-2"
        alt="logo"
        src={logo}
      />
    </a>
  );
};
const Header = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
    return (
      <div className="flex justify-between bg-lime-200 shadow-lg sm:bg-lime-100 md:bg-lime-50  ">
        <Title />
        <div className="nav-items">
          <ul className="flex py-10">
            <li className="px-2"><Link to="/">Home</Link></li> 
            <li className="px-2"><Link to="/about">About</Link></li>
            <li className="px-2"> <Link to="/contact">Contact</Link></li>
            <li className="px-2">Cart</li>
            <li className="px-2"> <Link to="/instamart">Instamart</Link></li>
          </ul>
        </div>
        {isLoggedIn?<button onClick={()=>setIsLoggedIn(false)} >Log In</button>:<button onClick={()=>setIsLoggedIn(true)} >Log Out</button>}
        
        
      </div>
    );
  };

  export default Header;