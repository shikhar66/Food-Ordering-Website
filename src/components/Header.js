import { useState,useContext } from "react";
import  logo  from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import useOnline from "../utils/useOnline";
// const loggedInUser= () => {
//   return true;
// }

const Title = () => {
  return (
    <a href="/">
      <img
        data-testid="logo"
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
 
  const isOnline = useOnline();

    return (
      <div className="flex justify-between bg-lime-100 shadow-lg  z-10 ">
        <Title />
        <div className="nav-items">
          <ul className="flex py-10">
            <li className="px-2"><Link to="/">Home</Link></li> 
            <li className="px-2"><Link to="/about">About</Link></li>
            <li className="px-2"> <Link to="/contact">Contact</Link></li>
            
            <li className="px-2"> <Link to="/instamart">Instamart</Link></li>
            <li className="px-2" > <Link to="/cart" data-testid="cart">Cart-{cartItems.length }</Link></li>
          </ul>
        </div>
        <h1 data-testid="online-status" className="w-6 h-6 pt-9  ">{isOnline ? "🟢" : "🔴" }</h1>
        <h1 className="p-10 font-bold text-red-900">{user.name}</h1>
        {isLoggedIn?<button className="p-5 my-8 flex items-center h-1 m-2 bg-green-400 hover:bg-green-500 rounded-lg" onClick={()=>setIsLoggedIn(false)} >Log In</button>:<button className="p-5 my-8 flex items-center h-1 m-2 bg-green-400 hover:bg-green-500 rounded-lg" onClick={()=>setIsLoggedIn(true)} >Log Out</button>}
        
        
      </div>
    );
  };

  export default Header;