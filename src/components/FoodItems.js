import { IMG_CDN_URL } from "../constants";


const FoodItem = ({name,description,imageId,price}) => {
        
    return (
      <div className="w-[200px] m-2 p-2 shadow-lg bg-lime-200" >
        <img src={IMG_CDN_URL+imageId}  />
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{description}</h3>
        <h4>Rupees: {price/100}</h4>
     
        
      </div>
    );
  };
export default FoodItem; 