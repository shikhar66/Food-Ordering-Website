import { useState,useContext } from "react";
import  logo  from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
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
  
  const {user} =useContext(UserContext);

  const cartItems=useSelector(store => store.cart.items)
  console.log(cartItems)

    return (
      <div className="flex justify-between bg-lime-200 shadow-lg sm:bg-lime-100 md:bg-lime-50  ">
        <Title />
        <div className="nav-items">
          <ul className="flex py-10">
            <li className="px-2"><Link to="/">Home</Link></li> 
            <li className="px-2"><Link to="/about">About</Link></li>
            <li className="px-2"> <Link to="/contact">Contact</Link></li>
            
            <li className="px-2"> <Link to="/instamart">Instamart</Link></li>
            <li className="px-2"> <Link to="/cart">Cart-{cartItems.length }</Link></li>
          </ul>
        </div>
        <h1 className="p-10 font-bold text-red-900">{user.name}</h1>
        {isLoggedIn?<button onClick={()=>setIsLoggedIn(false)} >Log In</button>:<button onClick={()=>setIsLoggedIn(true)} >Log Out</button>}
        
        
      </div>
    );
  };

  export default Header;