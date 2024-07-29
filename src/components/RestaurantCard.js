import { IMG_CDN_URL } from "../constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const  RestaurantCard = ({name,cuisines,cloudinaryImageId,avgRating}) => {
     const {user} = useContext(UserContext)    
    return (
      <div className=" md:w-[200px] m-2 p-2 shadow-lg bg-lime-200 h-auto md:h-[400px] flex flex-col items-center " >
        <img src={IMG_CDN_URL+cloudinaryImageId}  />
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating} stars</h4>
        <h4>{user.name}</h4>
        
      </div>
    );
  };
export default RestaurantCard;