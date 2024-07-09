import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({name,cuisines,cloudinaryImageId,avgRating}) => {
    
    return (
      <div className="w-[200px] m-2 p-2 shadow-lg bg-lime-200" >
        <img src={IMG_CDN_URL+cloudinaryImageId}  />
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating} stars</h4>
      </div>
    );
  };
export default RestaurantCard;